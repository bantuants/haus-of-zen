import React from 'react';

const Foundation: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="grid grid-cols-1 md:grid-cols-2">
        
        {/* Image Side */}
        <div className="relative h-[50vh] md:h-screen bg-stone-200">
          <img 
            src="https://images.unsplash.com/photo-1629213076774-c782782b79a8?q=80&w=2574&auto=format&fit=crop" 
            alt="Founder Portrait" 
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content Side */}
        <div className="flex flex-col justify-center px-8 py-20 md:px-24 md:py-0 bg-stone-100">
          <span className="mb-4 font-sans text-xs font-bold uppercase tracking-[0.2em] text-sage-700">The Story</span>
          <h1 className="mb-8 font-serif text-5xl md:text-6xl text-stone-900">We Are the <br/>Architects.</h1>
          
          <div className="space-y-6 font-serif text-lg leading-relaxed text-stone-700">
            <p>
              Haus of Zen was born from a need for space. We noticed that for People of Color, the wellness industry often felt either exclusionary or overwhelming.
            </p>
            <p>
              We wanted to strip away the noise. We wanted to create a Zen experience that honors the melanin in our skin and the rhythms of our wombs.
            </p>
            <p>
              We are building a community where health is not a luxury trend, but a return to home.
            </p>
          </div>

          <div className="mt-12">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Signature_sample.svg/1200px-Signature_sample.svg.png" 
              alt="Signature" 
              className="h-16 opacity-50"
            />
            <p className="mt-2 font-sans text-xs uppercase tracking-widest text-stone-500">Founder & Herbalist</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foundation;
