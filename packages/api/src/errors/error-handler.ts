import { FastifyReply, FastifyRequest } from 'fastify';
import {
  InternalServerError,
  InvalidLoginPropsError,
  RestaurantAlreadyExistsError,
  UserAlreadyExistsError,
} from './errors';
import { ZodError } from 'zod';

export const errorHandler = (
  error: Error,
  _req: FastifyRequest,
  rep: FastifyReply
) => {
  if (error instanceof InvalidLoginPropsError) {
    rep.status(400);
    return { message: error.message };
  }

  if (error instanceof ZodError) {
    rep.status(401);
    return { message: error.format() };
  }

  if (error instanceof RestaurantAlreadyExistsError) {
    rep.status(409);
    return { message: error.message };
  }

  if (error instanceof UserAlreadyExistsError) {
    rep.status(409);
    return { message: error.message };
  }

  if (error instanceof InternalServerError) {
    rep.status(500);
    return { message: error.message };
  }

  rep.status(500);
  return { message: error.message };
};
