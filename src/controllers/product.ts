import { Request, Response } from "express";
import { ProductProvider } from "../providers";

const productProvider = new ProductProvider();

export class ProductController {
  async createProduct(req: Request, res: Response) {
    const { name, price, category, stock } = req.body;
    const productSaved = await productProvider.createProduct({
      name,
      price,
      category,
      stock,
      market: req.params.idMarket,
      image: "imagen",
    });

    res.json({ product: productSaved });
  }
}
