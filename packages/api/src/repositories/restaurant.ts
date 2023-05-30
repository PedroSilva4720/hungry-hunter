import { prisma } from '@@/prisma/prisma';
import {
  CreateRestaurantInput,
  IRestaurantRepository,
  Restaurant,
} from '@t/restaurant';

export class RestaurantRepository implements IRestaurantRepository {
  async create({
    name,
    email,
    address,
    phoneNumber,
    passwordHash,
    createdAt,
  }: CreateRestaurantInput) {
    await prisma.restaurant.create({
      data: {
        name,
        email,
        address,
        createdAt,
        phoneNumber,
        passwordHash,
      },
    });
  }
  async findByEmail(email: Restaurant['email']) {
    const restaurant = await prisma.restaurant.findUnique({
      where: {
        email,
      },
    });
    return restaurant;
  }

  async findById(id: Restaurant['id']) {
    const restaurant = await prisma.restaurant.findUnique({
      where: {
        id,
      },
    });
    return restaurant;
  }

  async findProducts(id: Restaurant['id']) {
    const products = await prisma.restaurant.findUnique({
      where: {
        id,
      },
      select: {
        products: true,
      },
    });
    return products;
  }
}
