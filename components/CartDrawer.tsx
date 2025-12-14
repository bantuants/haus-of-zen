import React from 'react';
import { useCart } from '../context/CartContext';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import Button from './Button';

const CartDrawer: React.FC = () => {
  const { isCartOpen, toggleCart, cart, cartTotal, cartCount, removeFromCart, updateQuantity, checkout } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-stone-900/20 backdrop-blur-sm transition-opacity"
        onClick={toggleCart}
      />

      {/* Drawer */}
      <div className="relative h-full w-full max-w-md bg-stone-50 shadow-2xl transition-transform duration-500 flex flex-col">
        <div className="flex items-center justify-between border-b border-stone-200 p-6">
          <h2 className="font-serif text-2xl italic">Your Ritual</h2>
          <button onClick={toggleCart} className="text-stone-500 hover:text-stone-900">
            <X size={24} strokeWidth={1} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center space-y-4 text-stone-400">
              <ShoppingBag size={48} strokeWidth={1} />
              <p className="font-sans text-sm tracking-wide">Your vessel is empty.</p>
              <Button variant="text" onClick={toggleCart}>Return to Apothecary</Button>
            </div>
          ) : (
            <div className="space-y-8">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="h-24 w-20 flex-shrink-0 overflow-hidden bg-stone-200">
                    <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col justify-between py-1">
                    <div>
                      <div className="flex justify-between">
                        <h3 className="font-serif text-lg">{item.title}</h3>
                        <span className="font-sans text-sm">${(parseFloat(item.price) * item.quantity).toFixed(2)}</span>
                      </div>
                      <p className="text-xs text-stone-500 uppercase tracking-wide">${item.price} each</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="flex h-6 w-6 items-center justify-center rounded-full border border-stone-300 text-stone-500 hover:border-stone-900 hover:text-stone-900"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-xs text-stone-900">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="flex h-6 w-6 items-center justify-center rounded-full border border-stone-300 text-stone-500 hover:border-stone-900 hover:text-stone-900"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-xs text-stone-400 underline hover:text-stone-900"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="border-t border-stone-200 p-6 bg-stone-100">
             <div className="mb-2 flex items-center justify-center text-xs text-sage-700">
                <span>Free Shipping on Orders over $75</span>
            </div>
            <div className="mb-6 flex justify-between font-serif text-xl">
              <span>Subtotal ({cartCount} items)</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <Button fullWidth onClick={checkout}>
              Proceed to Checkout
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
