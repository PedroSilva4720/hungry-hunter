import { FastifySchema } from 'fastify';

export const restaurantPost: FastifySchema = {
  description: 'Create a new restaurant',
  summary: 'create restaurant',
  tags: ['restaurant'],
  body: {
    type: 'object',
    properties: {
      name: { type: 'string' },
      email: { type: 'string' },
      address: { type: 'string' },
      phoneNumber: { type: 'string' },
      password: { type: 'string' },
    },
  },
  response: {
    201: {
      description: 'Ok',
      type: 'string',
    },
    401: {
      description: 'Bad credentials error',
      type: 'object',
      properties: { message: {} },
    },
    409: {
      description: 'Restaurant already exists error',
      type: 'object',
      properties: {
        message: {
          type: 'string',
          example: 'Restaurante já existe, por favor faça login.',
        },
      },
    },
    500: {
      description: 'Internal Server Error',
      type: 'object',
      properties: {
        message: {
          type: 'string',
          example:
            'Erro interno, por favor tente novamente dentro de alguns minutos.',
        },
      },
    },
  },
};
export const restaurantPostFind: FastifySchema = {
  description: 'Find a restaurant by its id',
  tags: ['restaurant'],
  summary: 'Find by id',
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
        restaurant: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            name: { type: 'string' },
            address: { type: 'string' },
            phoneNumber: { type: 'string' },
            email: { type: 'string' },
            createdAt: { type: 'string' },
          },
        },
      },
    },
    401: {
      description: 'Bad credentials error',
      type: 'object',
      properties: { message: {} },
    },
    500: {
      description: 'Internal Server Error',
      type: 'string',
      properties: {
        message: {
          type: 'string',
          example:
            'Erro interno, por favor tente novamente dentro de alguns minutos.',
        },
      },
    },
  },
};
export const restaurantGetId: FastifySchema = {
  description: 'list products of an specific restaurant',
  tags: ['restaurant'],
  summary: 'list products',
  params: {
    id: {
      type: 'string',
    },
  },
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
        },
      },
    },
    401: {
      description: 'Bad credentials error',
      type: 'object',
      properties: { message: {} },
    },
    500: {
      description: 'Internal Server Error',
      type: 'object',
      properties: {
        message: {
          type: 'string',
          example:
            'Erro interno, por favor tente novamente dentro de alguns minutos.',
        },
      },
    },
  },
};
