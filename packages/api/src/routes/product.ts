import { ProductControllers } from './../controllers/product';
import { FastifyInstance } from 'fastify';
import { productPost, productPostId, productGet } from './docs/product.docs';

export const ProductRouter = async (fastify: FastifyInstance) => {
  //TODO restaurant should be authenticated
  fastify.post('/', { schema: productPost }, new ProductControllers().create);
  //TODO return != 200 if not found
  fastify.post(
    '/:id',
    { schema: productPostId },
    new ProductControllers().findById
  );
  fastify.get(
    '/',
    { schema: productGet },
    new ProductControllers().listProducts
  );
};
