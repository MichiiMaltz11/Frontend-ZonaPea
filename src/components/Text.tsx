// src/components/Text.tsx
import type { TextProps } from '../interface/Text';
import { twMerge } from 'tailwind-merge';

export default function Text({
  text,
  className
}: TextProps) {
  // Estilos base para el texto
  const baseStyles = 'font-normal text-black text-2xl';

  const defStyle = twMerge(baseStyles, className);
  
  return (
    <p className={`${defStyle}`}>{text}</p>
  );
};