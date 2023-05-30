import { FastifyReply, FastifyRequest } from 'fastify';
import z from 'zod';

import { OrderModels } from '@models/order';
import { OrderRepositories } from '@repo/order';
import { IOrderController } from '@t/order';
import { InternalServerError } from '@errors/errors';

export class OrderControllers implements IOrderController {
  async create(req: FastifyRequest, rep: FastifyReply) {
    const schema = z.object({
      userId: z.string(),
      productId: z.string(),
    });
    const { userId, productId } = schema.parse(req.params);

    const Repository = new OrderRepositories();
    const Model = new OrderModels(Repository);

    Object.assign(Model, {
      userId,
      productId,
    });

    try {
      await Model.create();
    } catch (error) {
      throw new InternalServerError(error);
    }

    rep.status(201);

    return {};
  }
}
