import { RandomWord } from "../application/random-words/RandomWord";

export class Rword implements RandomWord {
  generate(): Promise<string> {}
}
