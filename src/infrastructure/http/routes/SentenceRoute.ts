import { Router } from "express";
import { SaveSentenceFactory } from "../../factories/SaveSentenceFactory";
import { ExpressRouterAdapter } from "../adapters/ExpressRouterAdapter";

export default (route: Router): void => {
  route.post("/sentence", ExpressRouterAdapter(SaveSentenceFactory.build()));
};
