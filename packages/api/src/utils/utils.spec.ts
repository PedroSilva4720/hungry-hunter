import { expect, it, describe } from 'vitest';

import { decodeBasicToken, hashPassword } from './utils';

describe('Utils tests switch', () => {
  it('should test basic auth decoder', async () => {
    const email = 'john@doe.com';
    const password = '12345abc';

    const token = Buffer.from(`${email}:${password}`).toString('base64');

    const basicAuth = `Basic ${token}`;

    const { email: decodedEmail, password: decodedPassword } =
      decodeBasicToken(basicAuth);

    expect(decodedEmail).toEqual(email);
    expect(decodedPassword).toEqual(password);
  });

  it('should hash password', async () => {
    const unHashed = 'unHashedString';

    const hashed = await hashPassword(unHashed);

    expect(hashed).toEqual(expect.any(String));
    expect(hashed).not.toBe(unHashed);
  });
});
