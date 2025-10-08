import mongoose,{ Schema } from "mongoose";

const alertSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    targetPrice: {
        type: Number,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
},{
    timestamps: true
});

export const Alert = mongoose.model("Alert",alertSchema)