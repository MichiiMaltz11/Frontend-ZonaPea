// 1. Define la interfaz para las props del componente SearchBar.
//    Extendemos React.ComponentPropsWithoutRef<'input'> para incluir todas
//    las props nativas que un <input> HTML podría aceptar (id, name, type, etc.).
export interface SearchBarProps extends React.ComponentPropsWithoutRef<'input'> {
  placeholder?: string; // Texto del placeholder, opcional.
  value: string;        // El valor actual del input, debe ser string y es obligatorio.
  // La función de cambio, que recibe un evento de cambio de un input HTML.
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;   // Clases adicionales para el div contenedor, opcional.
  // Las props adicionales (type, id, etc.) ya están cubiertas por la extensión.
}