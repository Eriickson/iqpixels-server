import express from "express";
import { constrollers } from "../controllers";

export class LoginRoutes {
  public route() {
    const router = express.Router();
    router.post("/register", constrollers.login.registerUser);
    router.post("/signin", constrollers.login.signIn);

    return router;
  }
}
