import { Prisma, product } from '@prisma/client';

export type Product = product;

export type CreateProductInput = Prisma.productUncheckedCreateInput;

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
  create(data: CreateProductInput): Promise<Product>;
  findById(id: Product['id']): Promise<Product>;
  listProducts(): Promise<ReturnProductList[]>;
}

export interface IProductModel {
  id: string;
  name: string;
  description: string;
  price: number;
  create(): Promise<Product>;
  findById(id: Product['id']): Promise<Product>;
  listProducts(): Promise<ReturnProductList[]>;
}

export interface IProductController {
  create(req, rep): Promise<object>;
  findById(req, rep): Promise<{ product: Product }>;
  listProducts(req, rep): Promise<{ products: ReturnProductList[] }>;
}
