
import { Example } from '../entities/example.entity';
import { ExampleRepository } from '../interfaces/example.repository';

export class GetExampleData {
  private exampleRepository: ExampleRepository;

  constructor(exampleRepository: ExampleRepository) {
    this.exampleRepository = exampleRepository;
  }

  async executePublic(): Promise<Example[]> {
    return this.exampleRepository.fetchPublicData();
  }

  async executePrivate(): Promise<Example[]> {
    return this.exampleRepository.fetchPrivateData();
  }
}