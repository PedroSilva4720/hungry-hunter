import { prisma } from '@@/prisma/prisma';
import { CreateOrderInput, IOrderRepository, Order } from '@t/order';
import { User } from '@t/user';

export class OrderRepositories implements IOrderRepository {
  async create({ createdAt, productId }: CreateOrderInput, userId: User['id']) {
    await prisma.order.create({
      data: {
        userId,
        createdAt,
        productId,
      },
    });
  }
}
