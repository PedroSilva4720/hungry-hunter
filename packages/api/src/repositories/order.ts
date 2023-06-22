import { prisma } from '@@/prisma/prisma';
import { CreateOrderInput, IOrderRepository } from '@t/order';

export class OrderRepositories implements IOrderRepository {
  async create({ createdAt, productId, userId }: CreateOrderInput) {
    const order = await prisma.order.create({
      data: {
        userId,
        createdAt,
        productId,
      },
    });

    return order;
  }
}
