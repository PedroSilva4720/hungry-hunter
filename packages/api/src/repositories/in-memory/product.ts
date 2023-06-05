import { randomUUID } from 'node:crypto';
import {
  IProductRepository,
  ReturnProductList,
  Product,
  CreateProductInput,
} from '@t/product';

export class InMemoryProductRepository implements IProductRepository {
  private products: Product[] = [];
  async create(data: CreateProductInput) {
    this.products.push({ ...data, id: randomUUID() });
    return;
  }

  async findById(id: Product['id']) {
    return this.products.find(item => item.id === id);
  }

  async listProducts(): Promise<ReturnProductList[]> {
    return this.products.map(item => {
      return {
        id: item.id,
        name: item.name,
        description: item.description,
        price: item.price,
        restaurant: {
          id: item.restaurantId,
          name: 'restaurant',
        },
      };
    });
  }
}
