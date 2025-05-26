'use client';
import React from 'react';
import MovieList from '../organisms/MovieList';
import { Movie } from '@/domain/entities/movie.entity';
import { useQuery } from '@tanstack/react-query';
import Loading from '@/app/loading';
import Error from '@/app/error';

interface MovieListTemplateProps {
  title: string;
  movies: Movie[]; // This will be the initial data
}

const MovieListTemplate: React.FC<MovieListTemplateProps> = ({ title, movies: initialMovies }) => {
  const { data: popularMovies, isLoading, isError, error } = useQuery({
    queryKey: ['popularMovies'],
    queryFn: () => {
      // This function will only be called on the client if the initialData is stale or not provided
      // In this case, we are providing initialData from the server, so this might not be needed
      // depending on the cache settings. However, it's good practice to have a fallback fetcher.
      // For simplicity, we'll just return the initial data here, but in a real app, you might
      // want to re-fetch if needed.
      return Promise.resolve(initialMovies);
    },
    initialData: initialMovies,
  });

  const handleReset = () => {
    // Lógica para reiniciar el estado o reintentar la consulta
    window.location.reload();
  };

  if (isLoading) return <Loading />;
  if (isError) return <Error error={error} reset={handleReset} />;

  return (
    <div>
      <h2>{title}</h2>
      <MovieList movies={popularMovies || []} />
    </div>
  );
};

export default MovieListTemplate;
