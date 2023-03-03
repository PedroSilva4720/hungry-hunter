import { UserModels } from '../models/user';

export class UserControllers {
  async create(req, rep) {
    const { name, email, unHashedPassword } = req.body;

    const Model = new UserModels();

    Object.assign(Model, {
      name,
      email,
      unHashedPassword,
    });

    Model.create();

    return {};
  }
}
