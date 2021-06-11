import { IProduct } from "../entities";

export interface ProductRepository {
  getProducts(): Promise<IProduct>;
  getProductById(id: string): Promise<IProduct>;
  createProduct(newProduct: Omit<IProduct, "id">): Promise<IProduct>;
  updateProduct(id: string, dataToUpdate: Partial<IProduct>): Promise<IProduct>;
  deleteProduct(id: string): Promise<void>;
}
