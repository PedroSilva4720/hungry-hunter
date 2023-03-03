import { FastifyReply, FastifyRequest } from 'fastify';
import { RestaurantModels } from '../models/restaurant';

export class RestaurantControllers {
  async create(req, rep: FastifyReply) {
    const { name, email, address, phoneNumber, password } = req.body;

    const Model = new RestaurantModels();

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

    const Model = new RestaurantModels();

    const restaurant = await Model.findById({ id });

    return restaurant;
  }

  async findProducts(req: FastifyRequest, rep: FastifyReply) {
    const id = req.params;

    const Model = new RestaurantModels();

    const products = await Model.findProducts({ id } as { id: string });

    return products;
  }
}
