interface ProductProps {
  availabilityStatus: string;
  brand: string;
  category: string;
  description: string;
  id: number;
  images: string[];
  price: number;
  rating: number;
  returnPolicy: number;
  shippingInformation: string;
  stock: number;
  thumbnail: string;
  title: string;
  warrantyInformation: string;
  weight: number;
}

export type { ProductProps };
