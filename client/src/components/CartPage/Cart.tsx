import CartSummary from "./CartSummary";
import PaymentSummary from "./PaymentSummary";
import Footer from "../Footer";

const Cart = () => {
  return (
    <>
      <div className="w-full flex pt-10 px-40">
        <CartSummary />
        <PaymentSummary />
      </div>
      <Footer />
    </>
  );
};

export default Cart;
