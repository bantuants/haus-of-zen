import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-50 pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
             <h3 className="font-serif text-2xl tracking-tight mb-6">HAUS <span className="italic font-light">of</span> ZEN</h3>
             <p className="font-sans text-stone-400 text-sm leading-relaxed mb-6">
               Organic, ancestral teas and botanicals for the modern vessel. Building a strong foundation for your wellness journey.
             </p>
             <div className="flex space-x-4">
               {['Instagram', 'TikTok', 'Pinterest'].map(social => (
                 <a key={social} href="#" className="text-xs uppercase tracking-widest text-stone-500 hover:text-stone-50 transition-colors">
                   {social}
                 </a>
               ))}
             </div>
          </div>
          
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-stone-400 mb-6">Explore</h4>
            <ul className="space-y-4">
              {['The Apothecary', 'The Blueprint', 'The Foundation', 'The Journal'].map(link => (
                <li key={link}>
                  <Link to="#" className="font-serif text-lg text-stone-300 hover:text-stone-50 hover:italic transition-all">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-stone-400 mb-6">Support</h4>
            <ul className="space-y-4">
              {['Shipping & Returns', 'FAQ', 'Contact Us', 'Wholesale'].map(link => (
                <li key={link}>
                  <Link to="#" className="font-sans text-sm text-stone-300 hover:text-stone-50 transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
             <h4 className="font-sans text-xs uppercase tracking-widest text-stone-400 mb-6">Stay Grounded</h4>
             <p className="text-stone-400 text-sm mb-4">Join our newsletter for wellness rituals and shop updates.</p>
             <div className="flex flex-col space-y-2">
               <input 
                 type="email" 
                 placeholder="Your email address" 
                 className="bg-stone-800 border-none px-4 py-3 text-sm text-stone-50 focus:ring-1 focus:ring-stone-500 placeholder-stone-600"
               />
               <Button variant="secondary" fullWidth size="sm">Subscribe</Button>
             </div>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-600 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Haus of Zen. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
