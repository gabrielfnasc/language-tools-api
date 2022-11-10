import { Router } from "express";
import { GenerateEnglishRandomWordFactory } from "../../factories/GenerateEnglishRandomWordFactory";
import { ExpressRouterAdapter } from "../adapters/ExpressRouterAdapter";

export default (router: Router): void => {
  router.post(
    "/generateWord",
    ExpressRouterAdapter(GenerateEnglishRandomWordFactory.build())
  );
};
