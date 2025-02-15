import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components//ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import PopularPicksSkeleton from "./PopularPicksSkeleton";
import { ProductProps } from "@/lib/types";

const PopularPicks = () => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState(true);
  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        "https://dummyjson.com/products?limit=194&sortBy=rating&order=desc"
      );
      setProducts(res.data.products);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center space-y-4 pb-10">
      <h2 className="font-semibold text-2xl">Popular Picks</h2>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-[80%] h-auto"
      >
        <CarouselContent>
          {loading
            ? Array.from({ length: 6 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/6">
                  <PopularPicksSkeleton />
                </CarouselItem>
              ))
            : products.map((product, index) => (
                <CarouselItem
                  key={product.id}
                  className="md:basis-1/2 lg:basis-1/6"
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="truncate w-[200px] h-5">
                        {product.title}
                      </CardTitle>
                      <CardDescription>${product.price}</CardDescription>
                      <CardDescription>
                        Rating: {product.rating}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="w-[200px] py-8">
                        <AspectRatio
                          ratio={16 / 9}
                          className="flex justify-center items-center"
                        >
                          <img
                            src={product.thumbnail}
                            alt={`Image #${index + 1}`}
                            className="border rounded-md"
                          />
                        </AspectRatio>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-center">
                      <Link to={`/shop/${product.id}`} className="w-full">
                        <Button className="w-full cursor-pointer">
                          View details
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default PopularPicks;
