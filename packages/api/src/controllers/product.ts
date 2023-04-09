import { ProductModel } from './../models/product';
import { FastifyReply, FastifyRequest } from 'fastify';

export class ProductControllers {
  async create(req, rep: FastifyReply) {
    const { name, description, price, restaurantId } = req.body;

    const Model = new ProductModel();

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

    const Model = new ProductModel();

    const product = await Model.findById({ id });

    return product;
  }
  async listProducts(req, rep) {
    const Model = new ProductModel();

    const products = await Model.listProducts();

    return { products };
  }
}
