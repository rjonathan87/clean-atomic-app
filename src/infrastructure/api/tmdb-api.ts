import axios from 'axios';
import { MovieRepository } from '@/domain/interfaces/movie.repository';
import { Movie } from '@/domain/entities/movie.entity';



class TMDBApi implements MovieRepository {
  private apiKey: string = process.env.NEXT_PUBLIC_TMDB_API_KEY || '';
  private baseURL: string = process.env.NEXT_PUBLIC_TMDB_API_URL || '';


  async getPopularMovies(): Promise<Movie[]> {
    const response = await axios.get(`${this.baseURL}/movie/popular?api_key=${this.apiKey}&language=es-MX`);
    return response.data.results;
  }

  async getById(id: number): Promise<Movie> {
    const response = await axios.get(`${this.baseURL}/movie/${id}?api_key=${this.apiKey}&language=es-MX`);
    return response.data;
  }

  async searchMovies(query: string): Promise<Movie[]> {
    const response = await axios.get(`${this.baseURL}/search/movie?api_key=${this.apiKey}&language=es-MX&query=${query}`);
    return response.data.results;
  }

  async getMovieDetails(movieId: number): Promise<Movie> {
    const response = await axios.get(`${this.baseURL}/movie/${movieId}?api_key=${this.apiKey}&language=es-MX`);
    return response.data;
  }
}

export const tmdbApi = new TMDBApi();
