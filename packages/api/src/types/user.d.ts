import { Prisma, user as PrismaUser } from '@prisma/client';
import { FastifyReply, FastifyRequest } from 'fastify';

export type User = PrismaUser;

export type CreateUserInput = Prisma.userCreateInput;

export interface IUserRepository {
  create(data: CreateUserInput): Promise<User>;
  findByEmail(email: User['email']): Promise<User>;
  findById(id: User['id']): Promise<User>;
}

export interface IUserController {
  create(req: FastifyRequest, res: FastifyReply): Promise<object>;
  login(req: FastifyRequest, res: FastifyReply): Promise<{ token: string }>;
  verifyToken(req: FastifyRequest, rep: FastifyReply): Promise<User>;
}

export interface IUserModel {
  id: string;
  name: string;
  email: string;
  unHashedPassword: string;
  user: User;
  create(): Promise<User>;
}

export interface IUserMiddlewares {
  jwt: string;
  email: string;
  unHashedPassword: string;
  verifyExistentUser(): Promise<User>;
  verifyPassword(): Promise<void>;
  verifyToken(req: FastifyRequest): Promise<User>;
}
