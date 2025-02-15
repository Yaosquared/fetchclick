import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaPlus } from "react-icons/fa";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import ItemSkeleton from "./ItemSkeleton";
import { ProductProps } from "@/lib/types";

const Item = () => {
  const params = useParams();
  const id = params.id;
  const [product, setProduct] = useState<ProductProps | null>(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const addProduct = async () => {
    await axios
      .post(`${import.meta.env.VITE_SERVER_URL}/api/cart`, product)
      .then(() => {
        console.log("Product added in cart successfully");
        navigate("/shop");
      })

      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`https://dummyjson.com/product/${id}`);
        setProduct(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const getCategory = (category: string) => {
    const capitalizedWord =
      category.charAt(0).toLocaleUpperCase() +
      category.slice(1).toLocaleLowerCase();
    return capitalizedWord;
  };

  const getRating = (rating: number) => {
    const starCount = "⭐".repeat(rating);
    return starCount;
  };

  const getDate = (date: string) => {
    const formattedDate = new Date(date).toLocaleDateString();
    return formattedDate;
  };

  return (
    <>
      {!product || loading ? (
        <ItemSkeleton />
      ) : (
        <>
          <div>
            <div className="flex gap-10 py-20">
              <div className="flex justify-center">
                <Carousel
                  opts={{
                    align: "start",
                  }}
                  orientation="vertical"
                  className="border rounded-md"
                >
                  <CarouselContent className="h-[310px]">
                    {product.images.map((image, index) => (
                      <CarouselItem key={index} className="pt-1">
                        <div className="w-[300px] h-[320px] py-18">
                          <AspectRatio
                            ratio={16 / 9}
                            className="flex items-center justify-center"
                          >
                            <img src={image} alt={`Image #${index + 1}`} />
                          </AspectRatio>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
              <div className="flex items-center">
                <div className="space-y-2">
                  <div>
                    <h1 className="font-semibold text-3xl">{product.title}</h1>
                    <p className="text-accent-foreground/80">
                      {getCategory(product.category)}
                    </p>
                  </div>
                  <p className="font-medium">${product.price}</p>
                  <p>Stock/s Left: {product.stock}</p>
                  <form action={addProduct}>
                    <Button type="submit" className="cursor-pointer">
                      <FaPlus />
                      <span>Add to cart</span>
                    </Button>
                  </form>
                </div>
              </div>
            </div>
            <div className="border rounded-md p-8 space-y-10">
              <ul>
                <li className="font-semibold text-lg">Description:</li>
                <li>{product.description}</li>
                <li className="mt-4">Rating: {product.rating}</li>
                <li>Brand: {product.brand}</li>
                <li>
                  Product Dimensions:
                  <div className="list-disc ml-8">
                    <div>Width: {product.dimensions.width}</div>
                    <div>Height: {product.dimensions.height}</div>
                    <div>Depth: {product.dimensions.depth}</div>
                  </div>
                  <div>Weight: {product.weight}kg</div>
                </li>
                <li>Shipping: {product.shippingInformation}</li>
                <li>Return Policy: {product.returnPolicy}</li>
                <li>Warranty: {product.warrantyInformation}</li>
              </ul>

              <div className="space-y-2">
                <h2 className="font-semibold text-lg">Reviews:</h2>
                <div className="grid grid-cols-3 gap-4">
                  {product.reviews.map((review, index) => {
                    return (
                      <div
                        key={index}
                        className="border rounded-md p-4 space-y-4"
                      >
                        <div>
                          <p>{review.reviewerName}</p>
                          <p className="text-sm text-accent-foreground/80">
                            {review.reviewerEmail}
                          </p>
                          <p className="text-sm text-accent-foreground/90">
                            {getDate(review.date)}
                          </p>
                        </div>
                        <div>
                          <p>{getRating(review.rating)}</p>
                          <p>{review.comment}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Item;
