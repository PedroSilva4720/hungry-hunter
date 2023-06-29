import { ProductControllers } from './../controllers/product';
import { FastifyInstance } from 'fastify';

export const ProductRouter = async (fastify: FastifyInstance) => {
  fastify.post('/', new ProductControllers().create);
  fastify.post('/:id', new ProductControllers().findById);
  fastify.get('/', new ProductControllers().listProducts);
};
