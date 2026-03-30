// Definimos las variantes posibles para el botón.
export type ButtonVariant =
  'solidPrimary' |
  'solidSecondary' |
  'outline' |
  'textOnly' |
  'authSignIn' |
  'authSignUp' |
  'selectImage' |
  'editData';

// Definimos la interfaz para las props del componente Button.
// Extendemos React.ComponentPropsWithoutRef<'button'> para heredar todas las props HTML estándar de un botón.
export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  children: React.ReactNode; // El contenido del botón (texto, íconos, etc.)
  variant?: ButtonVariant;   // La variante de estilo del botón, opcional.
  className?: string;        // Clases CSS adicionales para sobrescribir o extender los estilos.
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // Función que se ejecuta al hacer clic.
  // Puedes añadir más props aquí si tu Button las necesita (ej. isLoading: boolean)
}