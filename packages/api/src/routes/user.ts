import { FastifyInstance } from 'fastify';
import { UserControllers } from '../controllers/user';

export const UserRouter = async (fastify: FastifyInstance) => {
  fastify.post('/create', new UserControllers().create);
  fastify.get('/', new UserControllers().login);
  fastify.get('/auth', new UserControllers().verifyToken);
};
