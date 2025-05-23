import React from 'react';
import { Movie } from '@/domain/entities/movie.entity';
import Link from 'next/link';
import Image from 'next/image';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const imageUrl = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : '/no-poster.png'; // Asegúrate de tener una imagen por defecto

  return (
    <Link href={`/movies/${movie.id}`} className="bg-white shadow-md rounded-md overflow-hidden">
      <Image
        src={imageUrl}
        alt={movie.title}
        width={500}
        height={750}
        priority
        style={{
          width: '100%',
          height: 'auto',
        }}
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{movie.title}</h3>
        <p className="text-gray-600 text-sm mt-1">
          {movie.release_date ? new Date(movie.release_date).toLocaleDateString() : 'N/A'}
        </p>
      </div>
    </Link>
  );
};

export default MovieCard;
