import { expect, it, describe } from 'vitest';

import { RestaurantModels } from '@models/restaurant';
import { InMemoryRestaurantRepository } from '@repo/in-memory/restaurant';
import {
  IRestaurantRepository,
  Restaurant,
  CreateRestaurantInput,
} from '@t/restaurant';
import { Product } from '@t/product';

class RepositoryError implements IRestaurantRepository {
  async create(_data: CreateRestaurantInput) {
    return;
  }
  async findById(id: string): Promise<Restaurant> {
    return {
      id,
      createdAt: '',
      address: 'some place',
      phoneNumber: '123123',
      name: 'John`s restaurant',
      email: 'john@restaurant.com',
      passwordHash: 'OhMyGodThatsAVerySecretPassword',
    };
  }
  async findByEmail(email: string): Promise<Restaurant> {
    return {
      email,
      id: '12312',
      createdAt: '',
      address: 'some place',
      phoneNumber: '123123',
      name: 'John`s restaurant',
      passwordHash: 'OhMyGodThatsAVerySecretPassword',
    };
  }
  async findProducts(_id: string): Promise<{ products: Product[] }> {
    throw new Error('Method not implemented.');
  }
}

describe('Restaurant Model tests switch', () => {
  it('should successfully create a new restaurant', async () => {
    const sut = new RestaurantModels(new InMemoryRestaurantRepository());

    const data = {
      name: 'John`s restaurant',
      email: 'John@restaurant.com',
      address: 'some place',
      phoneNumber: '123123',
      unHashedPassword: 'OhMyGodThatsAVerySecretPassword',
    };

    Object.assign(sut, data);

    await expect(sut.create()).resolves.empty;
  });

  it('should not create a restaurant if email already exists in database', async () => {
    const sut = new RestaurantModels(new RepositoryError());

    const data = {
      name: 'John`s restaurant',
      email: 'John@restaurant.com',
      address: 'some place',
      phoneNumber: '123123',
      unHashedPassword: 'OhMyGodThatsAVerySecretPassword',
    };

    Object.assign(sut, data);

    await expect(sut.create()).rejects.toThrow(
      'Restaurante já existe, por favor faça login'
    );
  });
});
