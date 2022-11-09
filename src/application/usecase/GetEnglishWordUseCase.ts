import { Usecase } from "./UseCase";

export type OutputGetEnglishWordDto = {
  word: string;
};

export class GetEnglishRandomWordUseCase
  implements Usecase<void, OutputGetEnglishWordDto>
{
  constructor() {}
  async execute(): Promise<OutputGetEnglishWordDto> {}
}
