// 1. Define la interfaz para cada opción individual del dropdown.
export interface DropdownOption {
    value: string | number; // El valor real de la opción (ej. un ID, un nombre de categoría)
    label: string;          // El texto visible de la opción para el usuario
    // disabled?: boolean; // Puedes descomentar esto si necesitas deshabilitar opciones individuales
  }
  
  // 2. Define la interfaz principal para las props del componente Dropdown.
  //    Extendemos React.ComponentPropsWithoutRef<'select'> para incluir todas
  //    las props nativas que un <select> HTML podría aceptar (id, name, etc.).
  export interface DropdownProps extends React.ComponentPropsWithoutRef<'select'> {
    options?: DropdownOption[]; // Array de DropdownOption, opcional. Lista de las opciones a mostrar.
    value: string | number;     // El valor seleccionado actualmente del dropdown.
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void; // Función que se llama cuando cambia la selección.
    placeholder?: string;       // Texto que se muestra cuando no hay una opción seleccionada.
    className?: string;         // Clases de Tailwind para el elemento <select> principal.
    containerClassName?: string; // Clases de Tailwind para el div contenedor del dropdown.
    // Cualquier otra prop HTML estándar para <select> se hereda de React.ComponentPropsWithoutRef<'select'>.
  }