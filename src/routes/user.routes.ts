import express, { Request, Response } from "express";

export class UserRoutes {
  public route() {
    const router = express.Router();
    router.get("/", (req: Request, res: Response) => {
      res.send("UserRoutes");
    });

    return router;
  }
}
