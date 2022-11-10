import { Validator } from "../../domain/validator/validator";
import { HttpResponse } from "../http/presentation/controllers/helpers/Http";
import { serverError } from "../http/presentation/controllers/helpers/HttpHelper";
import { BaseController } from "./BaseController";

export type SaveSentenceControllerRequestDto = {
  sentence: string;
  translation: string;
};

export class SaveSentenceController implements BaseController {
  constructor(private readonly validator: Validator) {}
  async handle(request: SaveSentenceController): Promise<HttpResponse> {
    try {
      this.validator.validate(request);
    } catch (error) {
      return serverError(error as Error);
    }
  }
}
