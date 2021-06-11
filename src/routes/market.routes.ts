import express, { Request, Response } from "express";
import { constrollers } from "../controllers";

export class MarketRoutes {
  public route() {
    const router = express.Router();
    router.get("/", constrollers.market.getMarket);
    router.get("/search", constrollers.market.searchMarket);
    router.get("/:id", constrollers.market.getByIdMarket);
    router.post("/", constrollers.market.createMarket);
    router.put("/:id", constrollers.market.editMarket);
    router.delete("/:id", constrollers.market.deleteMarket);

    return router;
  }
}
