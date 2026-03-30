// 1. Define la interfaz para un objeto de Restaurante individual.
//    Esto es crucial para asegurar que los datos del array `restaurants`
//    tengan la forma esperada.
export interface Restaurant {
    id: string; // Asumiendo que el ID es un string. Si es un número, cámbialo a `number`.
    name: string;
    image: string; // La URL de la imagen.
    // Añade cualquier otra propiedad que un objeto de restaurante pueda tener
    // y que sea relevante para este componente o sus hijos.
    // Por ejemplo: category?: string; address?: string; etc.
  }
  
  // 2. Define la interfaz para las props del componente RestaurantGrid.
export interface RestaurantGridProps {
    title?: string; // El título de la sección, opcional.
    restaurants: Restaurant[]; // Un array de objetos Restaurant, obligatorio.
    // Función que se llama cuando se hace clic en una RestaurantCard.
    // Recibe el ID del restaurante (string) y no devuelve nada (void).
    onCardClick: (restaurantId: string) => void;
    gridClassName?: string; // Clases adicionales para el div principal de la cuadrícula, opcional.
    cardClassName?: string; // Clases adicionales para cada RestaurantCard individual, opcional.
  }