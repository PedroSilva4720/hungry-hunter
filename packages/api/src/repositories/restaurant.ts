import { prisma } from '../prisma/prisma';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Restaurant } from '../types/restaurant';

export class RestaurantRepository {
  async create({
    name,
    email,
    address,
    phoneNumber,
    passwordHash,
    createdAt,
  }: Omit<Restaurant, 'id' | 'product'>): Promise<void> {
    await prisma.restaurant.create({
      data: {
        name,
        email,
        address,
        createdAt,
        phoneNumber,
        passwordHash,
      },
    });
  }

  async findById(id: string): Promise<Restaurant | null> {
    const restaurant = await prisma.restaurant.findUnique({
      where: {
        id,
      },
    });
    return restaurant;
  }
}
