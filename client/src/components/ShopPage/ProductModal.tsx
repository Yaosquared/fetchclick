import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ProductProps } from "@/lib/types";

const ProductCarousel = ({ images }: ProductProps) => {
  return (
    <div className="flex justify-center">
      <Carousel className="w-[300px]">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={image} className="py-19">
              <div className="w-[300px]">
                <AspectRatio
                  ratio={16 / 9}
                  className="flex items-center justify-center"
                >
                  <img
                    src={image}
                    alt={`Image #${index + 1}`}
                    className="border rounded-md"
                  />
                </AspectRatio>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
