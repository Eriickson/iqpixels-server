import { Request, Response } from "express";
import { ProductProvider } from "../providers";

const productProvider = new ProductProvider();

export class ProductController {
  async getProducts(_: Request, res: Response) {
    const productFounds = await productProvider.getProducts();
    res.json({ products: productFounds });
  }
  async getProductById(req: Request, res: Response) {
    const productFound = await productProvider.getProductById(req.params.id);
    res.json({ product: productFound });
  }
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
  async updateProduct(req: Request, res: Response) {
    const { name, price, category, stock } = req.body;

    const productSaved = await productProvider.updateProduct(req.params.id, {
      name,
      price,
      category,
      stock,
    });

    res.json({ product: productSaved });
  }
  async deleteProduct(req: Request, res: Response) {
    await productProvider.deleteProduct(req.params.id);

    res.json({ message: "Producto Eliminado" });
  }
}
