import { prisma } from '@@/prisma/prisma';
import { IProductModel, IProductRepository, Product } from '@t/product';
import { Restaurant } from '@t/restaurant';

export class ProductModel implements IProductModel {
  public id: string;
  public name: string;
  public description: string;
  public price: number;
  private _restaurantId: string;
  private _restaurant: Promise<Restaurant | null>;

  constructor(private productRepository: IProductRepository) {}

  get restaurantId() {
    return this._restaurantId;
  }

  set restaurantId(id: Product['id']) {
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
    await this.productRepository.create(
      {
        name: this.name,
        price: this.price,
        description: this.description,
        restaurant: {},
      },
      this._restaurantId
    );
  }

  async findById(id: Product['id']) {
    return await this.productRepository.findById(id);
  }

  async listProducts() {
    const products = await this.productRepository.listProducts();

    return products;
  }
}
