import React from 'react';
import { TreePine, Sparkles, Gift } from 'lucide-react';

interface ChristmasGreetingProps {
  name: string;
  author: string;
}

export const ChristmasGreeting: React.FC<ChristmasGreetingProps> = ({ name, author }) => {
  return (
    <div className="text-center">
      <div className="flex justify-center items-center gap-4 mb-8">
        <TreePine className="w-12 h-12 md:w-16 md:h-16 text-green-600 animate-bounce-slight" />
        <Sparkles className="w-8 h-8 md:w-12 md:h-12 text-yellow-500" />
        <Gift className="w-10 h-10 md:w-14 md:h-14 text-red-500 animate-bounce-slight" />
      </div>
      <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-red-600 via-green-600 to-red-600 bg-clip-text text-transparent mb-6">
        ¡Feliz Navidad!
      </h1>
      <p className="text-2xl md:text-4xl text-green-700 mb-8">
        {name?.toLocaleUpperCase()}
      </p>
      <div className="space-y-4 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
        <strong>
          En esta mágica temporada navideña, quiero enviarte los mejores deseos para ti y tus seres queridos.
        </strong>
        <p>
          Que la magia de la Navidad llene tu hogar de alegría, tu corazón de amor y tu vida de momentos inolvidables.
          Espero que este tiempo festivo te traiga paz, prosperidad y muchas sonrisas.
        </p>
        <p className="text-xl md:text-2xl font-semibold mt-6 text-red-600">
          Con cariño, {author}
        </p>
      </div>
    </div>
  );
};