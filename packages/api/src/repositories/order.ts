import { prisma } from '../prisma/prisma';
import { Order } from '../types/order';

export class OrderRepositories {
  async create({
    userId,
    createdAt,
    productId,
  }: Omit<Order, 'id' | 'user'>): Promise<void> {
    await prisma.order.create({
      data: {
        userId,
        createdAt,
        productId,
      },
    });
  }
}
