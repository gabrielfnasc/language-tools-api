import { Router, Express } from "express";
import random from "../routes/random";

export default (app: Express): void => {
  const router = Router();
  app.use("/language", router);

  random(router);
};
