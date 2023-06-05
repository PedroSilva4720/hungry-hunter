import { Prisma, user as PrismaUser } from '@prisma/client';

export type User = PrismaUser;

export type CreateUserInput = Prisma.userCreateInput;

export interface IUserRepository {
  create(data: CreateUserInput): Promise<void>;
  findByEmail(email: User['email']): Promise<User>;
  findById(id: User['id']): Promise<User>;
}

export interface IUserController {
  create(req, res): Promise<object>;
  login(req, res): Promise<{ jwt: string }>;
}

export interface IUserModel {
  id: string;
  name: string;
  email: string;
  unHashedPassword: string;
  user: User;
  create(): Promise<void>;
}

export interface IUserMiddlewares {
  jwt: string;
  email: string;
  unHashedPassword: string;
  verifyExistentUser(): Promise<User>;
  verifyPassword(): Promise<void>;
  generateJWT(): void;
  verifyJWT(id: User['id']): Promise<boolean>;
}
