// Variantes específicas para botones de texto
type TextButtonVariant = 'default' | 'primaryYellow' | 'gray' | 'highlight'; 

export interface TextButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  children: React.ReactNode;
  variant?: TextButtonVariant;
  className?: string; // Para clases adicionales
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  to?: string; // Ruta a la que navegar si es un Link.
}