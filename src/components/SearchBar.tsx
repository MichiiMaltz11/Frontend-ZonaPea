import React from 'react';
import type { SearchBarProps } from '../interface/SearchBar';

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = 'Buscar...', // Valor por defecto.
  value,
  onChange,
  className = '',
  ...props // Recolecta cualquier otra prop pasada al <input> nativo.
}) => {
  return (
    <div className={`
      m-t-10 flex items-center justify-center
      w-full ${className}
    `}>
      <input
        type="text" // Aseguramos que siempre sea de tipo texto.
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`
          w-full py-3 px-6 rounded-full bg-white text-gray-800
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
          placeholder-gray-500 text-lg
        `}
        {...props} // Pasa las props adicionales al elemento <input>.
      />
    </div>
  );
};

export default SearchBar;