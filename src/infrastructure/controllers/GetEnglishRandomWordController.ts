import { HttpResponse } from "../http/presentation/controllers/helpers/Http";
import { serverError } from "../http/presentation/controllers/helpers/HttpHelper";
import { BaseController } from "./BaseController";

export class GetEnglishRandomWordController implements BaseController {
  constructor(private readonly usecase : ) {}
  async handle(): Promise<HttpResponse> {
    try {
    } catch (error) {
      return serverError(error as Error);
    }
  }
}
