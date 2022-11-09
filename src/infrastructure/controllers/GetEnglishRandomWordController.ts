import { GetEnglishRandomWordUseCase } from "../../application/usecase/GetEnglishWordUseCase";
import { HttpResponse } from "../http/presentation/controllers/helpers/Http";
import {
  ok,
  serverError,
} from "../http/presentation/controllers/helpers/HttpHelper";
import { BaseController } from "./BaseController";

export class GetEnglishRandomWordController implements BaseController {
  constructor(private readonly usecase: GetEnglishRandomWordUseCase) {}
  async handle(): Promise<HttpResponse> {
    try {
      const output = await this.usecase.execute();
      return ok(output);
    } catch (error) {
      return serverError(error as Error);
    }
  }
}
