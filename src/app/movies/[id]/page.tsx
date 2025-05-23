'use client';
import React from 'react';
import { Movie } from '../../../domain/entities/movie.entity';
import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { TMDBMovieRepository } from '@/infrastructure/repositories/movie.repository';
import { GetMovieDetails } from '@/application/use-cases/get-movie-details';
import MovieDetailsTemplate from '@/presentation/components/templates/movie-details-template';

const MovieDetailsPage = () => {
const { id } = useParams<{ id: string }>();
  const movieIdNumber = parseInt(id, 10);
  const isValidMovieId = !isNaN(movieIdNumber);

  const movieRepository = new TMDBMovieRepository();
  const getMovieDetailsUseCase = new GetMovieDetails(movieRepository);

  const { data: movie, isLoading, isError } = useQuery<Movie | null>({
    queryKey: ['movieDetails', movieIdNumber],
    queryFn: async () => await getMovieDetailsUseCase.execute(movieIdNumber),
    enabled: isValidMovieId,
  });

  if (!isValidMovieId) {
    return <div>ID de película inválido.</div>;
  }

  if (isLoading) {
    return <div>Cargando detalles de la película...</div>;
  }

  if (isError) {
    return <div>Error al cargar los detalles de la película.</div>;
  }

  if (!movie) {
    return <div>Película no encontrada.</div>;
  }

  return (
    <MovieDetailsTemplate movie={movie} />
  );
};

export default MovieDetailsPage;
