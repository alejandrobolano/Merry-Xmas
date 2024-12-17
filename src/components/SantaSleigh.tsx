import React from 'react';

export const SantaSleigh: React.FC = () => {
  return (
    <div className="fixed bottom-4 w-full overflow-hidden pointer-events-none z-20">
      <div className="santa-container w-48 md:w-72 lg:w-96 aspect-[2/1] animate-fly-santa">
        <div className="relative w-full h-full">
          {/* Santa and Sleigh with trailing effect */}
          <div className="absolute inset-0 text-6xl md:text-8xl lg:text-9xl filter drop-shadow-lg">
            🎅🛷
            <span className="absolute -left-4 -top-2 opacity-30">🎅🛷</span>
            <span className="absolute -left-8 -top-4 opacity-10">🎅🛷</span>
          </div>
          {/* Multiple Reindeer */}
          <div className="absolute -left-8 top-1/2 -translate-y-1/2 flex">
            <span className="text-4xl md:text-6xl lg:text-7xl animate-bounce-slight inline-block">🦌</span>
            <span className="text-4xl md:text-6xl lg:text-7xl animate-bounce-slight inline-block -ml-2" style={{ animationDelay: '0.2s' }}>🦌</span>
            <span className="text-4xl md:text-6xl lg:text-7xl animate-bounce-slight inline-block -ml-2" style={{ animationDelay: '0.4s' }}>🦌</span>
          </div>
          {/* Magic trail */}
          <div className="absolute top-1/2 -left-12 text-3xl md:text-4xl animate-bounce-slight">✨</div>
        </div>
      </div>
    </div>
  );
};