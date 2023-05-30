import { verify } from 'argon2';
import { sign, verify as verifyJWT } from 'jsonwebtoken';
import { UserRepository } from '@repo/user';
import { User } from '@t/user';
import { InvalidLoginPropsError } from '@errors/errors';

export class UserMiddlewares {
  public jwt: string;
  public email: string;
  public unHashedPassword: string;
  private user: User;

  async verifyExistentUser() {
    const Repository = new UserRepository();

    const user: User | null = await Repository.findByEmail(this.email);

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
    const Repository = new UserRepository();

    const user = await Repository.findById(id);

    const result = verifyJWT(this.jwt, process.env.SECRETs);

    return typeof result != 'string' && result.id == user?.id;
  }
}
