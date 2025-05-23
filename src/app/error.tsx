'use client';

import React, { useEffect } from 'react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const Error: React.FC<ErrorProps> = ({ error, reset }) => {
  useEffect(() => {
    // Opcional: Registra el error en un servicio de logging
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h2 className="text-2xl font-bold text-red-500 mb-4">¡Algo salió mal!</h2>
      <p className="text-gray-700 mb-4">{error.message}</p>
      <button
        onClick={() => reset()}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Intentar de nuevo
      </button>
    </div>
  );
};

export default Error;