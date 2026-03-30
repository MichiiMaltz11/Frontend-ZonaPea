// Define la interfaz para las props del componente RestaurantCard.
export interface RestaurantCardProps {
    imageSrc: string;     // La URL de la imagen del restaurante, obligatoria.
    name: string;         // El nombre del restaurante, obligatorio.
    onClick: () => void;  // Función que se ejecuta al hacer clic en la tarjeta, sin argumentos y sin retorno, obligatoria.
    className?: string;   // Clases CSS adicionales para el div contenedor principal, opcional.
  }