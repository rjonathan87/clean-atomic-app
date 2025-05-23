import React from 'react';
import MovieList from '../organisms/movie-list';
import { Movie } from '@/domain/entities/movie.entity';

interface MoviesListTemplateProps {
  movies: Movie[];
}

const MoviesListTemplate: React.FC<MoviesListTemplateProps> = ({ movies }) => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Películas Populares</h2>
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesListTemplate;