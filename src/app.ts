require("dotenv").config({});
import express from "express";
import { envs,startMongoose } from "./configs";
import { LoginRoutes, MarketRoutes, ProductRoutes, UserRoutes } from "./routes";

export class App {
  public app: express.Application;
  private loginRoutes = new LoginRoutes().route();
  private marketRoutes = new MarketRoutes().route();
  private productRoutes = new ProductRoutes().route();
  private userRoutes = new UserRoutes().route();
  private port: number;

  constructor() {
    this.app = express();
    this.port = envs.PORT;
    this.config();
    this.configRoutes();
  }

  private config() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    startMongoose(envs.URI_MONGODB)
  }

  private configRoutes() {
    this.app.use("/api/login", this.loginRoutes);
    this.app.use("/api/market", this.marketRoutes);
    this.app.use("/api/product", this.productRoutes);
    this.app.use("/api/user", this.userRoutes);
  }

  public listen() {
    this.app.listen(envs.PORT, () => {
      console.log(`Listening on http://localhost:${this.port}`);
    });
  }
}
