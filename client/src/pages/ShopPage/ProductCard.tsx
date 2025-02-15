import { Link } from "react-router";
import { useSearchParams } from "react-router-dom";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import ProductCardSkeleton from "./ProductCardSkeleton";
import { ProductProps } from "@/lib/types";

const ProductCard = ({
  products,
  loading,
}: {
  products: ProductProps[];
  loading: boolean;
}) => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  const category = searchParams.get("category") || "";
  const currentPage = parseInt(searchParams.get("page") || "1", 10);
  const productsPerPage = 20;

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  return (
    <>
      <div className="grid grid-cols-5 gap-4 py-10">
        {loading
          ? Array.from({ length: 20 }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))
          : products
              .filter((product) => {
                return search.toLocaleLowerCase() === ""
                  ? product
                  : product.title
                      .toLocaleLowerCase()
                      .includes(search.toLocaleLowerCase());
              })
              .filter((product) => {
                return category.toLocaleLowerCase() === ""
                  ? product
                  : product.category
                      .toLocaleLowerCase()
                      .includes(category.toLocaleLowerCase());
              })
              .slice(startIndex, endIndex)
              .map((product) => (
                <div key={product.id} className="flex">
                  <Card>
                    <CardHeader>
                      <CardTitle className="truncate w-[200px] h-5">
                        {product.title}
                      </CardTitle>
                      <CardDescription>${product.price}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="w-[200px] py-8">
                        <AspectRatio
                          ratio={16 / 9}
                          className="flex justify-center items-center"
                        >
                          <img
                            src={product.thumbnail}
                            alt="Image"
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
                </div>
              ))}
      </div>
    </>
  );
};

export default ProductCard;
