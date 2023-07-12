import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

import { RestaurantModels } from '@models/restaurant';
import { RestaurantRepository } from '@repo/restaurant';
import { IRestaurantController } from '@t/restaurant';
import { InternalServerError } from '@errors/errors';

export class RestaurantControllers implements IRestaurantController {
  async create(req: FastifyRequest, rep: FastifyReply) {
    const schema = z.object({
      name: z.string(),
      email: z.string().email(),
      address: z.string(),
      phoneNumber: z.string(),
      password: z.string(),
    });

    const { name, email, address, phoneNumber, password } = schema.parse(
      req.body
    );

    const Repository = new RestaurantRepository();
    const Model = new RestaurantModels(Repository);

    Object.assign(Model, {
      name,
      email,
      address,
      phoneNumber,
      unHashedPassword: password,
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
    const { id } = z.object({ id: z.string() }).parse(req.body);

    const Repository = new RestaurantRepository();
    const Model = new RestaurantModels(Repository);

    const restaurant = await Model.findById(id);

    return { restaurant: { ...restaurant, passwordHash: undefined } };
  }

  async findProducts(req: FastifyRequest, _rep: FastifyReply) {
    const { id } = z.object({ id: z.string() }).parse(req.params);

    const Repository = new RestaurantRepository();
    const Model = new RestaurantModels(Repository);

    const products = await Model.findProducts(id);

    return products;
  }
}
