"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCartOrder = exports.updateCartOrder = exports.createCartOrder = exports.getCartSummary = void 0;
const cart_1 = __importDefault(require("../models/cart"));
const getCartSummary = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cart = yield cart_1.default.find({});
        res.status(200).json({ success: true, data: cart });
    }
    catch (error) {
        console.log("Error in fetching products:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
});
exports.getCartSummary = getCartSummary;
const createCartOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("reached!");
    const order = req.body;
    console.log(order);
    const newOrder = new cart_1.default(order);
    try {
        yield newOrder.save();
        res.status(201).json({ success: true, data: newOrder });
    }
    catch (error) {
        console.error("Error in creating product", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
});
exports.createCartOrder = createCartOrder;
const updateCartOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { quantity } = req.body;
    try {
        const updatedProduct = yield cart_1.default.findByIdAndUpdate(id, {
            $set: { quantity },
        }, {
            new: true,
        });
        res.status(200).json({ success: true, data: updatedProduct });
    }
    catch (error) {
        console.error("Error in updating product", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
});
exports.updateCartOrder = updateCartOrder;
const deleteCartOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield cart_1.default.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Product deleted" });
    }
    catch (error) {
        console.error("Error in deleting product", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
});
exports.deleteCartOrder = deleteCartOrder;
