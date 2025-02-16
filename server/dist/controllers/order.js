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
exports.updateOrder = exports.createOrder = exports.getOrders = void 0;
const order_1 = __importDefault(require("../models/order"));
const getOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = yield order_1.default.find({});
        res.status(200).json({ success: true, data: order });
    }
    catch (error) {
        console.log("Error in fetching orders summary:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
});
exports.getOrders = getOrders;
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cart = req.body;
    const newOrder = new order_1.default({ cart });
    try {
        yield newOrder.save();
        res.status(201).json({ success: true, data: newOrder });
    }
    catch (error) {
        console.error("Error in creating order:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
});
exports.createOrder = createOrder;
const updateOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { status } = req.body;
    try {
        const updatedProduct = yield order_1.default.findByIdAndUpdate(id, {
            $set: { status },
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
exports.updateOrder = updateOrder;
