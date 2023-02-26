import { Product } from './../types/product.d';
import { prisma } from '../prisma/prisma';
import { Restaurant } from './../types/restaurant.d';

export class ProductRepositories {
  async create({
    name,
    price,
    description,
    restaurantId,
  }: Omit<Product, 'restaurant' | 'id'>) {
    await prisma.product.create({
      data: {
        name,
        price,
        description,
        restaurantId,
      },
    });
  }

  async findById({ id }: Pick<Product, 'id'>) {
    const product = await prisma.product.findUnique({
      where: {
        id,
      },
    });

    return product;
  }
}
