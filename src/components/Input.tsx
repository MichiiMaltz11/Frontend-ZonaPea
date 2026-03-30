import React from 'react';
import type {InputProps} from '../interface/Input'
import { twMerge } from 'tailwind-merge';

const Input: React.FC<InputProps> = ({ label, id, name, type = 'text', className = '', ...rest }) => {
  const inputClasses = `
    w-full p-3 rounded-lg border-2 border-gray-300
    focus:outline-none focus:border-primary-yellow
    bg-white text-gray-800 placeholder-gray-500
    shadow-sm
  `; // Estilos para el campo de texto

  const mergeStyle = twMerge(inputClasses, className);

  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <input
        id={id}
        name={name}
        type={type}
        className={mergeStyle}
        {...rest}
      />
    </div>
  );
};

export default Input;