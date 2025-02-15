import { Link } from "react-router";
import { IoCart } from "react-icons/io5";

import { Button } from "./ui/button";

const CartButton = () => {
  return (
    <Link to={"/shop/cart"}>
      <Button className="fixed bottom-0 right-0 m-6 rounded-full p-6 cursor-pointer">
        <IoCart size={40} className="!size-8" />
      </Button>
    </Link>
  );
};

export default CartButton;
