import { verify } from 'argon2';
import { sign, verify as verifyJWT } from 'jsonwebtoken';

import { IUserMiddlewares, IUserRepository, User } from '@t/user';
import { InvalidLoginPropsError } from '@errors/errors';

export class UserMiddlewares implements IUserMiddlewares {
  public jwt: string;
  public email: string;
  public unHashedPassword: string;
  public user: User;

  constructor(public UserRepository: IUserRepository) {}

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
  generateJWT() {
    const jwt = sign(
      { id: this.user.id, email: this.user.email, name: this.user.name },
      process.env.SECRET,
      {
        expiresIn: '15d',
      }
    );
    this.jwt = jwt;
  }

  async verifyJWT(id: string) {
    const user = await this.UserRepository.findById(id);

    const result = verifyJWT(this.jwt, process.env.SECRET);

    return typeof result != 'string' && result.id == user?.id;
  }
}
