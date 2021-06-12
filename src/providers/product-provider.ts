import { ProductRepository } from "../repositories";
import { IProduct } from "../entities";
import { Product, Market } from "../models";
import { Types } from "mongoose";

export class ProductProvider implements ProductRepository {
  async getProducts(idMarket: string) {
    try {
      console.log(idMarket);

      const productsFound: IProduct = await Product.find({ market: idMarket });
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
      await Market.findByIdAndUpdate(productData.market, {
        $push: { products: newProduct._id },
      });

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
        { new: true }
      );

      return productUpdated;
    } catch (err) {
      throw new Error(err);
    }
  }
  async deleteProduct(idToDelete: string, idMarket: string) {
    console.log({ idMarket, idToDelete });

    try {
      await Product.findByIdAndRemove(idToDelete);
      await Market.findByIdAndUpdate(
        { _id: idMarket },
        {
          $pull: {
            products: idToDelete,
          },
        }
      );
    } catch (err) {
      throw new Error(err);
    }
  }
}
