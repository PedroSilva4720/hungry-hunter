import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import {
  Restaurant,
  IRestaurantRepository,
  IRestaurantModel,
} from '@t/restaurant';
import { hash } from 'argon2';

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
    this.createdAt = format(new Date(), 'yyyy/MM/dd HH:mm:ss', {
      locale: ptBR,
    });

    this.passwordHash = await hash(this.unHashedPassword);

    this.restaurantRepository.create({
      name: this.name,
      email: this.email,
      address: this.address,
      createdAt: this.createdAt,
      phoneNumber: this.phoneNumber,
      passwordHash: this.passwordHash,
    });
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
