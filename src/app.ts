require("dotenv").config({});
import express from "express";
import cors from "cors";
import { envs, startMongoose, Swagger } from "./configs";
import { LoginRoutes, MarketRoutes, ProductRoutes, UserRoutes } from "./routes";
import { authenticateToken } from "./middleware";

export class App {
  public app: express.Application;
  private loginRoutes = new LoginRoutes().route();
  private marketRoutes = new MarketRoutes().route();
  private productRoutes = new ProductRoutes().route();
  private userRoutes = new UserRoutes().route();
  private port: number;
  private swagger = new Swagger();

  constructor() {
    this.app = express();
    this.port = envs.PORT;
    this.config();
    this.configRoutes();
  }

  private config() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cors());
    startMongoose(envs.URI_MONGODB);
  }

  private configRoutes() {
    this.app.use("/api/login", this.loginRoutes);
    this.app.use("/api/market", authenticateToken, this.marketRoutes);
    this.app.use("/api/product", authenticateToken, this.productRoutes);
    this.app.use("/api/user", authenticateToken, this.userRoutes);
    this.app.use(this.swagger.route, this.swagger.serve, this.swagger.specs);
  }

  public listen() {
    this.app.listen(envs.PORT, () => {
      console.log(`Listening on http://localhost:${this.port}`);
    });
  }
}
