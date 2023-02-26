import { Product } from './product';

export type Restaurant = {
  id: string;
  name: string;
  address: string;
  phoneNumber: string;
  email: string;
  passwordHash: string;
  createdAt: string;
  product?: Product[];
};
