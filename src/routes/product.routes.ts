import express, { Request, Response } from "express";

export class ProductRoutes {
  public route() {
    const router = express.Router();
    router.get("/", (req: Request, res: Response) => {
      console.log("ProductRoutes");
      res.send("ProductRoutes");
    });

    return router;
  }
}
