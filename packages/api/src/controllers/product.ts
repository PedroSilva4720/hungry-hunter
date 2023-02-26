import { ProductModel } from './../models/product';
import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

export class ProductControllers {
  async create(req: FastifyRequest, rep: FastifyReply) {
    const createProductSchema = z.object({
      name: z.string(),
      description: z.string(),
      price: z.number(),
      restaurantId: z.string(),
    });

    const { name, description, price, restaurantId } =
      createProductSchema.parse(req.body);

    const Model = new ProductModel();

    Model.restaurantId = restaurantId;

    Object.assign(Model, {
      name,
      description,
      price,
    });

    await Model.create();
    return;
  }

  async findById(req: FastifyRequest, rep: FastifyReply) {
    const findRestaurantByIdSchema = z.object({
      id: z.string(),
    });

    const { id } = findRestaurantByIdSchema.parse(req.body);

    const Model = new ProductModel();

    const product = await Model.findById({ id });

    return product;
  }
}
