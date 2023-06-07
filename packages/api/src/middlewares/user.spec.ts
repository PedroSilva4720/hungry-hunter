import { describe, it, expect, vi } from 'vitest';
import { hash } from 'argon2';

import { InMemoryUserRepository } from '@repo/in-memory/user';

import { UserMiddlewares } from './user';
import { sign } from 'jsonwebtoken';
import { InvalidLoginPropsError } from '@errors/errors';

describe('User Middleware tests switch', () => {
  it('should successfully find an existent user', async () => {
    const Repository = new InMemoryUserRepository();
    const sut = new UserMiddlewares(Repository);

    Repository.create({
      email: 'john@doe.com',
      name: 'John Doe',
      passwordHash: '123abc',
    });

    sut.email = 'john@doe.com';
    const user = await sut.verifyExistentUser();

    expect(user).toHaveProperty('email');
    expect(user).toHaveProperty('name');
    expect(user).toHaveProperty('id');
    expect(user).toHaveProperty('passwordHash');
  });

  it('should verify if password hash match with user password', async () => {
    const Repository = new InMemoryUserRepository();
    const sut = new UserMiddlewares(Repository);

    Repository.create({
      email: 'john@doe.com',
      name: 'John Doe',
      passwordHash: await hash('1234abc'),
    });

    sut.email = 'john@doe.com';
    await sut.verifyExistentUser();

    sut.unHashedPassword = '1234abc';

    await expect(sut.verifyPassword()).resolves.empty;
  });

  it('should generate jwt token', async () => {
    vi.stubEnv('SECRET', 'secret');

    const Repository = new InMemoryUserRepository();
    const sut = new UserMiddlewares(Repository);

    sut.user = {
      id: '123123abc',
      name: 'John Doe',
      email: 'john@doe.com',
      passwordHash: '123abc',
    };

    expect(() => sut.generateJWT()).not.toThrow();
    expect(sut.jwt).toEqual(expect.any(String));
  });

  it('should correctly verify json web token', () => {
    vi.stubEnv('SECRET', 'secret');

    const Repository = new InMemoryUserRepository();
    const sut = new UserMiddlewares(Repository);

    Repository.create({
      id: '123123abc',
      email: 'john@doe.com',
      name: 'John Doe',
      passwordHash: '123abc',
    });

    const jwt = sign(
      { id: '123123abc', email: 'john@doe.com', name: 'John Doe' },
      'secret',
      {
        expiresIn: '15d',
      }
    );

    sut.jwt = jwt;

    expect(sut.verifyJWT('123123abc')).resolves.toEqual(true);
  });

  it('should throw an error if try to verify json web token with wrong credentials', async () => {
    vi.stubEnv('SECRET', 'secret');

    const Repository = new InMemoryUserRepository();
    const sut = new UserMiddlewares(Repository);

    await expect(sut.verifyJWT('123123')).rejects.toBeInstanceOf(
      InvalidLoginPropsError
    );
  });
});
