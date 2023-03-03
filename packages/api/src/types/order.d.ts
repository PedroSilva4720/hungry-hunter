import { Product } from './product.d';
import { User } from './user';

export type Order = {
  id: string;
  createdAt: string;
  deliveredAt?: string;
  user: User;
  userId: string;
  productId: string;
};
