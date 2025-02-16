"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// const productSchema = new mongoose.Schema({
//   productId: {
//     type: String,
//     required: true,
//   },
//   title: {
//     type: String,
//     required: true,
//   },
//   quantity: {
//     type: Number,
//     required: true,
//   },
//   deliveryFee: {
//     type: Number,
//     required: true,
//   },
//   price: {
//     type: Number,
//     required: true,
//   },
// });
const orderSchema = new mongoose_1.default.Schema({
    cart: [
        {
            id: {
                type: String,
                required: true,
            },
            title: {
                type: String,
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
            },
            deliveryFee: {
                type: Number,
                required: true,
            },
            price: {
                type: Number,
                required: true,
            },
        },
    ],
    status: {
        type: Boolean,
        required: false,
        default: false,
    },
}, {
    timestamps: true,
});
const Order = mongoose_1.default.model("Order", orderSchema);
exports.default = Order;
