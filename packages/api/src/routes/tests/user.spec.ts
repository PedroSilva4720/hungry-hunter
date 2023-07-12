import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { hash } from 'argon2';
import supertest from 'supertest';

import { app } from '@@/app';
import { prisma } from '@@/prisma/prisma';

describe('user e2e test switch', () => {
  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  it('should successfully create a new user', async () => {
    const response = await supertest(app.server).post('/user').send({
      name: 'John Doe',
      email: 'john@doe.com',
      unHashedPassword: 'super-secret-password',
    });

    expect(response.status).toBe(201);
  });

  it('should successfully login as user', async () => {
    const userData = {
      name: 'John Doe',
      email: 'john@2doe.com',
      passwordHash: await hash('12345678'),
    };

    await prisma.user.create({
      data: {
        email: userData.email,
        name: userData.name,
        passwordHash: userData.passwordHash,
      },
    });

    const response = await supertest(app.server)
      .get('/user')
      .auth(userData.email, '12345678');

    expect(response.status).toBe(200);
  });
});
