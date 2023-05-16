import { ProductModel } from '@models/product';
import { ProductRepositories } from '@repo/product';
import { IProductController } from '@t/product';
import { FastifyReply, FastifyRequest } from 'fastify';

export class ProductControllers implements IProductController {
  async create(req, rep: FastifyReply) {
    const { name, description, price, restaurantId } = req.body;

    const Repository = new ProductRepositories();
    const Model = new ProductModel(Repository);

    Model.restaurantId = await restaurantId;

    Object.assign(Model, {
      name,
      description,
      price,
    });

    await Model.create();
    return;
  }

  async findById(req, rep: FastifyReply) {
    const { id } = req.params;

    const Repository = new ProductRepositories();
    const Model = new ProductModel(Repository);

    const product = await Model.findById(id);

    return { product };
  }
  async listProducts(req, rep) {
    const Repository = new ProductRepositories();
    const Model = new ProductModel(Repository);

    const products = await Model.listProducts();

    return { products };
  }
}
