import { OrderModels } from '@models/order';
import { OrderRepositories } from '@repo/order';
import { IOrderController } from '@t/order';

export class OrderControllers implements IOrderController {
  async create(req, rep) {
    const { userId, productId } = req.params;

    const Repository = new OrderRepositories();
    const Model = new OrderModels(Repository);

    Object.assign(Model, {
      userId,
      productId,
    });

    Model.create();

    return {};
  }
}
