import express, { Request, Response } from "express";

export class MarketRoutes {
  public route() {
    const router = express.Router();
    router.get("/", (req: Request, res: Response) => {
      console.log("MarketRoutes");
      res.send("MarketRoutes");
    });

    return router;
  }
}
