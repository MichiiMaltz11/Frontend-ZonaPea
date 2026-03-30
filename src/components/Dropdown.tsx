import React from 'react';
import type { DropdownProps } from '../interface/Dropdown';

const Dropdown: React.FC<DropdownProps> = ({
  options = [], // Valor por defecto para asegurar que siempre sea un array
  value,
  onChange,
  placeholder = 'Selecciona una opción',
  className = '',
  containerClassName = '',
  ...props // Recolecta cualquier otra prop pasada al <select> nativo (id, name, etc.)
}) => {
  return (
    <div className={`relative ${containerClassName}`}>
      <select
        value={value}
        onChange={onChange}
        className={`
          appearance-none w-full py-2 px-4 pr-10 rounded-md
          bg-white text-gray-800 border border-gray-300
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
          cursor-pointer
          ${className}
        `}
        {...props} // Pasa las props adicionales al elemento <select>
      >
        {/* Renderiza el placeholder solo si no hay un valor seleccionado */}
        {!value && <option value="" disabled>{placeholder}</option>}
        {options.map((option) => (
          <option key={String(option.value)} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
};

export default Dropdown;