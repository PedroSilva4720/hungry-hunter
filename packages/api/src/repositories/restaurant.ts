import { prisma } from '../prisma/prisma';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export class RestaurantRepository {
  public _id?: string;
  public _name: string;
  public _email: string;
  public _address: string;
  public _phoneNumber: string;
  private _createdAt: string;
  private _passwordHash: string;

  set id(id: string) {
    this._id = id;
  }
  set name(name: string) {
    this._name = name;
  }
  set address(address: string) {
    this._address = address;
  }
  set phoneNumber(phoneNumber: string) {
    this._phoneNumber = phoneNumber;
  }

  set email(email: string) {
    this.email = email;
  }

  async create() {
    this._createdAt = format(new Date(), 'yyyy/mm/dd HH:MM:ss', {
      locale: ptBR,
    });
    await prisma.restaurant.create({
      data: {
        name: this._name,
        email: this._email,
        address: this._address,
        createdAt: this._createdAt,
        phoneNumber: this._phoneNumber,
        passwordHash: this._passwordHash,
      },
    });
  }

  async findById(id: string) {
    const restaurant = await prisma.restaurant.findUnique({
      where: {
        id,
      },
    });
    return restaurant;
  }
}
