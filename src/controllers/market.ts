import { Request, Response } from "express";
import { MarketProvider } from "../providers";

const marketProvider = new MarketProvider();

export class MarketController {
  async getMarkets(_: Request, res: Response) {
    const marketFounds = await marketProvider.getMarkets();

    res.json({ markets: marketFounds });
  }
  async getByIdMarket(req: Request, res: Response) {
    const marketFound = await marketProvider.getMarketById(req.params.id);

    res.json({ market: marketFound });
  }
  async searchMarket(req: Request, res: Response) {}
  async createMarket(req: Request, res: Response) {
    const { name, direction } = req.body;

    console.log(req.user);

    const marketSaved = await marketProvider.createMarket({
      name,
      direction,
      owner: req.user.id,
    });

    res.status(201).json({ market: marketSaved });
  }
  async updateMarket(req: Request, res: Response) {
    const { name, direction } = req.body;

    const marketUpdated = await marketProvider.updateMarket(req.params.id, {
      name,
      direction,
    });

    res.json({ market: marketUpdated });
  }
  async deleteMarket(req: Request, res: Response) {
    await marketProvider.deleteMarket(req.params.id);

    res.json({ message: "Bodega Eliminada" });
  }
}
