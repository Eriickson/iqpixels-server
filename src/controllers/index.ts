import { LoginController } from "./login";
import { MarketController } from "./market";
import { ProductController } from "./product";

export const constrollers = {
  login: new LoginController(),
  product: new ProductController(),
  market: new MarketController(),
};
