import * as express from "express";
import { IUser } from "../../src/entities";

declare global {
  namespace Express {
    interface Request {
      user: IUser;
      isAuth: boolean;
    }
  }
}
