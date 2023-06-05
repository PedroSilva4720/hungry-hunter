import { expect, describe, it } from 'vitest';

import { UserModels } from '@models/user';
import { InMemoryUserRepository } from '@repo/in-memory/user';
import { IUserRepository, User, CreateUserInput } from '@t/user';

class RepositoryError implements IUserRepository {
  async create(_data: CreateUserInput): Promise<void> {
    return;
  }

  async findByEmail(email: User['email']): Promise<User> {
    return {
      id: '1234',
      email,
      name: 'John Doe',
      passwordHash: 'verySecretPassword',
    };
  }

  async findById(id: User['id']): Promise<User> {
    return {
      id,
      email: 'john@doe.com',
      name: 'John Doe',
      passwordHash: 'verySecretPassword',
    };
  }
}

describe('User Model tests switch', () => {
  it('should successfully create a new user', async () => {
    const sut = new UserModels(new InMemoryUserRepository());

    const data = {
      name: 'John Doe',
      email: 'john@doe.com',
      unHashedPassword: '12345',
    };

    Object.assign(sut, data);

    await expect(sut.create()).resolves.empty;
  });

  it('should not create an user if email already exists in database', async () => {
    const sut = new UserModels(new RepositoryError());

    const data = {
      name: 'John Doe',
      email: 'john@doe.com',
      unHashedPassword: '12345',
    };

    Object.assign(sut, data);

    await expect(sut.create()).rejects.toThrow(
      'Usuário já existe, por favor faça login.'
    );
  });
});
