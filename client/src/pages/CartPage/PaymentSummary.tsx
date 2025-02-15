import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { CartProps } from "@/lib/types";

const PaymentSummary = ({ cartItems }: { cartItems: CartProps[] }) => {
  const navigate = useNavigate();

  const totalDeliveryFee = cartItems.reduce(
    (acc, item) => acc + (item.deliveryFee || 0),
    0
  );

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleCheckOut = async () => {
    const cart = cartItems.map((item) => ({
      id: item._id,
      title: item.title,
      quantity: item.quantity,
      price: item.price,
      deliveryFee: item.deliveryFee,
    }));

    try {
      await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/order`, cart);
      console.log("Order created successfully");

      await axios.delete(`${import.meta.env.VITE_SERVER_URL}/api/cart`);
      console.log("Cart cleared successfully");

      navigate("/orders");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-1/2 flex flex-col justify-center items-center space-y-6">
      <h1 className="text-center font-semibold text-3xl">Order Summary</h1>
      <div className="w-[50%] flex justify-between">
        <div className="space-y-2 text-lg">
          <p>Delivery Fee:</p>
          <p>Total:</p>
        </div>
        <div className="text-right space-y-2 text-lg">
          <p>${totalDeliveryFee.toFixed(2)}</p>
          <p>${totalPrice.toFixed(2)}</p>
        </div>
      </div>
      <Button onClick={handleCheckOut} className="w-[50%] cursor-pointer">
        Check out
      </Button>
    </div>
  );
};

export default PaymentSummary;
