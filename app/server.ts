import "express-async-errors";
import { PORT } from "./config/env";
import config from "./mikro-orm.config";

// Routers
import userRouter from "./routes/user.route";

// Middlewares
import { errorHandler } from "./middlewares/error-handler.middleware";

import http from "http";
import { StatusCodes } from "http-status-codes";
import express, { Express } from "express";
import { EntityManager, MikroORM, RequestContext } from "@mikro-orm/postgresql";

export const DI = {} as {
  server: http.Server;
  orm: MikroORM;
  em: EntityManager;
};

export const app: Express = express();
const port = PORT || 3000;

export const init = (async () => {
  DI.orm = await MikroORM.init(config);
  DI.em = DI.orm.em;

  app.use(express.json());
  app.use((_req, _res, next) => RequestContext.create(DI.orm.em, next));

  app.get("/", (_req, res) => {
    res.json({
      message: "MikroORM express TS example!",
    });
  });
  app.use("/api/user", userRouter);
  app.use((_req, res) => {
    res.status(StatusCodes.NOT_FOUND).json({ message: "No route found" });
  });

  app.use(errorHandler);

  DI.server = app.listen(port, () => {
    console.log(`MikroORM express TS example started at http://localhost:${port}`);
  });
})();
