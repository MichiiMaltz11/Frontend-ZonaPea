import React from 'react';
import type { RestaurantCardProps } from '../interface/RestaurantCard';

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  imageSrc,
  name,
  onClick,
  className = ''
}) => {
  return (
    <div
      className={`
        bg-[#504C4C] rounded-2xl overflow-hidden shadow-lg cursor-pointer
        hover:shadow-xl transform hover:scale-105 transition-all duration-300
        ${className}
      `}
      onClick={onClick}
    >
      {/* Contenedor de la imagen que asegura la relación de aspecto cuadrada y esquinas superiores redondeadas */}
      <div className="relative w-full pb-[100%] rounded-t-2xl overflow-hidden">
        <img
          src={imageSrc}
          alt={name}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        {/* Overlay oscuro y texto blanco en la parte inferior */}
        <div className="absolute bottom-0 left-0 w-full bg-[#D19036] bg-opacity-60 p-4 flex items-center justify-center">
          <h3 className="text-white text-center text-lg font-bold leading-tight truncate"> {/* Añadido 'truncate' para manejar texto largo */}
            {name}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;