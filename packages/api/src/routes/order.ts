import { FastifyInstance } from 'fastify';
import { OrderControllers } from '../controllers/order';

export const OrderRoutes = async (fastify: FastifyInstance) => {
  fastify.post('/:userId/:productId', new OrderControllers().create);
};
