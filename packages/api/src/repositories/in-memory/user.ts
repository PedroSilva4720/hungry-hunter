import { randomUUID } from 'node:crypto';
import { IUserRepository, CreateUserInput, User } from '@t/user';

export class InMemoryUserRepository implements IUserRepository {
  public users: User[] = [];

  async create(data: CreateUserInput) {
    const user = { ...data, id: data.id ?? randomUUID() };

    this.users.push(user);

    return user;
  }
  async findByEmail(email: User['email']) {
    const user = this.users.find(item => item.email === email);

    if (!user) {
      return null;
    }

    return user;
  }
  async findById(id: User['id']) {
    const user = this.users.find(item => item.id === id);

    if (!user) {
      return null;
    }

    return user;
  }
}
