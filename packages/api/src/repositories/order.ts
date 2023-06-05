import { prisma } from '@@/prisma/prisma';
import { CreateOrderInput, IOrderRepository } from '@t/order';

export class OrderRepositories implements IOrderRepository {
  async create({ createdAt, productId, userId }: CreateOrderInput) {
    await prisma.order.create({
      data: {
        userId,
        createdAt,
        productId,
      },
    });
  }
}
