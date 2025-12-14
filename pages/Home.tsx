import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { Feather, ShieldCheck, Baby } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden bg-stone-900">
        {/* Simulating Video Background with a High Quality Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=2521&auto=format&fit=crop" 
            alt="Tea Ritual" 
            className="h-full w-full object-cover object-center brightness-75"
          />
          <div className="absolute inset-0 bg-stone-900/60"></div>
        </div>
        
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-stone-50">
          <span className="mb-4 font-sans text-xs font-medium uppercase tracking-[0.3em] text-sage-100">Botanical Minimalist</span>
          <h1 className="mb-6 font-serif text-5xl font-medium leading-tight md:text-7xl lg:text-8xl">
            The Architecture <br/><span className="italic font-light">of</span> Inner Peace.
          </h1>
          <p className="mb-10 max-w-lg font-sans text-sm font-light tracking-wide text-stone-200 md:text-base">
            Organic, ancestral teas and botanicals designed for the modern vessel.
          </p>
          <Link to="/shop">
            <Button variant="secondary" size="lg">Enter the Apothecary</Button>
          </Link>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-stone-100 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-8 font-serif text-4xl text-stone-900 md:text-5xl">
            Your Body is a Haus. <br/><span className="italic text-stone-600">Make it a Sanctuary.</span>
          </h2>
          <div className="mb-8 h-px w-24 bg-stone-300 mx-auto"></div>
          <p className="font-sans text-base leading-loose text-stone-600 md:text-lg">
            In a city that never stops, we invite you to pause. Haus of Zen is a digital sanctuary 
            designed for the specific needs of women of color and open to all vessels. 
            We blend the precision of wellness architecture with the softness of ancestral healing. 
            No clutter. No confusion. Just the herbs you need to build a strong foundation.
          </p>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="px-6 py-12 md:px-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { 
              title: "Liquid Zen", 
              subtitle: "Functional Teas for Cycle & Mood", 
              img: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?q=80&w=1000&auto=format&fit=crop",
              link: "/shop"
            },
            { 
              title: "Structural Support", 
              subtitle: "Oils & Soaks for Skin & Womb", 
              img: "https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?q=80&w=1000&auto=format&fit=crop",
              link: "/shop"
            },
            { 
              title: "The Blueprint", 
              subtitle: "1:1 Virtual Herbal Guidance", 
              img: "https://images.unsplash.com/photo-1629196911514-cfd8d628b24e?q=80&w=1000&auto=format&fit=crop",
              link: "/blueprint"
            }
          ].map((collection, idx) => (
            <Link to={collection.link} key={idx} className="group relative block aspect-[3/4] overflow-hidden md:aspect-[4/5]">
              <img 
                src={collection.img} 
                alt={collection.title} 
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent opacity-80 transition-opacity group-hover:opacity-90"></div>
              <div className="absolute bottom-8 left-8 text-stone-50">
                <h3 className="font-serif text-3xl">{collection.title}</h3>
                <p className="font-sans text-xs uppercase tracking-widest opacity-80 group-hover:opacity-100">{collection.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Trust Badges */}
      <section className="border-t border-stone-200 bg-stone-50 py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-center space-y-12 md:flex-row md:space-x-12 md:space-y-0">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-sage-100 text-sage-800">
                <Feather size={28} strokeWidth={1} />
              </div>
              <h4 className="mb-2 font-serif text-xl">Rooted in Tradition</h4>
              <p className="max-w-xs font-sans text-sm text-stone-500">Ancestral wisdom passed down through generations of healers.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-sage-100 text-sage-800">
                <ShieldCheck size={28} strokeWidth={1} />
              </div>
              <h4 className="mb-2 font-serif text-xl">Verified by Science</h4>
              <p className="max-w-xs font-sans text-sm text-stone-500">Evidence-based botanical selection for safety and efficacy.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-sage-100 text-sage-800">
                <Baby size={28} strokeWidth={1} />
              </div>
              <h4 className="mb-2 font-serif text-xl">Maternity Safe</h4>
              <p className="max-w-xs font-sans text-sm text-stone-500">Clear labeling for pregnancy and breastfeeding support.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
