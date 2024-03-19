import express, { NextFunction } from "express";
import { Request, Response } from "express";

import userRoutes from "./route/user.route";

const app = express();
const port = 8080;

app.use(express.json());

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

const routes = [userRoutes];

routes.forEach((route) => {
  app.use(route);
});

app.get("/", (_, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
