import { prisma } from '@@/prisma/prisma';
import { CreateUserInput, IUserRepository, User } from '@t/user';

export class UserRepository implements IUserRepository {
  async create({ email, name, passwordHash }: CreateUserInput) {
    await prisma.user.create({
      data: {
        name,
        email,
        passwordHash,
      },
    });
  }

  async findByEmail(email: User['email']) {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    return user;
  }

  async findById(id: User['id']) {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    return user;
  }
}
