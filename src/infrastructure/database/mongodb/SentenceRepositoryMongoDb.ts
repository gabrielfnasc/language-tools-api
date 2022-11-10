import { SentenceRepository } from "../../../application/repositories/SentenceRepository";
import { InputSaveSentenceDto } from "../../../application/usecase/SaveSentenceUseCase";
import { BaseMongoRepository } from "./BaseMongoRepository";

export class SentenceRepositoryMongoDb
  extends BaseMongoRepository
  implements SentenceRepository
{
  collection(): string {
    return "sentences";
  }
  async save(data: InputSaveSentenceDto): Promise<void> {
    await this.getCollection.insertOne(data);
  }
}
