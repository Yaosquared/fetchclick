// import { useState, useEffect } from "react";
// import axios from "axios";

// import { useEffect, useState } from "react";

import { Button } from "../ui/button";
// import Products from "./Products";

// import { useParams } from "react-router";
// import axios from "axios";
// import ItemSkeleton from "../ShopPage/Item/Skeleton";

// interface ProductCardProps {
//   availabilityStatus: string;
//   brand: string;
//   category: string;
//   description: string;
//   dimensions: { width: number; height: number; depth: number };
//   id: number;
//   images: string[];
//   price: number;
//   rating: number;
//   returnPolicy: number;
//   shippingInformation: string;
//   stock: number;
//   thumbnail: string;
//   title: string;
//   warrantyInformation: string;
//   weight: number;
// }

const testFetch = () => {
  return {
    id: "728ed52f",
    deliveryFee: 235.34,
    total: 1899.99,
  };
};

const PaymentSummary = () => {
  // const params = useParams();
  // const id = params.id;
  // const [product, setProduct] = useState<ProductCardProps | null>(null);
  // const [loading, setLoading] = useState(true);

  // only fetch added to cart items in db
  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     try {
  //       const res = await axios.get(`https://dummyjson.com/product/${id}`);
  //       setProduct(res.data);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //       setLoading(false);
  //     }
  //   };

  //   fetchProduct();
  // }, [id]);

  return (
    // {/* {!product || loading ? (
    //   <ItemSkeleton />
    // ) : ( */}

    <div className="w-1/2 flex flex-col justify-center items-center space-y-6">
      <h1 className="text-center font-semibold text-3xl">Order Summary</h1>
      <div className="w-[50%] flex justify-between">
        <div className="space-y-2 text-lg">
          <p>Delivery Fee:</p>
          <p>Total:</p>
        </div>
        <div className="text-right space-y-2 text-lg">
          <p>${testFetch().deliveryFee}</p>
          <p>${testFetch().total}</p>
        </div>
      </div>
      <Button className="w-[50%] cursor-pointer">Check out</Button>
    </div>
    // {/* )} */}
  );
};

export default PaymentSummary;
