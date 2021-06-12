import express, { Request, Response } from "express";

/**
 * @swagger
 * /user:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder users
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
*/

export class UserRoutes {
  public route() {
    const router = express.Router();
    router.get("/", (req: Request, res: Response) => {
      res.send("UserRoutes");
    });

    return router;
  }
}
