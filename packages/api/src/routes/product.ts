import { ProductControllers } from './../controllers/product';
import { FastifyInstance } from 'fastify';

export const ProductRouter = async (fastify: FastifyInstance) => {
  fastify.post('/', await new ProductControllers().create);
  fastify.post('/:id', await new ProductControllers().findById);
};
