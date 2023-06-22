import { randomUUID } from 'node:crypto';

import { CreateOrderInput, IOrderRepository, Order } from '@t/order';

export class InMemoryOrderRepository implements IOrderRepository {
  private orders: Order[] = [];
  async create(data: CreateOrderInput) {
    const order = { ...data, id: randomUUID(), deliveredAt: null };

    this.orders.push(order);

    return order;
  }
}
