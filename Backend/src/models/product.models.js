import mongoose,{Schema} from "mongoose";

const priceHistorySchema = new Schema({
    price: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    }
});

const productSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    site: {
        type: String,
        required: true
    },
    currentPrice: {
        type: Number,
        required: true
    },
    priceHistory: [priceHistorySchema],
    
},{
    timestamps: true
});

export const Product = mongoose.model("Product",productSchema);