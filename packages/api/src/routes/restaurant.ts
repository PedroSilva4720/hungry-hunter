import { FastifyInstance } from 'fastify';
import { RestaurantControllers } from '../controllers/restaurant';

export const RestaurantRouter = async (fastify: FastifyInstance) => {
  fastify.post('/', new RestaurantControllers().create);
  fastify.post('/find', new RestaurantControllers().findById);
  fastify.get('/:id', new RestaurantControllers().findProducts);
};
