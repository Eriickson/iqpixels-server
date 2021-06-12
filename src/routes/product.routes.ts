import express, { Request, Response } from "express";
import { constrollers } from "../controllers";

export class ProductRoutes {
  public route() {
    const router = express.Router();
    router.get("/:idMarket", constrollers.product.getProducts);
    // router.get("/search", constrollers.market.searchMarket);
    router.get("/:id", constrollers.product.getProductById);
    router.post("/:idMarket", constrollers.product.createProduct);
    router.put("/:id", constrollers.product.updateProduct);
    router.delete("/:idMarket/:id", constrollers.product.deleteProduct);
    return router;
  }
}
