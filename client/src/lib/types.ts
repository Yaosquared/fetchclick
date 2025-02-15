interface ProductProps {
  availabilityStatus: string;
  brand: string;
  category: string;
  description: string;
  dimensions: { width: number; height: number; depth: number };
  id: string;
  images: string[];
  price: number;
  rating: number;
  returnPolicy: number;
  reviews: ReviewsProps[];
  shippingInformation: string;
  stock: number;
  thumbnail: string;
  title: string;
  warrantyInformation: string;
  weight: number;
  _id: string;
  deliveryFee: number;
}

interface CartProps {
  id: string;
  title: string;
  category: string;
  price: number;
  thumbnail: string;
  _id: string;
  quantity: number;
  deliveryFee: number;
}

interface ReviewsProps {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

interface OrderProps {
  _id: string;
  title: string;
  quantity: number;
  deliveryFee: number;
  price: number;
  status: boolean;
  createdAt: Date;
  cart: [
    {
      title: string;
      id: string;
      quantity: number;
      price: number;
      deliveryFee: number;
    }
  ];
}

export type { ProductProps, CartProps, OrderProps };
