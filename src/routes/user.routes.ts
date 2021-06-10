import express, { Request, Response } from "express";

export class UserRoutes {
  public route() {
    const router = express.Router();
    router.get("/", (req: Request, res: Response) => {
      console.log("UserRoutes");
      res.send("UserRoutes");
    });

    return router;
  }
}
