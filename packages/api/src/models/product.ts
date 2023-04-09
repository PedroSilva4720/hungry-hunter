import { prisma } from '../prisma/prisma';
import { ProductRepositories } from '../repositories/product';
import { Product } from '../types/product';
import { Restaurant } from '../types/restaurant';

export class ProductModel {
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
    const Repository = new ProductRepositories();

    await Repository.create({
      name: this.name,
      price: this.price,
      description: this.description,
      restaurantId: this._restaurantId,
    });
  }

  async findById({ id }: Pick<Product, 'id'>) {
    const Repository = new ProductRepositories();

    Repository.findById({ id });
  }

  async listProducts() {
    const Repository = new ProductRepositories();

    const products = await Repository.listProducts();

    return products;
  }
}
