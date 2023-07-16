import fastify from 'fastify';
import fastifyJwt from '@fastify/jwt';
import fastifyCookie from '@fastify/cookie';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';

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
  cookie: {
    cookieName: 'refreshToken',
    signed: false,
  },
  sign: {
    expiresIn: '10m',
  },
});

app.register(fastifyCookie);

app.register(fastifySwagger, {
  swagger: {
    info: {
      title: 'Hungry-Hunter api',
      version: '0.1.x',
    },
    host: 'localhost',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
      { name: 'user', description: 'User related end-points' },
      { name: 'restaurant', description: 'Restaurant related end-points' },
      { name: 'order', description: 'Order related end-points' },
      { name: 'product', description: 'Product related end-points' },
    ],
  },
});

app.register(fastifySwaggerUi, {
  routePrefix: '/route-docs',
});

app.setErrorHandler(errorHandler);

app.register(RestaurantRouter, { prefix: '/restaurant' });
app.register(ProductRouter, { prefix: '/product' });
app.register(UserRouter, { prefix: '/user' });
app.register(OrderRoutes, { prefix: '/order' });
