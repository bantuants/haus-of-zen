import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';
import { fetchProducts } from '../services/shopify';

const Apothecary: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const shopifyProducts = await fetchProducts();
        // Transform Shopify products to our Product interface
        const transformedProducts: Product[] = shopifyProducts.map(product => ({
          id: product.id,
          title: product.title,
          description: product.description,
          price: product.priceRange.minVariantPrice.amount,
          compareAtPrice: product.compareAtPriceRange?.minVariantPrice.amount,
          images: product.images.edges.map(edge => ({
            url: edge.node.url,
            altText: edge.node.altText,
          })),
          variants: product.variants.edges.map(edge => edge.node),
          tags: product.tags,
          productType: product.productType,
          vendor: product.vendor,
        }));
        setProducts(transformedProducts);
      } catch (err) {
        setError('Failed to load products. Please try again later.');
        console.error('Error loading products:', err);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const categories = ['All', ...Array.from(new Set(products.map(p => p.productType)))];

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.productType === selectedCategory);

  if (loading) {
    return (
      <div className="min-h-screen bg-stone-50">
        <div className="bg-sage-50 py-20 text-center">
          <h1 className="mb-4 font-serif text-5xl text-stone-900">The Apothecary</h1>
          <p className="font-sans text-sm uppercase tracking-widest text-stone-500">Curated Botanicals for the Modern Vessel</p>
        </div>
        <div className="flex items-center justify-center py-16">
          <div className="text-center">
            <div className="mb-4 h-8 w-8 animate-spin rounded-full border-2 border-stone-300 border-t-stone-900 mx-auto"></div>
            <p className="font-sans text-sm text-stone-500">Loading products...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-stone-50">
        <div className="bg-sage-50 py-20 text-center">
          <h1 className="mb-4 font-serif text-5xl text-stone-900">The Apothecary</h1>
          <p className="font-sans text-sm uppercase tracking-widest text-stone-500">Curated Botanicals for the Modern Vessel</p>
        </div>
        <div className="flex items-center justify-center py-16">
          <div className="text-center">
            <p className="font-sans text-sm text-red-600">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="bg-sage-50 py-20 text-center">
        <h1 className="mb-4 font-serif text-5xl text-stone-900">The Apothecary</h1>
        <p className="font-sans text-sm uppercase tracking-widest text-stone-500">Curated Botanicals for the Modern Vessel</p>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12">
        <div className="mb-12 flex items-center justify-between border-b border-stone-200 pb-4">
          <div className="flex space-x-8">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`font-sans text-sm uppercase tracking-widest ${
                  selectedCategory === category
                    ? 'font-bold text-stone-900'
                    : 'text-stone-500 hover:text-stone-900'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <span className="font-sans text-xs text-stone-400">{filteredProducts.length} Products</span>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Apothecary;
