import { Route, Routes } from "react-router";
import CartButton from "./components/CartPage/CartButton";
import Navbar from "./components/Navbar";
import Shop from "./components/ShopPage/Shop";
import Cart from "./components/CartPage/Cart";
import Item from "./components/ShopPage/Item/Item";
import Home from "./components/HomePage/Home";
import Orders from "./components/Orders";

const App = () => {
  return (
    <div className="place-items-center pb-10">
      <Navbar />
      <CartButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<Item />} />
        <Route path="/shop/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </div>
  );
};

export default App;
