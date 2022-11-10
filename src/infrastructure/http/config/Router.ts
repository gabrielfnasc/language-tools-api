import { Router, Express } from "express";
import random from "../routes/EnglishRoute";

export default (app: Express): void => {
  const router = Router();
  app.use("/language", router);

  random(router);
};
