import { IProduct } from "../entities";

export interface ProductRepository {
  createProduct(newProduct: Omit<IProduct, "id">): Promise<IProduct>;
}
