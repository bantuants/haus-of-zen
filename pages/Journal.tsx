import React from 'react';
import { Article } from '../types';
import { Link } from 'react-router-dom';

const Journal: React.FC = () => {
  const articles: Article[] = [
    {
      id: '1',
      title: 'Architecture of the Womb',
      subtitle: 'Understanding Fibroids and Holistic Support.',
      category: 'Health',
      image: 'https://images.unsplash.com/photo-1544367563-12123d832e34?q=80&w=1000&auto=format&fit=crop',
      date: 'Oct 12, 2023'
    },
    {
      id: '2',
      title: 'Quiet in the Chaos',
      subtitle: '5 Teas to Ground Your Nervous System in LA Traffic.',
      category: 'Lifestyle',
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1000&auto=format&fit=crop',
      date: 'Oct 08, 2023'
    },
    {
      id: '3',
      title: 'The Safe List',
      subtitle: 'What You Can Actually Drink When You’re Expecting.',
      category: 'Motherhood',
      image: 'https://images.unsplash.com/photo-1555243896-c709bfa0b564?q=80&w=1000&auto=format&fit=crop',
      date: 'Sep 24, 2023'
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-12">
        <h1 className="mb-20 text-center font-serif text-6xl md:text-8xl text-stone-900">The Journal</h1>
        
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {articles.map((article) => (
            <Link to="#" key={article.id} className="group cursor-pointer">
              <div className="mb-6 aspect-[4/3] w-full overflow-hidden bg-stone-200">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center space-x-4 mb-3">
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-sage-700">{article.category}</span>
                <span className="font-sans text-[10px] text-stone-400 uppercase tracking-widest">{article.date}</span>
              </div>
              <h2 className="mb-3 font-serif text-2xl text-stone-900 transition-colors group-hover:text-stone-600">{article.title}</h2>
              <p className="font-sans text-sm leading-relaxed text-stone-600">{article.subtitle}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journal;
