import { ProductRepository } from "../repositories";
import { IProduct } from "../entities";
import { Product, Market } from "../models";

export class ProductProvider implements ProductRepository {
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
}
