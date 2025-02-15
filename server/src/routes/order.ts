import express from "express";

import { createOrder, getOrders, updateOrder } from "../controllers/order";

const router = express.Router();

router.get("/", getOrders);
router.post("/", createOrder);
router.put("/:id", updateOrder);

export default router;
