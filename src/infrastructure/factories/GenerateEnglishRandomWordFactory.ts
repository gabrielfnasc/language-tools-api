import { GenerateEnglishRandomWordUseCase } from "../../application/usecase/GenerateEnglishWordUseCase";
import { Rword } from "../adapters/RwordAdapter";
import { BaseController } from "../controllers/BaseController";
import { GenerateEnglishRandomWordController } from "../controllers/GenerateEnglishRandomWordController";

export class GenerateEnglishRandomWordFactory {
  static build(): BaseController {
    const rword = new Rword();
    const usecase = new GenerateEnglishRandomWordUseCase(rword);
    return new GenerateEnglishRandomWordController(usecase);
  }
}
