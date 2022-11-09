import { Usecase } from "./UseCase";

export type OutputGetEnglishWordDto = {
  word: string;
};

export class GetEnglishRandomWordUseCase
  implements Usecase<void, OutputGetEnglishWordDto>
{
  async execute(): Promise<OutputGetEnglishWordDto> {
    throw new Error("Method not implemented.");
  }
}
