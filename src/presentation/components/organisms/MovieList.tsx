import React from 'react';
import { Movie } from '@/domain/entities/movie.entity';
import MovieCard from '../molecules/MovieCard';

interface MovieListProps {
  movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {movies.map((movie, i) => (
        <MovieCard key={movie.id} movie={movie} priority={i === 0} />
      ))}
    </div>
  );
};

export default MovieList;