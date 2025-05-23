import { Movie } from '../entities/movie.entity';

export interface MovieRepository {
  getPopularMovies(): Promise<Movie[]>;
  searchMovies(query: string): Promise<Movie[]>;
  getMovieDetails(movieId: number): Promise<Movie>; // El tipo 'any' es temporal, definiremos uno más específico
  getById(id: number): Promise<Movie>;
}
