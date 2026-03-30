export interface RatingProps {
  rating?: number;
  isDisabled?: boolean;
  onClick?: (rating: number) => void;
  className?: {
    wrapper?: string; // Para el div contenedor
  };
}
