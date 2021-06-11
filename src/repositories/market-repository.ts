import { IMarket } from "../entities";

export interface MarketRepository {
  createMarket(newMarket: Omit<IMarket, "id">): Promise<IMarket>;
  getMarketById(id: string): Promise<IMarket>;
  updateMarket(id: string, dataToUpdate: Partial<IMarket>): Promise<IMarket>;
  deleteMarket(id: string): Promise<void>;
}
