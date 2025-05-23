import { Movie } from '../entities/movie.entity';
import { MovieRepository } from '../interfaces/movie.repository';

export interface GetPopularMoviesUseCase {
  execute(): Promise<Movie[]>;
}

export class GetPopularMovies implements GetPopularMoviesUseCase {
  constructor(private readonly movieRepository: MovieRepository) {}

  async execute(): Promise<Movie[]> {
    return this.movieRepository.getPopularMovies();
  }
}
