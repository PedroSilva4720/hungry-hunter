import { hash } from 'argon2';
import { UserRepository } from './../repositories/user';

export class UserModels {
  public id: string;
  public name: string;
  public email: string;
  public unHashedPassword: string;
  private passwordHash: string;

  async create() {
    const Repository = new UserRepository();

    this.passwordHash = await hash(this.unHashedPassword);

    await Repository.create({
      email: this.email,
      name: this.name,
      passwordHash: this.passwordHash,
    });
  }
}
