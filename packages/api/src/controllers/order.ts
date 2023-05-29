import { FastifyReply, FastifyRequest } from 'fastify';
import z from 'zod';

import { OrderModels } from '@models/order';
import { OrderRepositories } from '@repo/order';
import { IOrderController } from '@t/order';

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

    Model.create();

    rep.status(201);

    return {};
  }
}
