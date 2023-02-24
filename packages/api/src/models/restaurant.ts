import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { RestaurantRepository } from '../repositories/restaurant';
import { Restaurant } from '../types/restaurant';
import { hash } from 'argon2';

export class RestaurantModels {
  public id: string;
  public name: string;
  public email: string;
  public address: string;
  public phoneNumber: string;
  public unHashedPassword: string;
  private createdAt: string;
  private passwordHash: string;

  async create(): Promise<void> {
    this.createdAt = format(new Date(), 'yyyy/mm/dd HH:MM:ss', {
      locale: ptBR,
    });

    this.passwordHash = await hash(this.unHashedPassword);

    const Repository = new RestaurantRepository();

    Repository.create({
      name: this.name,
      email: this.email,
      address: this.address,
      createdAt: this.createdAt,
      phoneNumber: this.phoneNumber,
      passwordHash: this.passwordHash,
    });
  }

  async findById({ id }: Pick<Restaurant, 'id'>): Promise<Restaurant | null> {
    const Repository = new RestaurantRepository();

    const restaurant = await Repository.findById(id);

    return restaurant;
  }
}
