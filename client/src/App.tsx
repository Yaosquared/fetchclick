import { Route, Routes } from "react-router";

import Navbar from "./components/Navbar";
import CartButton from "./components/CartButton";
import Home from "./pages/HomePage/Home";
import Shop from "./pages/ShopPage/Shop";
import Item from "./pages/ShopPage/Item/Item";
import Cart from "./pages/CartPage/Cart";
import Orders from "./pages/OrderPage/Orders";

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
