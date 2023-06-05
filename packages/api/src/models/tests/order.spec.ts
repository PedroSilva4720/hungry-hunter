import { OrderModels } from '@models/order';
import { InMemoryOrderRepository } from '@repo/in-memory/order';
import { describe, it, expect } from 'vitest';

describe('Order Model tests switch', () => {
  it('should successfully create a new order', async () => {
    const sut = new OrderModels(new InMemoryOrderRepository());

    const data = {
      createAt: `${new Date()}`,
      userId: '12312312',
      productId: '12312312',
    };

    Object.assign(sut, data);

    await expect(sut.create()).resolves.empty;
  });
});
