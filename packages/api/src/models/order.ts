import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { IOrderModel, IOrderRepository, Order } from '@t/order';

export class OrderModels implements IOrderModel {
  public id: string;
  public userId: Order['userId'];
  public productId: Order['productId'];
  public deliveredAt?: string;
  public createdAt: string;

  constructor(private orderRepository: IOrderRepository) {}

  async create() {
    this.createdAt = format(new Date(), 'yyyy/MM/dd HH:mm:ss', {
      locale: ptBR,
    });

    const createdOrder = await this.orderRepository.create({
      createdAt: this.createdAt,
      productId: this.productId,
      userId: this.userId,
    });

    return createdOrder;
  }
}
