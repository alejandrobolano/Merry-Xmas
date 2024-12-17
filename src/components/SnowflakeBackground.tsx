import React from 'react';

export const SnowflakeBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-30">
      {Array.from({ length: 50 }).map((_, i) => (
        <div
          key={i}
          className="absolute animate-fall text-white text-2xl md:text-3xl opacity-80"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 3 + 2}s`,
            filter: 'drop-shadow(0 0 2px rgba(255,255,255,0.5))',
          }}
        >
          ❄
        </div>
      ))}
    </div>
  );
}