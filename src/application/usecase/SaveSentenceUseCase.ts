import { Usecase } from "./UseCase";

export type InputSaveSentenceDto = {
  sentence: string;
};

export class SaveSentenceUseCase
  implements Usecase<InputSaveSentenceDto, void>
{
  async execute(data: InputSaveSentenceDto): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
