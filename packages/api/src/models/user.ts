import { hash } from 'argon2';
import { IUserModel, IUserRepository } from '@t/user';

export class UserModels implements IUserModel {
  public id: string;
  public name: string;
  public email: string;
  public unHashedPassword: string;
  private passwordHash: string;

  constructor(private userRepository: IUserRepository) {}

  async create() {
    this.passwordHash = await hash(this.unHashedPassword);

    await this.userRepository.create({
      email: this.email,
      name: this.name,
      passwordHash: this.passwordHash,
    });
  }
}
