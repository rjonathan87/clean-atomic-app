
import { Example } from '../entities/example.entity';

export interface ExampleRepository {
  fetchPublicData(): Promise<Example[]>;
  fetchPrivateData(): Promise<Example[]>;
}