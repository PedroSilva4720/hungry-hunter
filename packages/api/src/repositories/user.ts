import { prisma } from '../prisma/prisma';
import { User } from '../types/user';

export class UserRepository {
  async create({ email, name, passwordHash }: Omit<User, 'id'>) {
    await prisma.user.create({
      data: {
        name,
        email,
        passwordHash,
      },
    });
  }

  async verifyExistentUser({ email }: Pick<User, 'email'>) {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    return user;
  }

  async verifyExistentUserById({ id }: Pick<User, 'id'>) {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    return user;
  }
}
