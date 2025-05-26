import { GetPopularMoviesHandler } from '@/application/use-cases/get-popular-movies-handler';
import { GetPopularMovies } from '@/domain/use-cases/get-popular-movies';
import MovieListTemplate from '@/presentation/components/templates/MovieListTemplate';
import { TMDBMovieRepository } from '@/infrastructure/repositories/movie.repository';

const movieRepository = new TMDBMovieRepository();
const getPopularMoviesUseCase = new GetPopularMovies(movieRepository);
const getPopularMoviesHandler: GetPopularMoviesHandler = new GetPopularMoviesHandler(getPopularMoviesUseCase);

export default async function HomePage() {
  const popularMovies = await getPopularMoviesHandler.execute();

  return (
    <>
      <MovieListTemplate title="Películas Populares" movies={popularMovies || []} />
    </>
  );
}
