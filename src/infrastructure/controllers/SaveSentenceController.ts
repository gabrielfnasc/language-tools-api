import { SaveSentenceUseCase } from "../../application/usecase/SaveSentenceUseCase";
import { Sentence } from "../../domain/entities/Sentence";
import { Validator } from "../../domain/validator/validator";
import { HttpResponse } from "../http/presentation/controllers/helpers/Http";
import {
  ok,
  serverError,
} from "../http/presentation/controllers/helpers/HttpHelper";
import { BaseController } from "./BaseController";

export type SaveSentenceControllerRequestDto = {
  content: string;
  translation: string;
};

export class SaveSentenceController implements BaseController {
  constructor(
    private readonly validator: Validator,
    private readonly usecase: SaveSentenceUseCase
  ) {}
  async handle(
    request: SaveSentenceControllerRequestDto
  ): Promise<HttpResponse> {
    try {
      this.validator.validate(request);
      const { content, translation } = request;
      const sentence: Sentence = {
        content,
        translation,
        createdAt: new Date(),
      };
      await this.usecase.execute({
        sentence,
      });
      return ok("Sentence saved successfully!");
    } catch (error) {
      return serverError(error as Error);
    }
  }
}
