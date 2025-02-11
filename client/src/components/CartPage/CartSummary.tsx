import { useState } from "react";
import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";

import { AspectRatio } from "../ui/aspect-ratio";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";

const testFetch = () => {
  return [
    {
      id: "728ed52f",
      quantity: 1,
      category: "Furniture",
      thumbnail:
        "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/thumbnail.png",
      title: "Annibale Colombo Bed",
      price: 1899.99,
    },
    {
      id: "728ad52fq",
      quantity: 1,
      category: "Furniture",
      thumbnail:
        "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/thumbnail.png",
      title: "Annibale Colombo Bed",
      price: 1899.99,
    },
    {
      id: "728ad52fc",
      quantity: 1,
      category: "Furniture",
      thumbnail:
        "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/thumbnail.png",
      title: "Annibale Colombo Bed",
      price: 1899.99,
    },
    {
      id: "728ade52f",
      quantity: 1,
      category: "Furniture",
      thumbnail:
        "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/thumbnail.png",
      title: "Annibale Colombo Bed",
      price: 1899.99,
    },
    {
      id: "728adh52f",
      quantity: 1,
      category: "Furniture",
      thumbnail:
        "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/thumbnail.png",
      title: "Annibale Colombo Bed",
      price: 1899.99,
    },
    {
      id: "728akd52f",
      quantity: 1,
      category: "Furniture",
      thumbnail:
        "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/thumbnail.png",
      title: "Annibale Colombo Bed",
      price: 1899.99,
    },
    {
      id: "728adv52f",
      quantity: 1,
      category: "Furniture",
      thumbnail:
        "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/thumbnail.png",
      title: "Annibale Colombo Bed",
      price: 1899.99,
    },
  ];
};

const CartSummary = () => {
  const [cartItems, setCartItems] = useState(testFetch());

  const handleAddQuantity = (id: string) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleSubtractQuantity = (id: string) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 }
          : item
      )
    );
  };

  const handleRemoveFromCart = (id: string) => {
    console.log(`${id} deleted`);
    // implement logic for deleting item from cart
  };

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
        {cartItems.map((item) => {
          return (
            <div className="flex border rounded-md shadow-md">
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
                  {item.quantity == 0
                    ? deleteButton(item.id)
                    : subtractButton(item.id)}
                  <p>{item.quantity}</p>
                  <Button
                    size="sm"
                    onClick={() => handleAddQuantity(item.id)}
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
