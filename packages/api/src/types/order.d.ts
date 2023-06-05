import { Prisma, order } from '@prisma/client';
import { FastifyRequest } from 'fastify';

export type Order = order;

export type CreateOrderInput = Prisma.orderUncheckedCreateInput;

export interface IOrderRepository {
  create(data: CreateOrderInput): Promise<void>;
}

export interface IOrderModel {
  id: string;
  createdAt: string;
  deliveredAt?: string;
  userId: Order['userId'];
  productId: Order['productId'];
  create(): Promise<void>;
}

export interface IOrderController {
  create(req: FastifyRequest, rep: FastifyRequest): Promise<object>;
}
