import { GetExampleData } from '@/domain/use-cases/get-example-data';
import { Example } from '@/domain/entities/example.entity';

export class GetExampleDataHandler {
  private getExampleDataUseCase: GetExampleData;

  constructor(getExampleDataUseCase: GetExampleData) {
    this.getExampleDataUseCase = getExampleDataUseCase;
  }

  async handlePublicData(): Promise<Example[]> {
    // Aquí podríamos agregar lógica de negocio adicional antes o después de obtener los datos
    return this.getExampleDataUseCase.executePublic();
  }

  async handlePrivateData(): Promise<Example[]> {
    // Similar para los datos privados
    return this.getExampleDataUseCase.executePrivate();
  }
}