import { hash } from 'argon2';
import { IUserModel, IUserRepository } from '@t/user';
import { UserAlreadyExistsError } from '@errors/errors';

export class UserModels implements IUserModel {
  public id: string;
  public name: string;
  public email: string;
  public unHashedPassword: string;
  private passwordHash: string;

  constructor(private userRepository: IUserRepository) {}

  async create() {
    const user = await this.userRepository.findByEmail(this.email);

    if (user) {
      throw new UserAlreadyExistsError();
    }

    this.passwordHash = await hash(this.unHashedPassword);

    await this.userRepository.create({
      email: this.email,
      name: this.name,
      passwordHash: this.passwordHash,
    });
  }
}
