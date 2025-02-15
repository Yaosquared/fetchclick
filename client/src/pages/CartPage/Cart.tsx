import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import CartSummary from "./CartSummary";
import PaymentSummary from "./PaymentSummary";
import Footer from "@/components/Footer";
import { CartProps } from "@/lib/types";

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartProps[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/api/cart`
      );
      setCartItems(res.data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddQuantity = (id: string) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item._id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
              deliveryFee: item.quantity > 0 ? item.deliveryFee : 0,
            }
          : item
      );
      handleUpdateCart(id, updatedItems);
      return updatedItems;
    });
  };

  const handleSubtractQuantity = (id: string) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item._id === id
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      );
      handleUpdateCart(id, updatedItems);
      return updatedItems;
    });
  };

  const handleUpdateCart = async (id: string, updatedItems: CartProps[]) => {
    const updatedItem = updatedItems.find((item) => item._id === id);

    if (!updatedItem) {
      console.log("Item not found for update");
      return;
    }

    await axios
      .put(`${import.meta.env.VITE_SERVER_URL}/api/cart/${id}`, {
        quantity: updatedItem.quantity,
      })
      .then(() => {
        console.log("Order updated successfully");
        navigate("/shop/cart");
      })
      .catch((err) => {
        console.log("Error updating order:", err);
      });
  };

  const handleRemoveFromCart = async (id: string) => {
    await axios
      .delete(`${import.meta.env.VITE_SERVER_URL}/api/cart/${id}`)
      .then(() => {
        console.log("Order deleted successfully");
        fetchProducts();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="w-full flex px-40 py-10">
        <CartSummary
          cartItems={cartItems}
          handleAddQuantity={handleAddQuantity}
          handleSubtractQuantity={handleSubtractQuantity}
          handleRemoveFromCart={handleRemoveFromCart}
          loading={loading}
        />
        <PaymentSummary cartItems={cartItems} />
      </div>
      <Footer />
    </>
  );
};

export default Cart;
