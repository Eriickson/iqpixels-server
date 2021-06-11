import { MarketRepository } from "../repositories";
import { IMarket } from "../entities";
import { Market, User } from "../models";

export class MarketProvider implements MarketRepository {
  async createMarket(marketData: Omit<IMarket, "id">) {
    const newMarket = new Market(marketData);

    try {
      const marketSaved: IMarket = await newMarket.save();
      await User.findOneAndUpdate(
        { _id: marketData.owner },
        {
          $push: { markets: marketSaved.id },
        },
      );

      return marketSaved;
    } catch (err) {
      throw new Error(err);
    }
  }
}
