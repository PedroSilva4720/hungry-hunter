import { FastifyInstance } from 'fastify';
import { RestaurantControllers } from '../controllers/restaurant';

export const RestaurantRouter = async (fastify: FastifyInstance) => {
  fastify.post('/', await new RestaurantControllers().create);
  fastify.post('/find', await new RestaurantControllers().findById);
  fastify.get('/:id', await new RestaurantControllers().findProducts);
};
