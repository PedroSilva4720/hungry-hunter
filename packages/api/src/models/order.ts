import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { User } from '@t/user';
import { IOrderModel, IOrderRepository } from '@t/order';
import { Product } from '@t/product';

export class OrderModels implements IOrderModel {
  public id: string;
  public createdAt: string;
  public deliveredAt?: string;
  public user: User;
  public userId: User['id'];
  public productId: Product['id'];

  constructor(private orderRepository: IOrderRepository) {}

  async create() {
    this.createdAt = format(new Date(), 'yyyy/MM/dd HH:mm:ss', {
      locale: ptBR,
    });

    await this.orderRepository.create(
      {
        createdAt: this.createdAt,
        productId: this.productId,
        user: {},
      },
      this.userId
    );
  }
}
