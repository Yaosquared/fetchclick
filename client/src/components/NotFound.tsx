import { Link } from "react-router";

import { Button } from "./ui/button";

const NotFound = () => {
  return (
    <div className="w-full h-[80vh] flex flex-col justify-center items-center border space-y-10">
      <div className="flex flex-col justify-center items-center text-9xl space-y-4">
        <h2>404</h2>
        <h1 className="font-medium text-4xl">There's nothing here...</h1>
      </div>
      <Link to={"/"} className="w-1/4">
        <Button size="lg" className="w-full cursor-pointer">
          Go to homepage
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
