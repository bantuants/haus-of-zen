import React from 'react';
import Button from '../components/Button';
import { Calendar, Clock, FileText } from 'lucide-react';

const Blueprint: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50">
       {/* Hero */}
       <div className="relative h-[60vh] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1542359560-a292d3df243d?q=80&w=2669&auto=format&fit=crop" 
            alt="Consultation notes" 
            className="h-full w-full object-cover brightness-90"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-stone-900/30 text-center text-stone-50">
            <h1 className="mb-4 font-serif text-5xl md:text-6xl">The Blueprint</h1>
            <p className="max-w-xl font-sans text-lg tracking-wide">
              You Have the Blueprint. We Help You Read It.
            </p>
          </div>
       </div>

       <div className="mx-auto max-w-4xl px-6 py-20 text-center">
         <p className="font-serif text-2xl leading-relaxed text-stone-800">
           "Generic wellness advice ignores your unique history. In our 'Blueprinting Sessions,' we meet you virtually to discuss your cycle, your stress load, and your fertility goals. We then design a custom herbal regimen just for you."
         </p>
       </div>

       <div className="mx-auto max-w-6xl px-6 pb-32">
         <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
           
           {/* Card 1 */}
           <div className="border border-stone-200 bg-white p-12 transition-shadow hover:shadow-xl">
              <div className="mb-6 inline-block bg-sage-100 p-3 rounded-full text-sage-800">
                <Clock size={24} strokeWidth={1} />
              </div>
              <h3 className="mb-2 font-serif text-3xl text-stone-900">The Quick Audit</h3>
              <p className="mb-6 font-sans text-xs font-bold uppercase tracking-widest text-stone-400">20 Minutes • Virtual</p>
              <p className="mb-8 text-stone-600">
                Unsure where to start? This focused session answers the question: "Which tea is right for me?" tailored to your current symptoms.
              </p>
              <ul className="mb-8 space-y-3 text-sm text-stone-600">
                <li className="flex items-center"><FileText size={16} className="mr-3 text-sage-600"/> Symptom Check-in</li>
                <li className="flex items-center"><FileText size={16} className="mr-3 text-sage-600"/> Product Recommendation</li>
                <li className="flex items-center"><FileText size={16} className="mr-3 text-sage-600"/> Free with $75+ purchase</li>
              </ul>
              <Button variant="outline" fullWidth>Book Session ($25)</Button>
           </div>

           {/* Card 2 */}
           <div className="border border-stone-200 bg-stone-900 p-12 text-stone-50 transition-shadow hover:shadow-xl">
              <div className="mb-6 inline-block bg-stone-800 p-3 rounded-full text-stone-300">
                <Calendar size={24} strokeWidth={1} />
              </div>
              <h3 className="mb-2 font-serif text-3xl text-stone-50">The Deep Dive</h3>
              <p className="mb-6 font-sans text-xs font-bold uppercase tracking-widest text-stone-400">60 Minutes • Virtual</p>
              <p className="mb-8 text-stone-300">
                A comprehensive review of your hormonal history, lifestyle architecture, and nutritional needs.
              </p>
              <ul className="mb-8 space-y-3 text-sm text-stone-300">
                <li className="flex items-center"><FileText size={16} className="mr-3 text-sage-400"/> Detailed Health History Review</li>
                <li className="flex items-center"><FileText size={16} className="mr-3 text-sage-400"/> Custom Herbal Protocol PDF</li>
                <li className="flex items-center"><FileText size={16} className="mr-3 text-sage-400"/> 10% Off Apothecary Code</li>
              </ul>
              <Button variant="secondary" fullWidth>Book Session ($120)</Button>
           </div>

         </div>
       </div>
    </div>
  );
};

export default Blueprint;
