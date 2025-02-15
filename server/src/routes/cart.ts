import express from "express";

import {
  getCartSummary,
  createCart,
  updateCart,
  deleteCart,
  clearCart,
} from "../controllers/cart";

const router = express.Router();

router.get("/", getCartSummary);
router.post("/", createCart);
router.put("/:id", updateCart);
router.delete("/:id", deleteCart);
router.delete("/", clearCart);

export default router;
