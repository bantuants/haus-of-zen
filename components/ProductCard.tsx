import React from 'react';
import { Product } from '../types';
import Button from './Button';
import { useCart } from '../context/CartContext';
import { Plus } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (product.variants.length > 0) {
      const variant = product.variants[0]; // For simplicity, use first variant
      addToCart({
        id: product.id,
        title: product.title,
        price: variant.price,
        image: product.images[0]?.url || '',
        variantId: variant.id,
      });
    }
  };

  const price = product.variants[0]?.price || '0';
  const compareAtPrice = product.variants[0]?.compareAtPrice;

  return (
    <div className="group flex flex-col space-y-4">
      <div className="relative aspect-[4/5] overflow-hidden bg-stone-200">
        <img
          src={product.images[0]?.url || ''}
          alt={product.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <Button
            variant="primary"
            fullWidth
            onClick={handleAddToCart}
            className="shadow-lg"
          >
            Add to Cart — ${price}
          </Button>
        </div>
      </div>

      <div className="text-center">
        <h3 className="font-serif text-2xl text-stone-900">{product.title}</h3>
        <p className="mt-1 font-sans text-xs uppercase tracking-widest text-stone-500">{product.productType}</p>
        <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-stone-600">{product.description}</p>
        <div className="mt-2 flex items-center justify-center space-x-2">
          <span className="font-serif text-lg text-stone-900">${price}</span>
          {compareAtPrice && (
            <span className="text-sm text-stone-500 line-through">${compareAtPrice}</span>
          )}
        </div>
      </div>

      {/* Mobile only add button since hover doesn't work well on touch */}
      <div className="block md:hidden">
         <Button
            variant="outline"
            fullWidth
            size="sm"
            onClick={handleAddToCart}
          >
            Add to Cart — ${price}
          </Button>
      </div>
    </div>
  );
};

export default ProductCard;
