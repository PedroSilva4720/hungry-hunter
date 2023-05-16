import { CreateProductInput, IProductRepository, Product } from '@t/product';
import { prisma } from '@@/prisma/prisma';
import { Restaurant } from '@t/restaurant';

export class ProductRepositories implements IProductRepository {
  async create(
    { name, price, description }: CreateProductInput,
    restaurantId: Restaurant['id']
  ) {
    await prisma.product.create({
      data: {
        name,
        price,
        description,
        restaurantId,
      },
    });
  }

  async findById(id: Product['id']) {
    const product = await prisma.product.findUnique({
      where: {
        id,
      },
    });

    return product;
  }

  async listProducts() {
    const products = await prisma.product.findMany({
      take: 10,
      select: {
        id: true,
        name: true,
        description: true,
        price: true,
        restaurant: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    return products;
  }
}
