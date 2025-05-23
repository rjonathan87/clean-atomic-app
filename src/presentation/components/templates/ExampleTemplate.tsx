import ExampleList from '../organisms/ExampleList';
import { Example } from '@/domain/entities/example.entity'; // Importa la interfaz Example

interface ExampleTemplateProps {
  publicExamples: Example[];
  privateExamples: Example[];
}

const ExampleTemplate: React.FC<ExampleTemplateProps> = ({ publicExamples, privateExamples }) => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Datos Públicos</h2>
      <ExampleList examples={publicExamples} />
      <h2 className="text-2xl font-bold mt-8 mb-4">Datos Privados</h2>
      <ExampleList examples={privateExamples} />
    </div>
  );
};

export default ExampleTemplate;