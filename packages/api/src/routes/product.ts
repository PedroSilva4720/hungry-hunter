import { ProductControllers } from './../controllers/product';
import { FastifyInstance } from 'fastify';

export const ProductRouter = async (fastify: FastifyInstance) => {
  fastify.post('/', await new ProductControllers().create);
  fastify.get('/:id', await new ProductControllers().findById);
};
