'use client';
import { TMDBMovieRepository } from '../../infrastructure/repositories/movie.repository';
import { Movie } from '../../domain/entities/movie.entity';
import { useQuery } from '@tanstack/react-query';
import { GetPopularMovies } from '@/domain/use-cases/get-popular-movies';
import MoviesListTemplate from '@/presentation/components/templates/movies-list-template';

const PopularMoviesPage = () => {
  const movieRepository = new TMDBMovieRepository();
  const getPopularMoviesUseCase = new GetPopularMovies(movieRepository);

  const { data: popularMovies, isLoading, isError } = useQuery<Movie[]>({
    queryKey: ['popularMovies'],
    queryFn: async () => await getPopularMoviesUseCase.execute(),
  });

  if (isLoading) {
    return <div>Cargando películas...</div>;
  }

  if (isError) {
    return <div>Error al cargar las películas.</div>;
  }

  return (
    <MoviesListTemplate movies={popularMovies || []} />
  );
};

export default PopularMoviesPage;