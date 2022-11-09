import { RandomWord } from "../../application/random-words/RandomWord";
import { rword } from "rword";

export class Rword implements RandomWord {
  async generate(): Promise<string> {
    return rword.generate();
  }
}
