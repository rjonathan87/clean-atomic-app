import React from 'react';
import Image from 'next/image';
import { Movie } from '../../../domain/entities/movie.entity';
import Link from 'next/link';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : '/placeholder.png'; // Asegúrate de tener un placeholder

  return (
    <Link href={`/movies/${movie.id}`} className="block rounded-md overflow-hidden shadow-md">
      <div className="relative w-full h-56">
        <Image src={imageUrl} alt={movie.title} layout="fill" objectFit="cover" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{movie.title}</h3>
        <p className="text-sm text-gray-500">{movie.release_date}</p>
      </div>
    </Link>
  );
};

export default MovieCard;