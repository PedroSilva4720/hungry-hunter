import { Prisma, order } from '@prisma/client';
import { User } from './user';
import { Product } from './product';

export type Order = order;

export type CreateOrderInput = Prisma.orderCreateInput;

export interface IOrderRepository {
  create(data: CreateOrderInput, userId: User['id']): Promise<void>;
}

export interface IOrderModel {
  id: string;
  createdAt: string;
  deliveredAt?: string;
  user: User;
  userId: User['id'];
  productId: Product['id'];
  create(): Promise<void>;
}

export interface IOrderController {
  create(req, res): Promise<{}>;
}
