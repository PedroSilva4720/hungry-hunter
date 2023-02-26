import fastify from 'fastify';
import { RestaurantRouter } from './routes/restaurant';

const app = fastify({
  logger: true,
});

app.register(RestaurantRouter, { prefix: '/restaurant' });

app.listen({ port: 9001 }, function (err, address) {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  app.log.info(`server listening on ${address}`);
});
