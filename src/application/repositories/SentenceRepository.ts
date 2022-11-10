import { InputSaveSentenceDto } from "../usecase/SaveSentenceUseCase";

export interface SentenceRepository {
  save(data: InputSaveSentenceDto): Promise<void>;
}
