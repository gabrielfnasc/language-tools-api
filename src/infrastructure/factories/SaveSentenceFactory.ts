import { BaseController } from "../controllers/BaseController";
import { SaveSentenceController } from "../controllers/SaveSentenceController";

export class SaveSentenceFactory {
  static build(): BaseController {
const validator = new 

    return new SaveSentenceController();
  }
}
