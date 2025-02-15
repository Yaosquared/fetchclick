import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";

import { CartProps } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import CartSummarySkeleton from "./CartSummarySkeleton";

const CartSummary = ({
  cartItems,
  handleAddQuantity,
  handleSubtractQuantity,
  handleRemoveFromCart,
  loading,
}: {
  cartItems: CartProps[];
  handleAddQuantity: (id: string) => void;
  handleSubtractQuantity: (id: string) => void;
  handleRemoveFromCart: (id: string) => void;
  loading: boolean;
}) => {
  const subtractButton = (id: string) => {
    return (
      <>
        <Button
          size="sm"
          onClick={() => handleSubtractQuantity(id)}
          className="cursor-pointer"
        >
          <FaMinus />
        </Button>
      </>
    );
  };

  const deleteButton = (id: string) => {
    return (
      <>
        <Button
          size="sm"
          variant="destructive"
          onClick={() => handleRemoveFromCart(id)}
          className="cursor-pointer"
        >
          <FaTrash />
        </Button>
      </>
    );
  };

  return (
    <ScrollArea className="w-1/2 max-h-[80vh]">
      <h1 className="text-center font-semibold text-3xl">Cart</h1>
      <div className="px-10 space-y-4 pt-4">
        {loading
          ? Array.from({ length: 4 }).map((_, index) => (
              <CartSummarySkeleton key={index} />
            ))
          : cartItems.map((item) => {
              return (
                <div
                  key={item._id}
                  className="flex border rounded-md shadow-md p-2"
                >
                  <div className="flex w-[20%] h-[140px]">
                    <AspectRatio ratio={16 / 9}>
                      <img src={item.thumbnail} alt={`Image`} />
                    </AspectRatio>
                  </div>
                  <div className="w-[80%] flex flex-col justify-center p-4 space-y-6">
                    <div>
                      <div className="w-full flex justify-between">
                        <h2>{item.title}</h2>
                        <p>${item.price}</p>
                      </div>
                      <p className="text-sm text-accent-foreground/80">
                        {item.category}
                      </p>
                    </div>
                    <div className="flex items-center space-x-4">
                      {item.quantity <= 1
                        ? deleteButton(item._id)
                        : subtractButton(item._id)}
                      <p>{item.quantity}</p>
                      <Button
                        size="sm"
                        onClick={() => handleAddQuantity(item._id)}
                        className="cursor-pointer"
                      >
                        <FaPlus />
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
    </ScrollArea>
  );
};

export default CartSummary;
