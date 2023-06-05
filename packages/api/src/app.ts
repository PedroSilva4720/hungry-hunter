import fastify from 'fastify';

import { OrderRoutes } from '@routes/order';
import { ProductRouter } from '@routes/product';
import { RestaurantRouter } from '@routes/restaurant';
import { UserRouter } from '@routes/user';
import { errorHandler } from '@errors/error-handler';

export const app = fastify({
  logger: true,
});

app.setErrorHandler(errorHandler);

app.register(RestaurantRouter, { prefix: '/restaurant' });
app.register(ProductRouter, { prefix: '/product' });
app.register(UserRouter, { prefix: '/user' });
app.register(OrderRoutes, { prefix: '/order' });
