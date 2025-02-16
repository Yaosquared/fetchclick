"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const order_1 = require("../controllers/order");
const router = express_1.default.Router();
router.get("/", order_1.getOrders);
router.post("/", order_1.createOrder);
router.put("/:id", order_1.updateOrder);
exports.default = router;
