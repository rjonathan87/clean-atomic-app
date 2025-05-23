import { MovieRepository } from '@/domain/interfaces/movie-repository.interface';
import { Movie } from '@/domain/entities/movie.entity';

export class GetMovieDetails {
  private movieRepository: MovieRepository;

  constructor(movieRepository: MovieRepository) {
    this.movieRepository = movieRepository;
  }

  async execute(movieId: number): Promise<Movie> {
    try {
      const movie = await this.movieRepository.getById(movieId);
      if (!movie) {
        throw new Error(`Movie with ID ${movieId} not found`);
      }

      // Ensure release_date and vote_average are always present
      movie.release_date = movie.release_date || 'Unknown';
      movie.vote_average = movie.vote_average || 0;

      return movie;
    } catch (error: any) { // eslint-disable-line @typescript-eslint/no-explicit-any
      console.error(`Error fetching movie with ID ${movieId}:`, error.message);
      throw error;
    }
  }
}
