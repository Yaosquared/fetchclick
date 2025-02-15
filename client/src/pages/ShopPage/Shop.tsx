import { useEffect, useState } from "react";
import axios from "axios";

import Tools from "./Tools";
import ProductCard from "./ProductCard";
import ProductPagination from "./ProductPagination";
import CartButton from "../../components/CartButton";
import Footer from "../../components/Footer";
import { ProductProps } from "@/lib/types";

const Shop = () => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState(true);
  const totalProducts = products.length;

  const fetchProducts = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products?limit=194");
      const data = res.data.products;
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Tools products={products} />
      <ProductCard products={products} loading={loading} />
      <ProductPagination totalProducts={totalProducts} />
      <CartButton />
      <Footer />
    </>
  );
};

export default Shop;
