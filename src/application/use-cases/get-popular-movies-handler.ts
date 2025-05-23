import { Movie } from '../../domain/entities/movie.entity';
import { GetPopularMovies } from '../../domain/use-cases/get-popular-movies';

export class GetPopularMoviesHandler {
  constructor(private readonly getPopularMovies: GetPopularMovies) {}

  async execute(): Promise<Movie[]> {
    return this.getPopularMovies.execute();
  }
}
