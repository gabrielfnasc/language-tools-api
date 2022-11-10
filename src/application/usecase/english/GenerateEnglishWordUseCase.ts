import { RandomWord } from "../../random-words/RandomWord";
import { Usecase } from "../UseCase";

export type OutputGenerateEnglishWordDto = {
  word: string;
};

export class GenerateEnglishRandomWordUseCase
  implements Usecase<void, OutputGenerateEnglishWordDto>
{
  constructor(private readonly randomWord: RandomWord) {}
  async execute(): Promise<OutputGenerateEnglishWordDto> {
    const word = await this.randomWord.generate();

    return { word };
  }
}
