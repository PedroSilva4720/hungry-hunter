import { FastifyReply, FastifyRequest, FastifySchema } from 'fastify';
import { RestaurantModels } from '../models/restaurant';
import { z } from 'zod';

export class RestaurantControllers {
  async create(req: FastifyRequest, rep: FastifyReply) {
    const createRestaurantSchema = z.object({
      name: z.string(),
      email: z.string(),
      address: z.string(),
      phoneNumber: z.string(),
      password: z.string(),
    });

    const { name, email, address, phoneNumber, password } =
      createRestaurantSchema.parse(req.body);

    const Model = new RestaurantModels();

    Object.assign(Model, {
      name,
      email,
      address,
      phoneNumber,
      unHashedPassword: password,
    });
  }

  async findById(req: FastifyRequest, rep: FastifyReply) {
    const findRestaurantByIdSchema = z.object({
      id: z.string(),
    });

    const { id } = findRestaurantByIdSchema.parse(req.body);

    const Model = new RestaurantModels();

    const restaurant = await Model.findById({ id });

    return restaurant;
  }
}
