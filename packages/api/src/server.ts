import fastify from 'fastify';
import { OrderRoutes } from './routes/order';
import { ProductRouter } from './routes/product';
import { RestaurantRouter } from './routes/restaurant';
import { UserRouter } from './routes/user';
import { errorHandler } from '@errors/error-handler';

const app = fastify({
  logger: true,
});

app.setErrorHandler(errorHandler);

app.register(RestaurantRouter, { prefix: '/restaurant' });
app.register(ProductRouter, { prefix: '/product' });
app.register(UserRouter, { prefix: '/user' });
app.register(OrderRoutes, { prefix: '/order' });

app.listen({ port: 9001 }, function (err, address) {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  app.log.info(`server listening on ${address}`);
});
