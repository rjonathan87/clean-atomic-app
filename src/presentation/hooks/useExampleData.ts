// Este hook podría encapsular la lógica de obtención de datos si no usáramos React Query directamente en la página.
// En este ejemplo, React Query maneja la lógica, pero podrías crear hooks más específicos aquí.
import { useQuery } from '@tanstack/react-query';
import { publicApi } from '@/infrastructure/api/public-api';
import { GetExampleData } from '@/domain/use-cases/get-example-data';
import { GetExampleDataHandler } from '@/application/use-cases/get-example-data-handler';

const getExampleDataUseCaseHook = new GetExampleData(publicApi);
const getExampleDataHandlerHook = new GetExampleDataHandler(getExampleDataUseCaseHook);

export const usePublicExampleData = () => {
  return useQuery({
    queryKey: ['publicExamplesHook'],
    queryFn: () => getExampleDataHandlerHook.handlePublicData(),
  });
};

// Podrías crear un hook similar para los datos privados si fuera necesario
