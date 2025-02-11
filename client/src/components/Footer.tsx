import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const getCurrentYear = () => {
    const currYear = new Date().getFullYear();
    return currYear;
  };

  return (
    <footer className="w-[90%] flex flex-col text-center items-center gap-2 pt-10">
      <Separator />
      <img
        src="/src/assets/icon.ico"
        alt="Yaosquared's Logo"
        title="Go to Yaosquared's Portfolio"
        className="mt-2 w-14 h-14 cursor-pointer"
      />
      <p className="text-sm">&copy; {getCurrentYear()}. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
