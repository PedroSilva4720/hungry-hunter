import { FastifyReply, FastifyRequest } from 'fastify';
import { RestaurantModels } from '@models/restaurant';
import { RestaurantRepository } from '@repo/restaurant';
import { IRestaurantController } from '@t/restaurant';

export class RestaurantControllers implements IRestaurantController {
  async create(req, rep: FastifyReply) {
    const { name, email, address, phoneNumber, password } = req.body;

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

  async findById(req, rep: FastifyReply) {
    const { id } = req.body;

    const Repository = new RestaurantRepository();
    const Model = new RestaurantModels(Repository);

    const restaurant = await Model.findById(id);

    return { restaurant };
  }

  async findProducts(req: FastifyRequest, rep: FastifyReply) {
    const id = req.params;

    const Repository = new RestaurantRepository();
    const Model = new RestaurantModels(Repository);

    const products = await Model.findProducts(id as string);

    return products;
  }
}
