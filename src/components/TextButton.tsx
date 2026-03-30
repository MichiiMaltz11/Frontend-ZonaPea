import React from 'react';
import type { TextButtonProps } from '../interface/TextButton';
import { Link } from 'react-router-dom'; // Importa Link
import { twMerge } from 'tailwind-merge'; // Para fusionar clases de Tailwind

const TextButton: React.FC<TextButtonProps> = ({
  children,
  variant = 'default', // Default razonable
  className = '',
  onClick,
  to, // Extraer la prop 'to'
  ...rest
}) => {
  // Estilos base para botones de texto: sin padding excesivo, sin bordes, focus sutil
  const baseStyles = 'inline-block text-base font-medium hover:underline focus:outline-none focus:ring-0 transition-colors duration-200';

  let variantStyles = '';

  switch (variant) {
    case 'primaryYellow':
      // Usando tu color primary-yellow (asumiendo mapeo en tailwind.config.js)
      variantStyles = 'text-primary-yellow hover:text-darker-yellow';
      break;
    case 'gray':
      // Para "Ver más comentarios"
      variantStyles = 'text-gray-400 hover:text-gray-300';
      break;
    case 'highlight':
      variantStyles = 'text-green-500 hover:text-green-400'; // Define tus estilos para 'highlight'
      break;
    case 'default':
      // Un color por defecto si no se especifica variante, o un color de enlace estándar
      variantStyles = 'text-blue-500 hover:text-blue-400';
      break;
  }

  const mergedClassName = twMerge(`${baseStyles} ${variantStyles} ${className}`);

  if (to) {
    // Si 'to' está presente, renderiza un Link
    return (
      <Link to={to} className={mergedClassName} {...rest as any}>
        {children}
      </Link>
    );
  } else {
    // Si no, renderiza un botón normal
    return (
      <button
        onClick={onClick}
        className={mergedClassName}
        {...rest}
      >
        {children}
      </button>
    );
  }

};

export default TextButton;