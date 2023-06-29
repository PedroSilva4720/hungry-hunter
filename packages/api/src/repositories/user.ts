import { prisma } from '@@/prisma/prisma';
import { CreateUserInput, IUserRepository, User } from '@t/user';

export class UserRepository implements IUserRepository {
  async create({ email, name, passwordHash }: CreateUserInput) {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        passwordHash,
      },
    });

    return user;
  }

  async findByEmail(email: User['email']) {
    return await prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  async findById(id: User['id']) {
    return await prisma.user.findUnique({
      where: {
        id,
      },
    });
  }
}
