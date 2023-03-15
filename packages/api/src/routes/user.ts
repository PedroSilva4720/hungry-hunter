import { FastifyInstance } from 'fastify';
import { UserControllers } from '../controllers/user';

export const UserRouter = async (fastify: FastifyInstance) => {
  fastify.post('/create', await new UserControllers().create);
  fastify.get('/', await new UserControllers().login);
};
