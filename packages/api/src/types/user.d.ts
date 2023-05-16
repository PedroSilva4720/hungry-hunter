import { Prisma, user as PrismaUser } from '@prisma/client';

export type User = PrismaUser;

export type CreateUserInput = Prisma.userCreateInput;

export interface IUserRepository {
  create(data: CreateUserInput): Promise<void>;
  verifyExistentUser(email: User['email']): Promise<User>;
  verifyExistentUserById(id: User['id']): Promise<User>;
}

export interface IUserController {
  create(req, res): Promise<{}>;
  login(req, res): Promise<{ jwt: string }>;
}

export interface IUserModel {
  id: string;
  name: string;
  email: string;
  unHashedPassword: string;
  create(): Promise<void>;
}
