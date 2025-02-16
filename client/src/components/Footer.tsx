import { Link } from "react-router";

import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const getCurrentYear = () => {
    const currYear = new Date().getFullYear();
    return currYear;
  };

  return (
    <footer className="w-[90%] flex flex-col text-center items-center gap-2 pt-10">
      <Separator />
      <Link to={"https://yaosquared-portfolio.vercel.app/"} target="_blank">
        <img
          src="src/assets/icon.ico"
          alt="Yaosquared's Logo"
          title="Go to Yaosquared's Portfolio"
          className="mt-2 w-14 h-14 cursor-pointer"
        />
      </Link>

      <p className="text-sm">&copy; {getCurrentYear()}. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
