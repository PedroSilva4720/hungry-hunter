import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

import { ProductModel } from '@models/product';
import { ProductRepositories } from '@repo/product';
import { IProductController } from '@t/product';
import { InternalServerError } from '@errors/errors';

export class ProductControllers implements IProductController {
  async create(req: FastifyRequest, rep: FastifyReply) {
    const schema = z.object({
      name: z.string(),
      description: z.string(),
      price: z.number(),
      restaurantId: z.string(),
    });

    const { name, description, price, restaurantId } = schema.parse(req.body);

    const Repository = new ProductRepositories();
    const Model = new ProductModel(Repository);

    Model.restaurantId = restaurantId;

    Object.assign(Model, {
      name,
      description,
      price,
    });
    try {
      await Model.create();
    } catch (error) {
      throw new InternalServerError(error);
    }

    rep.status(201);
    return 'criado com sucesso';
  }

  async findById(req: FastifyRequest, _rep: FastifyReply) {
    const schema = z.object({
      id: z.string(),
    });

    const { id } = schema.parse(req.params);

    const Repository = new ProductRepositories();
    const Model = new ProductModel(Repository);

    const product = await Model.findById(id);

    return { product };
  }
  async listProducts(_req: FastifyRequest, _rep: FastifyReply) {
    const Repository = new ProductRepositories();
    const Model = new ProductModel(Repository);

    const products = await Model.listProducts();

    return { products };
  }
}
