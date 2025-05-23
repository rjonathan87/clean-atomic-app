'use client';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { publicApi } from '@/infrastructure/api/public-api';
import { privateApi } from '@/infrastructure/api/private-api';
import { GetExampleData } from '@/domain/use-cases/get-example-data';
import { GetExampleDataHandler } from '@/application/use-cases/get-example-data-handler';
import ExampleTemplate from '@/presentation/components/templates/ExampleTemplate';
import Loading from '@/app/loading'; // Asegúrate de crear un componente de carga

const getExampleDataUseCase = new GetExampleData(publicApi);
const getExampleDataHandler = new GetExampleDataHandler(getExampleDataUseCase);
const getPrivateExampleDataUseCase = new GetExampleData(privateApi);
const getPrivateExampleDataHandler = new GetExampleDataHandler(getPrivateExampleDataUseCase);

const ExamplePage = () => {
  const { data: publicData, isLoading: isPublicLoading, isError: isPublicError } = useQuery({
    queryKey: ['publicExamples'],
    queryFn: () => getExampleDataHandler.handlePublicData(),
  });

  const { data: privateData, isLoading: isPrivateLoading, isError: isPrivateError } = useQuery({
    queryKey: ['privateExamples'],
    queryFn: () => getPrivateExampleDataHandler.handlePrivateData(),
  });

  if (isPublicLoading || isPrivateLoading) return <Loading />;
  if (isPublicError || isPrivateError) return <div>Error al cargar los datos</div>;

  return (
    <ExampleTemplate publicExamples={publicData || []} privateExamples={privateData || []} />
  );
};

export default ExamplePage;
