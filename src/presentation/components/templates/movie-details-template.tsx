'use client';
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';

import { Movie } from '@/domain/entities/movie.entity';

interface MovieDetailsTemplateProps {
  movie: Movie;
}

const MovieDetailsTemplate: React.FC<MovieDetailsTemplateProps> = ({ movie }) => {
  const router = useRouter();
  const imageUrl = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : '/imgNotFound.png';

  const handleGoBack = () => {
    router.push('/movies');
  };

  return (
    <div className="container mx-auto py-8">
      <button
        onClick={handleGoBack}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Regresar a la lista de películas
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          {movie.poster_path ? (
            <Image
              src={imageUrl}
              alt={movie.title}
              width={500}
              height={750}
              className="w-full rounded-md shadow-md"
            />
          ) : (
            <Image
              src="/imgNotFound.png"
              alt="Imagen no encontrada"
              width={200}
              height={300}
              className="w-full rounded-md shadow-md object-contain bg-gray-300 flex items-center justify-center text-gray-500"
            />
          )}
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">{movie.title}</h2>
          <p className="text-gray-600 mb-2">Fecha de lanzamiento: {movie.release_date}</p>
          <p className="text-gray-600 mb-4">Puntuación: {movie.vote_average}</p>
          <h3 className="text-xl font-semibold mb-2">Sinopsis</h3>
          <p className="text-gray-800">{movie.overview}</p>
          {/* Aquí podrías agregar más detalles */}
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsTemplate;
