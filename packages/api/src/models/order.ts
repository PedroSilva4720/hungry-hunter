import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { OrderRepositories } from '../repositories/order';
import { User } from '../types/user';

export class OrderModels {
  public id: string;
  public createdAt: string;
  public deliveredAt?: string;
  public user: User;
  public userId: string;
  public productId: string;

  async create(): Promise<void> {
    this.createdAt = format(new Date(), 'yyyy/MM/dd HH:mm:ss', {
      locale: ptBR,
    });

    const Repository = new OrderRepositories();

    await Repository.create({
      userId: this.userId,
      productId: this.productId,
      createdAt: this.createdAt,
    });
  }
}
