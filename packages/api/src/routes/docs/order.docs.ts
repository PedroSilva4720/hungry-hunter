import { FastifySchema } from 'fastify';

export const orderPostUserIdProductId: FastifySchema = {
  description: 'Create new order',
  summary: 'Create new order',
  tags: ['order'],
  body: {
    type: 'object',
    properties: {
      userId: { type: 'string' },
      productId: { type: 'string' },
    },
  },
  response: {
    201: {
      description: 'Ok',
      type: 'null',
    },
    409: {
      description: 'User already exists error',
      type: 'object',
      properties: {
        message: {
          type: 'string',
          example: 'Usuário já existe, por favor faça login.',
        },
      },
    },
    500: {
      description: 'Internal Server Error',
      type: 'string',
      example:
        'Erro interno, por favor tente novamente dentro de alguns minutos.',
    },
  },
};
