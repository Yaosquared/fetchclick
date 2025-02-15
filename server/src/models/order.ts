import mongoose from "mongoose";

// const productSchema = new mongoose.Schema({
//   productId: {
//     type: String,
//     required: true,
//   },
//   title: {
//     type: String,
//     required: true,
//   },
//   quantity: {
//     type: Number,
//     required: true,
//   },
//   deliveryFee: {
//     type: Number,
//     required: true,
//   },
//   price: {
//     type: Number,
//     required: true,
//   },
// });

const orderSchema = new mongoose.Schema(
  {
    cart: [
      {
        id: {
          type: String,
          required: true,
        },
        title: {
          type: String,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        deliveryFee: {
          type: Number,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],
    status: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
