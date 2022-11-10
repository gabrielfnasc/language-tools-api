import { Sentence } from "../../domain/entities/Sentence";
import { SentenceRepository } from "../repositories/SentenceRepository";
import { Usecase } from "./UseCase";

export type InputSaveSentenceDto = {
  sentence: Sentence;
};

export class SaveSentenceUseCase
  implements Usecase<InputSaveSentenceDto, void>
{
  constructor(private readonly repository: SentenceRepository) {}
  async execute(data: InputSaveSentenceDto): Promise<void> {
    await this.repository.save(data);
  }
}
