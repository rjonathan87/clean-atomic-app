import React from 'react';
import { Example } from '@/domain/entities/example.entity';
import Card from '../molecules/Card';

interface ExampleListProps {
  examples: Example[];
}

const ExampleList: React.FC<ExampleListProps> = ({ examples }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {examples.map((example) => (
        <Card key={example.id} title={example.title} description={example.description} />
      ))}
    </div>
  );
};

export default ExampleList;
