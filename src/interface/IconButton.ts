import type { IconType } from "react-icons";

export interface IconButtonProps{
  icon: IconType;
  onClick: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  isDisabled?: boolean;
  className?: {
    button?: string;  // Para el div contenedor
    icon?: string;     // Para el icono
  };
}