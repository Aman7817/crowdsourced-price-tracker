import mongoose, {Schema} from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new Schema(
    {
        FirstName:{
            type: String,
            required: true,
            index: true
        },
        LastName:{
            type: String,
            required: true,
            index: true
        },
        Email: {
            type: String,
            required: true,
        },
        Password: {
            type: String,
            required: [true,'Password is required'],

        },
        refreshToken: {
            type: String,

        } 
    },
    {
        timestamps: true
    }
);

userSchema.pre("save",async function (next) {
    if(!this.isModified("Password")) return next();

    this.Password = await bcrypt.hash(this.Password,10);
});

userSchema.methods.isPasswordCorrect = async function(Password) {
    return await bcrypt.compare(Password,this.Password);

    
}

userSchema.methods.generateAccessToken = async function () {
    return jwt.sign(
        {
            _id: this._id,
            Email: this.Email,
            FullName: this.FullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
        
    )
}

userSchema.methods.generateRefreshToken = async function () {
    return jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}


export const User = mongoose.model("User",userSchema);