import { IUserModel, IUserRepository, User } from '@t/user';
import { UserAlreadyExistsError } from '@errors/errors';
import { hashPassword } from '@utils/utils';

export class UserModels implements IUserModel {
  public id: string;
  public name: string;
  public email: string;
  public unHashedPassword: string;
  public user: User;
  private passwordHash: string;

  constructor(private userRepository: IUserRepository) {}

  async create() {
    const existentUser = await this.userRepository.findByEmail(this.email);

    if (existentUser) {
      throw new UserAlreadyExistsError();
    }

    this.passwordHash = await hashPassword(this.unHashedPassword);

    const createdUser = await this.userRepository.create({
      email: this.email,
      name: this.name,
      passwordHash: this.passwordHash,
    });

    return createdUser;
  }
}
