import { Prisma, order } from '@prisma/client';
import { FastifyReply, FastifyRequest } from 'fastify';

export type Order = order;

export type CreateOrderInput = Prisma.orderUncheckedCreateInput;

export interface IOrderRepository {
  create(data: CreateOrderInput): Promise<Order>;
}

export interface IOrderModel {
  id: string;
  createdAt: string;
  deliveredAt?: string;
  userId: Order['userId'];
  productId: Order['productId'];
  create(): Promise<Order>;
}

export interface IOrderController {
  create(req: FastifyRequest, rep: FastifyReply): Promise<object>;
}
