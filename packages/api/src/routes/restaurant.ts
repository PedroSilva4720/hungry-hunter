import { FastifyInstance } from 'fastify';
import { RestaurantControllers } from '../controllers/restaurant';
import {
  restaurantGetId,
  restaurantPost,
  restaurantPostFind,
} from './docs/restaurant.docs';

export const RestaurantRouter = async (fastify: FastifyInstance) => {
  fastify.post(
    '/',
    { schema: restaurantPost },
    new RestaurantControllers().create
  );
  fastify.post(
    '/find',
    { schema: restaurantPostFind },
    new RestaurantControllers().findById
  );
  fastify.get(
    '/:id',
    { schema: restaurantGetId },
    new RestaurantControllers().findProducts
  );
};
