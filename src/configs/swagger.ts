import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { envs } from "./envs";

export class Swagger {
  swaggerDefinition = {
    openapi: "3.0.0",
    info: {
      title: "Express API for JSONPlaceholder",
      version: "1.0.0",
    },
    servers: [
      {
        url: `http://localhost:${envs.PORT}`,
        description: "Development server",
      },
    ],
  };

  options = {
    definition: this.swaggerDefinition,
    // Paths to files containing OpenAPI definitions
    apis: ["../routes/user.routes.ts"],
  };

  serve = swaggerUi.serve;
  specs = swaggerUi.setup(swaggerJsDoc(this.options), { explorer: true });
  route = "/api-docs";
}
