import { FastifySchema } from 'fastify';

export const userPost: FastifySchema = {
  description: 'create a new user',
  summary: 'create user',
  tags: ['user'],
  body: {
    type: 'object',
    properties: {
      name: { type: 'string' },
      email: { type: 'string' },
      unHashedPassword: { type: 'string' },
    },
  },
  response: {
    201: {
      description: 'Ok',
      type: 'null',
    },
    401: {
      description: 'Bad credentials error',
      type: 'string',
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

export const userGet: FastifySchema = {
  description: 'User Login',
  summary: 'login',
  tags: ['user'],
  headers: {
    Authorization: {
      type: 'string',
      description: 'basic auth with user:password in base64',
    },
  },
  response: {
    200: {
      description: 'Login done.',
      type: 'object',
      properties: {
        token: {
          type: 'string',
          example:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
        },
      },
    },
    400: {
      description: 'Invalid login props.',
      type: 'object',
      properties: {
        message: {
          type: 'string',
          example: 'Dados de login inválidos, tente novamente.',
        },
      },
    },
    500: {
      description: 'Internal Server Error',
      type: 'string',
      example: 'Erro interno, por favor tente novamente.',
    },
  },
};

export const userGetAuth: FastifySchema = {
  description: 'Auth jwt test',
  summary: 'verify if token is valid [deprecated]',
  tags: ['user'],
  headers: {
    Authorization: {
      type: 'string',
      description: 'Bearer token',
    },
  },
  response: {
    200: {
      description: 'Ok',
      type: 'object',
      properties: {
        id: {
          type: 'string',
          example: '123abc',
        },
        email: {
          type: 'string',
          example: 'john@doe.com',
        },
        name: {
          type: 'string',
          example: 'John Doe',
        },
      },
    },
    400: {
      description: 'Invalid login props.',
      type: 'object',
      properties: {
        message: {
          type: 'string',
          example: 'Dados de login inválidos, tente novamente.',
        },
      },
    },
  },
};
