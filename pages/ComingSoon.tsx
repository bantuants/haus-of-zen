import React from 'react';

const ComingSoon: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-6xl md:text-8xl font-serif text-stone-900 mb-6">
          Coming Soon
        </h1>
        <p className="text-xl md:text-2xl font-sans text-stone-600 mb-8">
          We're crafting something beautiful. Stay tuned for the launch of Haus of Zen.
        </p>
        <div className="w-24 h-1 bg-stone-300 mx-auto mb-8"></div>
        <p className="text-sm font-sans text-stone-500 uppercase tracking-widest">
          Redefining the Modern Apothecary
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;