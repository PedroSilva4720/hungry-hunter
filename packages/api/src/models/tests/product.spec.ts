import { ProductModel } from '@models/product';
import { InMemoryProductRepository } from '@repo/in-memory/product';
import { expect, describe, it } from 'vitest';

describe('Product Model tests switch', () => {
  it('should successfully create a new product', async () => {
    const sut = new ProductModel(new InMemoryProductRepository());

    const data = {
      name: 'X-Burger',
      price: 0.25,
      description: 'delicious x burger',
      restaurantId: '12312312',
    };

    Object.assign(sut, data);

    await expect(sut.create()).resolves.empty;
  });
});
