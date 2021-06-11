import { ProductRepository } from "../repositories";
import { IProduct } from "../entities";
import { Product, Market } from "../models";

export class ProductProvider implements ProductRepository {
  async getProducts() {
    try {
      const productsFound: IProduct = await Product.find();
      return productsFound;
    } catch (err) {
      throw new Error(err);
    }
  }
  async getProductById(id: string) {
    try {
      const productFound: IProduct = await Product.findById(id);
      return productFound;
    } catch (err) {
      throw new Error(err);
    }
  }
  async createProduct(productData: Omit<IProduct, "id">) {
    const newProduct = new Product(productData);

    try {
      const productFound: IProduct = await newProduct.save();
      await Market.findByIdAndUpdate(productData.market, { $push: { products: newProduct._id } });

      return productFound;
    } catch (err) {
      throw new Error(err);
    }
  }

  async updateProduct(id: string, dataToUpdate: Partial<IProduct>) {
    try {
      const productFound: IProduct = await Product.findById(id);

      if (!productFound) throw new Error("Producto no encontrado");

      const productUpdated = await Product.findByIdAndUpdate(
        id,
        { $set: dataToUpdate },
        { new: true },
      );

      return productUpdated;
    } catch (err) {
      throw new Error(err);
    }
  }
  async deleteProduct(id: string) {
    try {
      await Product.findByIdAndRemove(id);
    } catch (err) {
      throw new Error(err);
    }
  }
}
