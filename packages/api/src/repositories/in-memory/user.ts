import { randomUUID } from 'node:crypto';
import { IUserRepository, CreateUserInput, User } from '@t/user';

export class InMemoryUserRepository implements IUserRepository {
  private users: User[] = [];

  async create(data: CreateUserInput) {
    this.users.push({ ...data, id: randomUUID() });
    return;
  }
  async verifyExistentUser(email: User['email']) {
    const user = this.users.find(item => item.email === email);

    if (!user) {
      return null;
    }

    return user;
  }
  async verifyExistentUserById(id: User['id']) {
    const user = this.users.find(item => item.id === id);

    if (!user) {
      return null;
    }

    return user;
  }
}
