import { Request, Response } from "express";

import Order from "../models/order";

export const getOrders = async (req: Request, res: Response) => {
  try {
    const order = await Order.find({});
    res.status(200).json({ success: true, data: order });
  } catch (error: any) {
    console.log("Error in fetching orders summary:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const createOrder = async (req: Request, res: Response) => {
  const cart = req.body;
  const newOrder = new Order({ cart });

  try {
    await newOrder.save();
    res.status(201).json({ success: true, data: newOrder });
  } catch (error: any) {
    console.error("Error in creating order:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const updateOrder = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const updatedProduct = await Order.findByIdAndUpdate(
      id,
      {
        $set: { status },
      },
      {
        new: true,
      }
    );
    res.status(200).json({ success: true, data: updatedProduct });
  } catch (error: any) {
    console.error("Error in updating product", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
