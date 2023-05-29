import { CreateOrderInput, IOrderRepository, Order } from '@t/order';
import { User } from '@t/user';
import { randomUUID } from 'node:crypto';

export class InMemoryOrderRepository implements IOrderRepository {
  private orders: Order[] = [];
  async create(data: CreateOrderInput, userId: User['id']) {
    this.orders.push({ ...data, userId, id: randomUUID(), deliveredAt: null });
    return;
  }
}
