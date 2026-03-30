import type { useLocalInfoProps } from "./hooks/useLocalSection";

// 1. Define la interfaz para las props del componente ProfileCard.
export interface ProfileCardProps {
    userName: string; // El nombre del usuario es una cadena y es obligatorio.
    profileImageSrc: string; // La URL de la imagen de perfil es una cadena y es obligatoria.
    onEditProfileClick: () => void; // Función para editar perfil, sin argumentos y sin retorno.
    onLogoutClick: () => void;     // Función para cerrar sesión, sin argumentos y sin retorno.
    className?: string;            // Clases adicionales para el div contenedor principal.
    setShowForm?: (value: boolean) => void; // Función opcional para mostrar el formulario de edición de local.
    showLocalButton?: boolean; // Indica si se debe mostrar el botón para crear un local.
    isLocalManager:  boolean;
  }
  