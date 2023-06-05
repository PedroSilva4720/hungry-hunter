import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

import { UserRepository } from '@repo/user';
import { UserMiddlewares } from '@middlewares/user';
import { UserModels } from '@models/user';
import { IUserController } from '@t/user';
import { InternalServerError } from '@errors/errors';
import { decodeBasicToken } from '@utils/utils';

export class UserControllers implements IUserController {
  async create(req: FastifyRequest, rep: FastifyReply) {
    const schema = z.object({
      name: z.string(),
      email: z.string().email(),
      unHashedPassword: z.string(),
    });

    const { name, email, unHashedPassword } = schema.parse(req.body);

    const Repository = new UserRepository();
    const Model = new UserModels(Repository);

    Object.assign(Model, {
      name,
      email,
      unHashedPassword,
    });

    try {
      await Model.create();
    } catch (error) {
      throw new InternalServerError(error);
    }

    rep.status(201);

    return {};
  }

  async login(req: FastifyRequest, _rep: FastifyReply) {
    const authString = req.headers.authorization;

    const { email, password } = decodeBasicToken(authString);

    const Middleware = new UserMiddlewares(new UserRepository());

    Middleware.email = email;
    Middleware.unHashedPassword = password;

    await Middleware.verifyExistentUser();
    await Middleware.verifyPassword();
    Middleware.generateJWT();

    const jwt = Middleware.jwt;

    return { jwt };
  }
}
