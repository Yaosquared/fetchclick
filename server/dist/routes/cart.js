"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cart_1 = require("../controllers/cart");
const router = express_1.default.Router();
router.get("/", cart_1.getCartSummary);
router.post("/", cart_1.createCartOrder);
router.put("/:id", cart_1.updateCartOrder);
router.delete("/:id", cart_1.deleteCartOrder);
exports.default = router;
