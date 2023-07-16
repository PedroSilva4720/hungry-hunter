import {
  IInternalServerError,
  IInvalidLoginPropsError,
  IRestaurantAlreadyExistsError,
  IUserAlreadyExistsError,
} from './errors.d';

export class InternalServerError extends Error implements IInternalServerError {
  constructor(
    public message: string = 'Erro interno, por favor tente novamente dentro de alguns minutos.'
  ) {
    super(message);
  }
}

export class RestaurantAlreadyExistsError
  extends Error
  implements IRestaurantAlreadyExistsError
{
  constructor(
    public message: string = 'Restaurante já existe, por favor faça login.'
  ) {
    super(message);
  }
}

export class UserAlreadyExistsError
  extends Error
  implements IUserAlreadyExistsError
{
  constructor(
    public message: string = 'Usuário já existe, por favor faça login.'
  ) {
    super(message);
  }
}

export class InvalidLoginPropsError
  extends Error
  implements IInvalidLoginPropsError
{
  constructor(
    public message: string = 'Dados de login inválidos, tente novamente.'
  ) {
    super(message);
  }
}

export class UnauthorizedError extends Error implements UnauthorizedError {
  constructor(public message: string = 'Unauthorized') {
    super(message);
  }
}
