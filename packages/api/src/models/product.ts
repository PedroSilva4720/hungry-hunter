import { IProductModel, IProductRepository, Product } from '@t/product';

export class ProductModel implements IProductModel {
  public id: string;
  public name: string;
  public description: string;
  public price: number;
  public restaurantId: string;

  constructor(private productRepository: IProductRepository) {}

  async create() {
    await this.productRepository.create({
      name: this.name,
      price: this.price,
      description: this.description,
      restaurantId: this.restaurantId,
    });
  }

  async findById(id: Product['id']) {
    return await this.productRepository.findById(id);
  }

  async listProducts() {
    const products = await this.productRepository.listProducts();

    return products;
  }
}
