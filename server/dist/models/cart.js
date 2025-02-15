"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const cartSchema = new mongoose_1.default.Schema({
    availabilityStatus: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: false,
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    dimension: {
        depth: {
            type: Number,
            required: false,
        },
        height: {
            type: Number,
            required: false,
        },
        width: {
            type: Number,
            required: false,
        },
    },
    discountPercentage: {
        type: Number,
        required: true,
    },
    id: {
        type: Number,
        required: true,
    },
    images: {
        type: Array,
        required: true,
    },
    meta: {
        barCode: {
            type: String,
            required: false,
        },
        createdAt: {
            type: Date,
            required: true,
        },
        qrCode: {
            type: String,
            required: true,
        },
        updatedAt: {
            type: Date,
            required: true,
        },
    },
    minimumOrderQuantity: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    returnPolicy: {
        type: String,
        required: true,
    },
    reviews: [
        {
            comment: {
                type: String,
                required: true,
            },
            date: {
                type: Date,
                required: true,
            },
            rating: {
                type: Number,
                required: true,
            },
            reviewerEmail: {
                type: String,
                required: true,
            },
            reviewerName: {
                type: String,
                required: true,
            },
        },
    ],
    shippingInformation: {
        type: String,
        required: true,
    },
    sku: {
        type: String,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
    tags: {
        type: Array,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    warranty: {
        type: String,
        required: false,
    },
    weight: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        default: 1,
    },
    deliveryFee: {
        type: Number,
        required: true,
        default: 3,
    },
    // title: {
    //   type: String,
    //   required: true,
    // },
    // category: {
    //   type: String,
    //   required: true,
    // },
    // quantity: {
    //   type: Number,
    //   required: true,
    // },
    // price: {
    //   type: Number,
    //   required: true,
    // },
    // thumbnail: {
    //   type: String,
    //   required: true,
    // },
    // deliveryFee: {
    //   type: Number,
    //   required: true,
    // },
    // total: {
    //   type: Number,
    //   required: true,
    // },
}, {
    timestamps: true,
});
const Cart = mongoose_1.default.model("Cart", cartSchema);
exports.default = Cart;
