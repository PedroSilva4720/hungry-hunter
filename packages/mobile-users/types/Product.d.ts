export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  restaurant: {
    id: string;
    name: string;
  };
}
