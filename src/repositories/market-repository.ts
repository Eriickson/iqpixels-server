import { IMarket } from "../entities";

export interface MarketRepository {
  createMarket(newMarket: Omit<IMarket, "id">): Promise<IMarket>;
}
