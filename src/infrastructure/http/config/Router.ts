import { Router, Express } from "express";
import EnglishRoute from "../routes/EnglishRoute";
import SentenceRoute from "../routes/SentenceRoute";

export default (app: Express): void => {
  const router = Router();
  app.use("/language", router);

  EnglishRoute(router);
  SentenceRoute(router);
};
