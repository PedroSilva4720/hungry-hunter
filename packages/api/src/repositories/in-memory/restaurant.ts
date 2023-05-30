import { randomUUID } from 'node:crypto';
import {
  IRestaurantRepository,
  Restaurant,
  CreateRestaurantInput,
} from '@t/restaurant';
import { Product } from '@t/product';

export class InMemoryRestaurantRepository implements IRestaurantRepository {
  private restaurants: Restaurant[] = [];

  async create(data: CreateRestaurantInput) {
    this.restaurants.push({ ...data, id: randomUUID() });
    return;
  }

  async findByEmail(email: Restaurant['email']) {
    const restaurant = this.restaurants.find(item => item.email === email);
    if (!restaurant) {
      return null;
    }
    return restaurant;
  }

  async findById(id: Restaurant['id']): Promise<Restaurant> {
    const restaurant = this.restaurants.find(item => item.id === id);
    if (!restaurant) {
      return null;
    }
    return restaurant;
  }

  async findProducts(id: Restaurant['id']): Promise<{ products: Product[] }> {
    const products: Product[] = [
      {
        id: '123',
        name: 'product',
        description: 'very cool description',
        price: 12.5,
        restaurantId: id,
      },
      {
        id: '1234',
        name: 'product2',
        description: 'very cool description2',
        price: 123.5,
        restaurantId: id,
      },
    ];

    return { products };
  }
}
