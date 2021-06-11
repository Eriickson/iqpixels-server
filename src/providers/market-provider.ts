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
  async getMarketById(id: string) {
    try {
      const marketFound: IMarket = await Market.findById(id);
      return marketFound;
    } catch (err) {
      throw new Error(err);
    }
  }
  async getMarkets() {
    try {
      const marketFound: IMarket = await Market.find();
      return marketFound;
    } catch (err) {
      throw new Error(err);
    }
  }
  async updateMarket(id: string, dataToUpdate: Partial<IMarket>) {
    try {
      const marketFound: IMarket = await Market.findById(id);

      if (!marketFound) throw new Error("Marketo no encontrado");

      const marketUpdated = await Market.findByIdAndUpdate(
        id,
        { $set: dataToUpdate },
        { new: true },
      );

      return marketUpdated;
    } catch (err) {
      throw new Error(err);
    }
  }
  async deleteMarket(id: string) {
    try {
      await Market.findByIdAndRemove(id);
    } catch (err) {
      throw new Error(err);
    }
  }
}
