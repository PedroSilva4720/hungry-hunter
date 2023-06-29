import fastify from 'fastify';
import fastifyJwt from '@fastify/jwt';

import { OrderRoutes } from '@routes/order';
import { ProductRouter } from '@routes/product';
import { RestaurantRouter } from '@routes/restaurant';
import { UserRouter } from '@routes/user';
import { errorHandler } from '@errors/error-handler';

export const app = fastify({
  logger: true,
});

app.register(fastifyJwt, {
  secret: process.env.SECRET,
});

app.setErrorHandler(errorHandler);

app.register(RestaurantRouter, { prefix: '/restaurant' });
app.register(ProductRouter, { prefix: '/product' });
app.register(UserRouter, { prefix: '/user' });
app.register(OrderRoutes, { prefix: '/order' });
