import { randomUUID } from 'node:crypto';

import { CreateOrderInput, IOrderRepository, Order } from '@t/order';

export class InMemoryOrderRepository implements IOrderRepository {
  private orders: Order[] = [];
  async create(data: CreateOrderInput) {
    this.orders.push({ ...data, id: randomUUID(), deliveredAt: null });
    return;
  }
}
