import { FastifyInstance } from 'fastify';
import { OrderControllers } from '../controllers/order';
import { orderPostUserIdProductId } from './docs/order.docs';

export const OrderRoutes = async (fastify: FastifyInstance) => {
  //TODO user should be authenticated
  fastify.post(
    '/:userId/:productId',
    { schema: orderPostUserIdProductId },
    new OrderControllers().create
  );
};
