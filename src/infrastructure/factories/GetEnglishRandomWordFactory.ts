import { GetEnglishRandomWordUseCase } from "../../application/usecase/GetEnglishWordUseCase";
import { Rword } from "../adapters/RwordAdapter";
import { BaseController } from "../controllers/BaseController";
import { GetEnglishRandomWordController } from "../controllers/GetEnglishRandomWordController";

export class GetEnglishRandomWordFactory {
  static build(): BaseController {
    const rword = new Rword();
    const usecase = new GetEnglishRandomWordUseCase(rword);
    return new GetEnglishRandomWordController(usecase);
  }
}
