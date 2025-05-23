import React, { ReactNode } from 'react';

interface CardProps {
  title: string;
  description?: string;
  children?: ReactNode;
}

const Card: React.FC<CardProps> = ({ title, description, children }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      {description && <p className="text-gray-600 mb-2">{description}</p>}
      {children}
    </div>
  );
};

export default Card;