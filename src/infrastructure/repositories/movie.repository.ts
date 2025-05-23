import { Movie } from '../../domain/entities/movie.entity';
import { MovieRepository } from '../../domain/interfaces/movie-repository.interface';
import publicApi from '../api/public-api';
import { MovieData } from '../../domain/interfaces/movie.interface';

interface PopularMoviesResponse {
  results: MovieData[];
}

export class TMDBMovieRepository implements MovieRepository {
  async getPopular(): Promise<Movie[]> {
    try {
      const response = await publicApi.get<PopularMoviesResponse>('/movie/popular');
      return response.data.results.map(movieData => ({
        id: movieData.id,
        title: movieData.title,
        overview: movieData.overview,
        poster_path: movieData.poster_path,
        release_date: movieData.release_date,
        vote_average: movieData.vote_average,
      }));
    } catch (error) {
      console.error('Error fetching popular movies:', error);
      return [];
    }
  }

  async getPopularMovies(): Promise<Movie[]> {
    return this.getPopular();
  }

  async getById(id: number): Promise<Movie> {
    try {
      console.log('Fetching movie with ID:', id);
      const response = await publicApi.get<MovieData>(`/movie/${id}`);
      if (!response.data) {
        throw new Error(`Movie with ID ${id} not found`);
      }
      return {
        id: response.data.id,
        title: response.data.title,
        overview: response.data.overview,
        poster_path: response.data.poster_path,
        release_date: response.data.release_date,
        vote_average: response.data.vote_average,
      };
    } catch (error) {
      console.error(`Error fetching movie with ID ${id}:`, error);
      throw error;
    }
  }

  async getMovieDetails(movieId: number): Promise<Movie> {
    try {
      console.log('Fetching movie details with ID:', movieId);
      const response = await publicApi.get<MovieData>(`/movie/${movieId}`);
      if (!response.data) {
        throw new Error(`Movie details with ID ${movieId} not found`);
      }
      return {
        id: response.data.id,
        title: response.data.title,
        overview: response.data.overview,
        poster_path: response.data.poster_path,
        release_date: response.data.release_date,
        vote_average: response.data.vote_average,
      };
    } catch (error) {
      console.error(`Error fetching movie details with ID ${movieId}:`, error);
      throw error;
    }
  }

  async searchMovies(): Promise<Movie[]> {
    return [];
  }
}
