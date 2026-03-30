// src/components/OptionDialog.tsx
import React from 'react';
import TextButton from './TextButton'; // Asegúrate de que la ruta sea correcta.
import type { OptionDialogProps } from '../interface/OptionDialog';

const OptionDialog: React.FC<OptionDialogProps> = ({
  options = [], // Valor por defecto para asegurar que siempre sea un array.
  className = ''
}) => {
  return (
    <div className={`
      bg-gray-700 rounded-lg shadow-xl p-4
      flex flex-col space-y-2
      w-full max-w-xs
      ${className}
    `}>
      {options.map((option, index) => (
        <TextButton
          key={index} // Usar el índice como key es aceptable si la lista no cambia de orden o elementos.
                     // Para listas dinámicas, considera usar un ID único de la opción si está disponible.
          onClick={option.onClick}
          // Nota sobre 'color="highlight"': Esta prop 'color' NO está definida
          // en tu actual TextButton.tsx. Si la necesitas, deberías añadirla allí
          // como una nueva variante o una prop separada para el color de texto.
          // Por ahora, la he comentado o tendrías que simularla con className.
          // Si 'highlight' es lo mismo que 'primaryYellow' o 'gray', usa esa variante.
          // Si es un nuevo color, define una nueva variante o pasa `className="text-your-highlight-color"`.
          className="text-center py-2 text-base hover:bg-gray-600 rounded-md text-primary-yellow" // Ejemplo: asumiendo 'highlight' es primary-yellow
        >
          {option.label}
        </TextButton>
      ))}
    </div>
  );
};

export default OptionDialog;