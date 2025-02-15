import { useEffect, useState } from "react";
import axios from "axios";

import { OrderProps } from "@/lib/types";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import OrdersSkeleton from "./OrdersSkeleton";

const Orders = () => {
  const [orders, setOrders] = useState<OrderProps[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/api/order`
      );
      setOrders(res.data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const calculateSubtotalAmount = (
    price: number,
    quantity: number,
    deliveryFee: number
  ) => {
    return price * quantity + deliveryFee;
  };

  const calculateTotalAmount = (order: OrderProps) => {
    return order.cart.reduce((total, item) => {
      return (
        total +
        calculateSubtotalAmount(item.price, item.quantity, item.deliveryFee)
      );
    }, 0);
  };

  const toggleStatus = async (id: string) => {
    await axios
      .put(`${import.meta.env.VITE_SERVER_URL}/api/order/${id}`, {
        status: true,
      })
      .then(() => {
        console.log("Order updated successfully");
        fetchOrders();
      })
      .catch((err) => {
        console.log("Error updating order:", err);
      });
  };

  return (
    <>
      <div className="w-1/2 py-10 flex flex-col justify-center items-center space-y-4">
        <h1 className="text-center font-semibold text-3xl">Orders</h1>
        <div className="w-full space-y-8">
          {loading
            ? Array.from({ length: 2 }).map((_, index) => (
                <OrdersSkeleton key={index} />
              ))
            : orders.map((order) => (
                <div key={order._id} className="w-full border rounded-md p-5">
                  <div className="ml-2 flex justify-between items-center">
                    <div className="space-y-1 ">
                      <p>
                        <span className="font-medium text-muted-foreground">
                          Status:{" "}
                        </span>
                        {order.status ? "Completed" : "Pending"}
                      </p>
                      <p>
                        <span className="font-medium text-muted-foreground">
                          Order Date:{" "}
                        </span>
                        {new Date(order.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    <Button
                      onClick={() => toggleStatus(order._id)}
                      className="cursor-pointer"
                    >
                      Mark as complete
                    </Button>
                  </div>
                  <Table className="text-base">
                    <TableHeader>
                      <TableRow>
                        <TableHead>Product</TableHead>
                        <TableHead>Quantity</TableHead>
                        <TableHead>Delivery Fee</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead className="text-right">Subtotal</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {order.cart.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell>{item.title}</TableCell>
                          <TableCell>{item.quantity}</TableCell>
                          <TableCell>${item.deliveryFee}</TableCell>
                          <TableCell>${item.price}</TableCell>
                          <TableCell className="text-right">
                            $
                            {calculateSubtotalAmount(
                              item.price,
                              item.quantity,
                              item.deliveryFee
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                    <TableFooter>
                      <TableRow>
                        <TableCell colSpan={4}>Total</TableCell>
                        <TableCell className="text-right">
                          ${calculateTotalAmount(order).toFixed(2)}
                        </TableCell>
                      </TableRow>
                    </TableFooter>
                  </Table>
                </div>
              ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Orders;
