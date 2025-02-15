import { Request, Response } from "express";

import Cart from "../models/cart";

export const getCartSummary = async (req: Request, res: Response) => {
  try {
    const cart = await Cart.find({});
    res.status(200).json({ success: true, data: cart });
  } catch (error: any) {
    console.log("Error in fetching cart summary:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const createCart = async (req: Request, res: Response) => {
  const cart = req.body;
  const newCart = new Cart(cart);

  try {
    await newCart.save();
    res.status(201).json({ success: true, data: newCart });
  } catch (error: any) {
    console.error("Error in creating cart:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const updateCart = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { quantity } = req.body;

  try {
    const updatedProduct = await Cart.findByIdAndUpdate(
      id,
      {
        $set: { quantity },
      },
      {
        new: true,
      }
    );
    res.status(200).json({ success: true, data: updatedProduct });
  } catch (error: any) {
    console.error("Error in updating cart:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const deleteCart = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await Cart.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Product deleted" });
  } catch (error: any) {
    console.error("Error in deleting cart:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const clearCart = async (req: Request, res: Response) => {
  try {
    await Cart.deleteMany();
    res.status(200).json({ success: true, message: "Cart content deleted" });
  } catch (error: any) {
    console.error("Error in deleting cart summary:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
