import { RandomWord } from "../random-words/RandomWord";
import { Usecase } from "./UseCase";

export type OutputGetEnglishWordDto = {
  word: string;
};

export class GetEnglishRandomWordUseCase
  implements Usecase<void, OutputGetEnglishWordDto>
{
  constructor(private readonly randomWord: RandomWord) {}
  async execute(): Promise<OutputGetEnglishWordDto> {
    const word = await this.randomWord.generate();

    return { word };
  }
}
