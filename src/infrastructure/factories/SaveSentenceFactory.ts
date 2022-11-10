import { SaveSentenceUseCase } from "../../application/usecase/SaveSentenceUseCase";
import { ValidatorComposite } from "../../application/validator/ValidatorComposite";
import { ValidatorRequiredParam } from "../../application/validator/ValidatorRequiredParam";
import { BaseController } from "../controllers/BaseController";
import { SaveSentenceController } from "../controllers/SaveSentenceController";
import { SentenceRepositoryMongoDb } from "../database/mongodb/SentenceRepositoryMongoDb";

export class SaveSentenceFactory {
  static build(): BaseController {
    const validatorRequest = new ValidatorComposite([
      new ValidatorRequiredParam("content"),
      new ValidatorRequiredParam("translation"),
    ]);

    const repository = new SentenceRepositoryMongoDb();

    const usecase = new SaveSentenceUseCase(repository);

    return new SaveSentenceController(validatorRequest, usecase);
  }
}
