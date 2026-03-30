// src/components/ProfilePicture.tsx
import React from 'react';
import type { ProfilePictureProps } from '../interface/ProfilePicture';

const ProfilePicture: React.FC<ProfilePictureProps> = ({
  imageSrc,
  alt,
  size = 'medium',
  className = '',
  deletable = false, // Valor por defecto
  onDeleteClick, // Desestructurado
}) => {
  let sizeClasses = '';
  switch (size) {
    case 'small': sizeClasses = 'w-12 h-12'; break;
    case 'medium': sizeClasses = 'w-20 h-20'; break;
    case 'large': sizeClasses = 'w-28 h-28'; break;
    case 'xl': sizeClasses = 'w-40 h-40'; break;
    default: sizeClasses = 'w-20 h-20'; break;
  }

  // Si imageSrc es una cadena vacía o nula, puedes poner una imagen de fallback aquí
  const finalImageSrc = imageSrc || 'URL_DE_IMAGEN_DE_PLACEHOLDER_POR_DEFECTO'; // Considera usar una URL real para el placeholder

  return (
    // Contenedor principal: ahora solo maneja el tamaño y la posición relativa
    // (ya no tiene overflow-hidden ni rounded-full para no cortar el botón)
    <div className={`relative ${sizeClasses} ${className}`}>
      {/* Nuevo div intermedio: es el que será circular y tendrá el overflow-hidden para la imagen */}
      <div className="rounded-full overflow-hidden w-full h-full flex items-center justify-center">
        <img
          src={finalImageSrc}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </div>

      {deletable && onDeleteClick && ( // Solo renderiza si deletable es true y onDeleteClick se proporciona
        <button
          onClick={onDeleteClick}
          className="absolute top-[-8px] right-[-8px] bg-red-600 text-white rounded-full p-1
                     text-xs flex items-center justify-center cursor-pointer
                     hover:bg-red-700 transition-colors z-20 w-6 h-6" // Aumentado z-index a 20
          aria-label="Eliminar foto de perfil"
        >
          &times;
        </button>
      )}
    </div>
  );
};

export default ProfilePicture;