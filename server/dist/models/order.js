"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const orderSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: false,
        default: 1,
    },
    deliveryFee: {
        type: Number,
        required: false,
        default: 3,
    },
    price: {
        type: Number,
        required: true,
    },
    isCompleted: {
        type: Boolean,
        required: false,
        default: false,
    },
}, {
    timestamps: true,
});
const Order = mongoose_1.default.model("Order", orderSchema);
exports.default = Order;
