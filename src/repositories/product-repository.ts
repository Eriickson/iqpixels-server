import { IProduct } from "../entities";

export interface ProductRepository {
  getProducts(idMarket: string): Promise<IProduct>;
  getProductById(id: string): Promise<IProduct>;
  createProduct(newProduct: Omit<IProduct, "id">): Promise<IProduct>;
  updateProduct(id: string, dataToUpdate: Partial<IProduct>): Promise<IProduct>;
  deleteProduct(id: string, idMarket: string): Promise<void>;
}
