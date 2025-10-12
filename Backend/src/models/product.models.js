import mongoose, { Schema } from "mongoose";

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
    required: true
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
  targetPrice: {
    type: Number,
    required: true,
   },
  priceHistory: [priceHistorySchema],

  // 👇 Add user reference
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
  lastChecked: {
    type: Date,
    default: null
  }

}, {
  timestamps: true
});

// 👇 Create compound index for (url + user)
productSchema.index({ url: 1, user: 1 }, { unique: true });

export const Product = mongoose.model("Product", productSchema);




// import mongoose,{Schema} from "mongoose";

// const priceHistorySchema = new Schema({
//     price: {
//         type: Number,
//         required: true
//     },
//     date: {
//         type: Date,
//         required: true,
//         default: Date.now
//     }
// });

// const productSchema = new mongoose.Schema({
//     url: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     name: {
//         type: String,
//         required: true
//     },
//     site: {
//         type: String,
//         required: true
//     },
//     currentPrice: {
//         type: Number,
//         required: true
//     },
//     priceHistory: [priceHistorySchema],
    
// },{
//     timestamps: true
// });

// export const Product = mongoose.model("Product",productSchema);