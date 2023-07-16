import { FastifyInstance } from 'fastify';
import { UserControllers } from '../controllers/user';
import { userGet, userGetAuth, userPost } from './docs/user.docs';
import { refresh } from '@middlewares/token';

export const UserRouter = async (fastify: FastifyInstance) => {
  fastify.post('/', { schema: userPost }, new UserControllers().create);
  fastify.get('/', { schema: userGet }, new UserControllers().login);
  fastify.get(
    '/auth',
    { schema: userGetAuth },
    new UserControllers().verifyToken
  );
  fastify.patch('/token', refresh);
};
