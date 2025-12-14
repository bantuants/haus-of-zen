import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center transition-all duration-300 font-sans tracking-[0.15em] uppercase text-xs font-medium focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-stone-900 text-stone-50 hover:bg-stone-700',
    secondary: 'bg-sage-200 text-stone-900 hover:bg-sage-300',
    outline: 'border border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-stone-50',
    text: 'bg-transparent text-stone-900 hover:text-stone-600 underline-offset-4 hover:underline'
  };

  const sizes = {
    sm: 'px-4 py-2 text-[10px]',
    md: 'px-8 py-4',
    lg: 'px-10 py-5 text-sm',
  };

  const width = fullWidth ? 'w-full' : '';

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${width} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
