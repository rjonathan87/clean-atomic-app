import { Movie } from '../entities/movie.entity';

export interface MovieRepository {
  getPopular(): Promise<Movie[]>;
  getPopularMovies(): Promise<Movie[]>;
  getById(id: number): Promise<Movie>;
}
