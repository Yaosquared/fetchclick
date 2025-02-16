import { Link } from "react-router";
import { MdPerson } from "react-icons/md";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <div className="w-full flex justify-evenly items-center px-10 py-3 bg-primary">
      <Link to={"/"} className="flex items-center gap-2">
        <img src="public/logo.svg" alt="FetchClick Logo" className="h-8 w-8" />
        <h2 className="font-semibold text-xl text-white">FetchClick</h2>
      </Link>

      <ul className="flex space-x-8">
        <Link to={"/"}>
          <li>
            <Button variant="link" className="text-white cursor-pointer">
              Home
            </Button>
          </li>
        </Link>
        <Link to={"/shop"}>
          <li>
            <Button variant="link" className="text-white cursor-pointer">
              Shop
            </Button>
          </li>
        </Link>
        <Link to={"/orders"}>
          <li>
            <Button variant="link" className="text-white cursor-pointer">
              Orders
            </Button>
          </li>
        </Link>
        <li>
          <Button variant="link" className="text-white cursor-pointer">
            Sign In
          </Button>
        </li>
      </ul>

      <div className="flex items-center space-x-8">
        <Avatar className="cursor-pointer">
          <AvatarImage />
          <AvatarFallback>
            <MdPerson size={32} />
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Navbar;
