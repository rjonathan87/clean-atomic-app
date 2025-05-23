'use client';
import { useQuery } from '@tanstack/react-query';
import { GetPopularMoviesHandler } from '@/application/use-cases/get-popular-movies-handler';
import { GetPopularMovies } from '@/domain/use-cases/get-popular-movies';
import MovieListTemplate from '@/presentation/components/templates/MovieListTemplate';
import Loading from '@/app/loading';
import Error from '@/app/error';
import { TMDBMovieRepository } from '@/infrastructure/repositories/movie.repository';

const movieRepository = new TMDBMovieRepository();
const getPopularMoviesUseCase = new GetPopularMovies(movieRepository);
const getPopularMoviesHandler: GetPopularMoviesHandler = new GetPopularMoviesHandler(getPopularMoviesUseCase);

export default function HomePage() {
  const { data: popularMovies, isLoading, isError, error } = useQuery({
    queryKey: ['popularMovies'],
    queryFn: () => getPopularMoviesHandler.execute(),
  });

  const handleReset = () => {
    // Lógica para reiniciar el estado o reintentar la consulta
    window.location.reload();
  };


  if (isLoading) return <Loading />;
  if (isError) return <Error error={error} reset={handleReset} />;


  return (
    <>
      <MovieListTemplate title="Películas Populares" movies={popularMovies || []} />
    </>
  );
}
