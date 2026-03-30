// src/components/RestaurantGrid.tsx
import React from 'react';
import RestaurantCard from './RestaurantCard'; 
import type { RestaurantGridProps } from '../interface/RestaurantGrid';

const RestaurantGrid: React.FC<RestaurantGridProps> = ({
  title,
  restaurants,
  onCardClick,
  gridClassName = '',
  cardClassName = ''
}) => {
  if (!restaurants || restaurants.length === 0) {
    return (
      <div className="text-center text-gray-500 py-8">
        No hay restaurantes para mostrar en esta sección.
      </div>
    );
}

  return (
    <section className="mb-8">
      {title && (
        <h2 className="text-gray-300 text-xl font-semibold mb-4 ml-2">
          {title}
        </h2>
      )}
      <div
        className={`
          grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-4
          ${gridClassName}
        `}
      >
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            imageSrc={restaurant.image}
            name={restaurant.name}
            onClick={() => onCardClick(restaurant.id)} // Llama a onCardClick con el ID del restaurante
            className={cardClassName}
          />
        ))}
      </div>
    </section>
  );
};

export default RestaurantGrid;