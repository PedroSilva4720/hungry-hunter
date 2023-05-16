import { verify } from 'argon2';
import { sign, verify as verifyJWT } from 'jsonwebtoken';
import { UserRepository } from '@repo/user';
import { User } from '@t/user';

export class UserMiddlewares {
  public jwt: string;
  public email: string;
  public unHashedPassword: string;
  private user: User;

  async verifyExistentUser() {
    const Repository = new UserRepository();

    const user: User | null = await Repository.verifyExistentUser(this.email);

    if (!user) {
      throw new Error('Verifique o email ou a senha.');
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
      throw new Error('Verifique o email ou a senha.');
    }
  }
  generateJWT() {
    const jwt = sign(
      { id: this.user.id, email: this.user.email, name: this.user.name },
      process.env.SECRET!,
      {
        expiresIn: '15d',
      }
    );
    this.jwt = jwt;
  }

  async verifyJWT(id: string) {
    const Repository = new UserRepository();

    const user = await Repository.verifyExistentUserById(id);

    const result = verifyJWT(this.jwt, process.env.SECRET!);

    return typeof result != 'string' && result.id == user?.id;
  }
}
