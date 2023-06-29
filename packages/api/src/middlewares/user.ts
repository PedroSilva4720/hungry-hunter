import { FastifyRequest } from 'fastify';
import { verify } from 'argon2';
import { z } from 'zod';

import { IUserMiddlewares, IUserRepository, User } from '@t/user';
import { InvalidLoginPropsError } from '@errors/errors';

export class UserMiddlewares implements IUserMiddlewares {
  public jwt: string;
  public email: string;
  public unHashedPassword: string;
  public user: User;

  constructor(private UserRepository: IUserRepository) {}

  async verifyExistentUser() {
    const user = await this.UserRepository.findByEmail(this.email);

    if (!user) {
      throw new InvalidLoginPropsError();
    }

    this.user = user;

    return user;
  }
  async verifyPassword() {
    const passwordMatch = await verify(
      this.user.passwordHash,
      this.unHashedPassword
    );

    if (!passwordMatch) {
      throw new InvalidLoginPropsError();
    }
  }

  async verifyToken(req: FastifyRequest) {
    const schema = z.object({
      user: z.string(),
      iat: z.number(),
    });
    const { user: id } = schema.parse(await req.jwtVerify());

    const user = await this.UserRepository.findById(id);

    if (!user) {
      throw new InvalidLoginPropsError();
    }

    return user;
  }
}
