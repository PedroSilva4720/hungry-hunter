import { OrderModels } from '../models/order';

export class OrderControllers {
  async create(req, rep) {
    const { userId, productId } = req.params;

    const Model = new OrderModels();

    Object.assign(Model, {
      userId,
      productId,
    });

    Model.create();

    return {};
  }
}
