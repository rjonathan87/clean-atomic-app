import { Movie } from '../../domain/entities/movie.entity';
import { MovieRepository } from '../../domain/interfaces/movie-repository.interface';

export class GetPopularMovies {
  constructor(private readonly movieRepository: MovieRepository) {}

  async execute(): Promise<Movie[]> {
    return this.movieRepository.getPopular();
  }
}