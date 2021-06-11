import { Request, Response } from "express";
import { MarketProvider } from "../providers";

const marketProvider = new MarketProvider();

export class MarketController {
  async getMarket(req: Request, res: Response) {}
  async searchMarket(req: Request, res: Response) {}
  async getByIdMarket(req: Request, res: Response) {}
  async createMarket(req: Request, res: Response) {
    const { name, direction } = req.body;

    const marketSaved = await marketProvider.createMarket({
      name,
      direction,
      owner: req.user.id,
    });

    res.status(201).json({ market: marketSaved });
  }
  async editMarket(req: Request, res: Response) {}
  async deleteMarket(req: Request, res: Response) {}
}
