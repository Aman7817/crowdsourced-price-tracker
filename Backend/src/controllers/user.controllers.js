import {asyncHandler} from "../utils/asynckHandler.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import { User } from "../models/user.modesl.js"

const genreateAceessAndRefreshToken = async (userId) => {
    try {
        const user = await User.findById(userId);

        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        user.refreshToken = refreshToken
        await user.save({validateBeforeSave: false})

        return{
            accessToken,
            refreshToken
        }
    } catch (error) {
        throw new ApiError(501, "Something went wrong while generating tokens");
    }
}


const registerUser = asyncHandler(async(req,res) => {
    const {FirstName,LastName,Email,Password} = req.body;
    if([FirstName,LastName,Email,Password].some((field) => field?.trim() == "")) {
        throw new ApiError(400, "All fields are required")
    }

    const existUser = await User.findOne({
        Email
    });
    if(existUser) {
        throw new ApiError(409, "User with this email   already exists")
    }

    const newUser = await User.create({
        FirstName: FirstName,
        LastName: LastName,
        Email,
        Password,
    });
    const createdUser = await User.findById(newUser._id).select("-Password -refreshToken")

    if(!createdUser) {
       throw new ApiError(500, "Something went wrong while registering the user"); 
    }
    return res.status(201).json(
        new ApiResponse(200, createdUser, "User registered successfully")
    )
});

const loginUser = asyncHandler(async(req,res) => {
    const {Email,Password} = req.body;

    if(!Email) {
        throw new ApiError(400, " Email is required");
    }

    const user = await User.findOne({
        Email,
    })
    console.log("User found:", user ? "Yes" : "No");
    if(!user) {
        throw new ApiError(404, "User does not exist");
    }
    console.log("Checking password...");
    const isPasswordCorrect = await user.isPasswordCorrect(Password)
    console.log("Password valid:", isPasswordCorrect);
    if(!isPasswordCorrect) {
        throw new ApiError(401, "Invalid user credentials");
    }

    const {accessToken, refreshToken} = await genreateAceessAndRefreshToken(user._id)

    const loggedInUser = await User.findById(user._id).select("-password -refreshToken")
    const options = {
        httpOnly: true,
        secure: true
    }

    return res
        .status(200)
        .cookie("accessToken",accessToken,options)
        .cookie("refreshToke",refreshToken,options)
        .json(
            new ApiResponse(
                200,
                {user: loggedInUser,accessToken,refreshToken},
                "user logged In sucessfully"
            )
        )
})

const logOutUser = asyncHandler(async(req,res) => {
    // Remove the refresh token from the database
    await User.findByIdAndUpdate(
        req.user._id,
        { $set: { refreshToken: undefined } },
        { new: true }
    );

    // Clear cookies and respond
    const options = {
        httpOnly: true,
        secure: true,
    };
    return res
        .status(200)
        .cookie("accessToken", "", options)
        .cookie("refreshToken", "", options)
        .json(new ApiResponse(200, {}, "User logged out successfully"));
})

const getCurrentUser = asyncHandler(async(req,res) => {
    return res
    .status(200)
    .json(200,req.user, "User fatched successfully");
});

const changePassword = asyncHandler(async(req,res) => {
    const {oldPassword,newPassword} = req.body;
    const user = await User.findById(req.user._id);

    const isPasswordCorrect = await user.isPasswordCorrect(oldPassword);

    if(!isPasswordCorrect) {
        throw new ApiError(400,"Invalid Password");
    }
    user.Password = newPassword;
    await user.save({validateBeforeSave: false});

    return res.status(200).json({
        message: "Password changed successfully",
    })
})

const updateAccountDetails = asyncHandler(async(req,res) => {
    const {FullName,Email} = req.body;

    if(!FullName || !Email) {
        throw new ApiError(400,"Please fill in all fields");
    }

    const user = await User.findByIdAndUpdate(
        req.user_id,
        {
            $set: {
                FullName: FullName,
                Email: Email
            }
        },
        {new: true}
    )
    return res.status(200).json(
        new ApiResponse(200,user,"Account details updated successfully")
    )
})

export {
    registerUser,
    loginUser,
    logOutUser,
    updateAccountDetails,
    changePassword,
    getCurrentUser
}