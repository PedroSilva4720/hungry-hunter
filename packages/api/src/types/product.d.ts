import { Prisma, product } from '@prisma/client';
import { Restaurant } from './restaurant';

export type Product = product;

export type CreateProductInput = Prisma.productCreateInput;

export type ReturnProductList = {
  id: string;
  name: string;
  description: string;
  price: number;
  restaurant: {
    id: string;
    name: string;
  };
};

export interface IProductRepository {
  create(
    data: CreateProductInput,
    restaurantId: Restaurant['id']
  ): Promise<void>;
  findById(id: Product['id']): Promise<Product>;
  listProducts(): Promise<ReturnProductList[]>;
}

export interface IProductModel {
  id: string;
  name: string;
  description: string;
  price: number;
  create(): Promise<void>;
  findById(id: Product['id']): Promise<Product>;
  listProducts(): Promise<ReturnProductList[]>;
}

export interface IProductController {
  create(req, rep): Promise<void>;
  findById(req, rep): Promise<{ product: Product }>;
  listProducts(req, rep): Promise<{ products: ReturnProductList[] }>;
}
