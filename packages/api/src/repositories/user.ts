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
}
