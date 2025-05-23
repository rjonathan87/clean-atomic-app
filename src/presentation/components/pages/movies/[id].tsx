import React from 'react';
import { useRouter } from 'next/router';

const MovieDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Aquí puedes hacer una llamada a una API para obtener los detalles de la película
  // Ejemplo: fetch(`/api/movies/${id}`)

  return (
    <div>
      <h1>Detalles de la Película</h1>
      <p>ID de la película: {id}</p>
      {/* Aquí puedes renderizar más información sobre la película */}
    </div>
  );
};

export default MovieDetailsPage;
