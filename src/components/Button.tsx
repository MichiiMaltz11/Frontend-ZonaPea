// src/components/Button.tsx
import React from 'react';
import { twMerge } from 'tailwind-merge';
import type { ButtonProps } from '../interface/Button';

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'solidPrimary', // Default razonable si no se especifica
  className = '',
  onClick,
  ...rest
}) => {
  // Estilos base comunes a la mayoría de los botones con fondo
  const baseStyles = 'py-2 px-6 rounded-full transition-colors duration-200 focus:outline-none  ';

  let variantStyles = '';

  switch (variant) {
    case 'authSignIn':
      variantStyles = 'bg-white text-[#3C3A4D] font-semibold hover:bg-gray-100';
      break;
    case 'authSignUp':
      variantStyles = 'text-white border border-white hover:bg-white hover:text-[#3C3A4D] focus:ring-white';
      break;
    case 'selectImage':
      variantStyles = 'bg-primary-yellow text-white border text-sm hover:bg-gray-600 focus:ring-gray-400 px-4 py-2';
      break;
    case 'editData':
      variantStyles = 'border border-primary-yellow text-primary-yellow hover:bg-primary-yellow hover:text-[#3C3A4D] font-semibold focus:ring-primary-yellow';
      break;
    case 'solidPrimary':
      variantStyles = 'bg-white border border-primary-yellow text-primary-yellow focus:ring-blue-500 hover:bg-primary-yellow hover:text-white ';
      break;
    case 'solidSecondary':
      variantStyles = 'bg-primary-yellow text-white focus:ring-gray-400 hover:bg-white hover:text-primary-yellow  border hover:border-primary-yellow ';
      break;
    case 'outline':
      variantStyles = 'border border-gray-400 text-gray-800 hover:bg-gray-100 focus:ring-gray-100'; 
      break;
    case 'textOnly':
      variantStyles = 'text-blue-500 hover:underline';
      break;
    default:
      variantStyles = 'bg-gray-500 text-white hover:bg-gray-600';
      break;
  }

  const mergeStyles = twMerge(baseStyles, variantStyles, className);

  return (
    <button
      onClick={onClick}
      className={mergeStyles}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;