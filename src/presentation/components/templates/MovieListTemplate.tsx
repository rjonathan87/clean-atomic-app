import React from 'react';
import { Movie } from '@/domain/entities/movie.entity';
import MovieList from '../organisms/MovieList';

interface MovieListTemplateProps {
  title: string;
  movies: Movie[];
}

const MovieListTemplate: React.FC<MovieListTemplateProps> = ({ title, movies }) => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <MovieList movies={movies} />
    </div>
  );
};

export default MovieListTemplate;