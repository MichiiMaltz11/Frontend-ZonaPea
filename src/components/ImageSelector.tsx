import React, { useRef } from 'react';
import type { ImageSelectorProps } from '../interface/ImageSelector'; 
import { twMerge } from 'tailwind-merge';
import { getImageSrc } from '../utils/verifyImgType';

const ImageSelector: React.FC<ImageSelectorProps> = ({
  onImageSelected,
  label = 'Seleccionar Imagen',
  inputKey = Date.now(),
  className = '',
  ...props
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const baseWrapper = "relative inline-block text-white py-2 px-4 rounded-md cursor-pointer hover:bg-white hover:text-primary-yellow transition-colors duration-200 text-center text-sm"
  const mergeWrapper = twMerge(baseWrapper, className);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      onImageSelected(event.target.files[0]);
    }
  };

  return (
    <div className={mergeWrapper}
      onClick={handleButtonClick}
      {...props}
    >
      {label}
      <input
        key={inputKey}
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="absolute inset-0 opacity-0 cursor-pointer"
        accept="image/*" // Limita la selección a archivos de imagen
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};

export default ImageSelector;