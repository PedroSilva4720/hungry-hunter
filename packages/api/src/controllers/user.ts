import { UserMiddlewares } from '../middlewares/user';
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

  async login(req, rep) {
    const authString = req.headers.authorization;

    const [email, password] = Buffer.from(authString.split(' ')[1], 'base64')
      .toString('utf-8')
      .split(':');

    const Middleware = new UserMiddlewares();

    Middleware.email = email;
    Middleware.unHashedPassword = password;

    await Middleware.verifyExistentUser();
    await Middleware.verifyPassword();
    Middleware.generateJWT();

    const jwt = Middleware.jwt;

    return { jwt };
  }
}
