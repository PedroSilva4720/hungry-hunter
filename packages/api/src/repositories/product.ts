import { Product } from './../types/product.d';
import { prisma } from '../prisma/prisma';
import { Restaurant } from './../types/restaurant.d';

export class ProductRepositories {
  public id: string;
  public name: string;
  public description: string;
  public price: number;
  private _restaurantId: string;
  private _restaurant: Promise<Restaurant | null>;
  get restaurantId() {
    return this.restaurantId;
  }

  set restaurantId(id) {
    const restaurant = Promise.resolve(
      prisma.restaurant.findUnique({
        where: {
          id,
        },
      })
    );
    if (restaurant) {
      this._restaurantId = id;
      this._restaurant = restaurant;
    }
  }

  async create() {
    await prisma.product.create({
      data: {
        name: this.name,
        price: this.price,
        description: this.description,
        restaurantId: this._restaurantId,
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
