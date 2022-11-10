import { GenerateEnglishRandomWordUseCase } from "../../application/usecase/GenerateEnglishWordUseCase";
import { HttpResponse } from "../http/presentation/controllers/helpers/Http";
import {
  ok,
  serverError,
} from "../http/presentation/controllers/helpers/HttpHelper";
import { BaseController } from "./BaseController";

export class GenerateEnglishRandomWordController implements BaseController {
  constructor(private readonly usecase: GenerateEnglishRandomWordUseCase) {}
  async handle(): Promise<HttpResponse> {
    try {
      const output = await this.usecase.execute();
      return ok(output);
    } catch (error) {
      return serverError(error as Error);
    }
  }
}
