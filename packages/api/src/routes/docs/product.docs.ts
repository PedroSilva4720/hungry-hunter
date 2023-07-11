import { FastifySchema } from 'fastify';

export const productPost: FastifySchema = {
  description: 'Create new product of a restaurant',
  summary: 'Create new product',
  tags: ['product'],
  body: {
    type: 'object',
    properties: {
      name: { type: 'string' },
      description: { type: 'string' },
      price: { type: 'number' },
      restaurantId: { type: 'string' },
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

export const productPostId: FastifySchema = {
  description: 'Find a product by its id',
  summary: 'Find by Id',
  tags: ['product'],
  body: {
    type: 'object',
    properties: {
      id: { type: 'string' },
    },
  },
  response: {
    200: {
      description: 'Ok',
      type: 'object',
      properties: {
        id: { type: 'string' },
        name: { type: 'string' },
        description: { type: 'string' },
        price: { type: 'number' },
        restaurant: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            name: { type: 'string' },
          },
        },
      },
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

export const productGet: FastifySchema = {
  description: 'list 10 products',
  summary: 'list products',
  tags: ['product'],
  response: {
    200: {
      description: 'Ok',
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          name: { type: 'string' },
          description: { type: 'string' },
          price: { type: 'number' },
          restaurant: {
            type: 'object',
            properties: {
              id: { type: 'string' },
              name: { type: 'string' },
            },
          },
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
