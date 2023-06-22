import { FastifyReply, FastifyRequest } from 'fastify';
import { Product } from './product.d';
import { Prisma, restaurant } from '@prisma/client';

export type Restaurant = restaurant;

export type CreateRestaurantInput = Prisma.restaurantCreateInput;

export interface IRestaurantRepository {
  create(data: CreateRestaurantInput): Promise<Restaurant>;
  findById(id: Restaurant['id']): Promise<Restaurant | null>;
  findByEmail(email: Restaurant['email']): Promise<Restaurant | null>;
  findProducts(id: Restaurant['id']): Promise<{ products: Product[] }>;
}

export interface IRestaurantModel {
  id: string;
  name: string;
  email: string;
  address: string;
  phoneNumber: string;
  unHashedPassword: string;
  create(): Promise<Restaurant>;
  findById(id: Restaurant['id']): Promise<Restaurant | null>;
  findProducts(id: Restaurant['id']): Promise<{ products: Product[] }>;
}

export interface IRestaurantController {
  create(req: FastifyRequest, rep: FastifyReply): Promise<void>;
  findById(
    req: FastifyRequest,
    rep: FastifyReply
  ): Promise<{ restaurant: Restaurant }>;
  findProducts(
    req: FastifyRequest,
    rep: FastifyReply
  ): Promise<{ products: Product[] }>;
}
