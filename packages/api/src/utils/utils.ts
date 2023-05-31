import { hash } from 'argon2';

export const decodeBasicToken = (basicToken: string) => {
  const [email, password] = Buffer.from(basicToken.split(' ')[1], 'base64')
    .toString('utf-8')
    .split(':');

  return { email, password };
};

export const hashPassword = async (unHashedPassword: string) => {
  return await hash(unHashedPassword);
};
