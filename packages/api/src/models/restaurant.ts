import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import {
  Restaurant,
  IRestaurantRepository,
  IRestaurantModel,
} from '@t/restaurant';
import { RestaurantAlreadyExistsError } from '@errors/errors';
import { hashPassword } from '@utils/utils';

export class RestaurantModels implements IRestaurantModel {
  public id: string;
  public name: string;
  public email: string;
  public address: string;
  public phoneNumber: string;
  public unHashedPassword: string;
  private createdAt: string;
  private passwordHash: string;

  constructor(private restaurantRepository: IRestaurantRepository) {}

  async create() {
    const restaurant = await this.restaurantRepository.findByEmail(this.email);

    if (restaurant) {
      throw new RestaurantAlreadyExistsError();
    }

    this.createdAt = format(new Date(), 'yyyy/MM/dd HH:mm:ss', {
      locale: ptBR,
    });

    this.passwordHash = await hashPassword(this.unHashedPassword);

    const createdRestaurant = await this.restaurantRepository.create({
      name: this.name,
      email: this.email,
      address: this.address,
      createdAt: this.createdAt,
      phoneNumber: this.phoneNumber,
      passwordHash: this.passwordHash,
    });

    return createdRestaurant;
  }

  async findById(id: Restaurant['id']) {
    const restaurant = await this.restaurantRepository.findById(id);

    return restaurant;
  }
  async findProducts(id: Restaurant['id']) {
    const products = await this.restaurantRepository.findProducts(id);

    return products;
  }
}
