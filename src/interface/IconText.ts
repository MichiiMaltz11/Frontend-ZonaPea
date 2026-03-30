import type { IconType } from "react-icons";

export interface IconTextProps{
  icon: IconType;
  text: string;
  onClick?: () => void;
  className?: {
    wrapper?: string;  // Para el div contenedor
    icon?: string;     // Para el icono
    text?: string;     // Para el texto (por si quieres pasárselo a <Text />)
  };
}