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
exports.getOrders = void 0;
const order_1 = __importDefault(require("../models/order"));
const getOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = yield order_1.default.find({});
        res.status(200).json({ success: true, data: order });
    }
    catch (error) {
        console.log("Error in fetching products:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
});
exports.getOrders = getOrders;
// export const updateCartOrder = async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const { quantity } = req.body;
//   try {
//     const updatedProduct = await Order.findByIdAndUpdate(
//       id,
//       {
//         $set: { quantity },
//       },
//       {
//         new: true,
//       }
//     );
//     res.status(200).json({ success: true, data: updatedProduct });
//   } catch (error: any) {
//     console.error("Error in updating product", error.message);
//     res.status(500).json({ success: false, message: "Server Error" });
//   }
// };
