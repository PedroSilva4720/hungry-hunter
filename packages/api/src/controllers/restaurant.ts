import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

import { RestaurantModels } from '@models/restaurant';
import { RestaurantRepository } from '@repo/restaurant';
import { IRestaurantController } from '@t/restaurant';

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

    await Model.create();

    return rep.status(201).send();
  }

  async findById(req: FastifyRequest, _rep: FastifyReply) {
    const { id } = z.object({ id: z.string() }).parse(req.body);

    const Repository = new RestaurantRepository();
    const Model = new RestaurantModels(Repository);

    const restaurant = await Model.findById(id);

    return { restaurant };
  }

  async findProducts(req: FastifyRequest, _rep: FastifyReply) {
    const id = req.params;

    const Repository = new RestaurantRepository();
    const Model = new RestaurantModels(Repository);

    const products = await Model.findProducts(id as string);

    return products;
  }
}
