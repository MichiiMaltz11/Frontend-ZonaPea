// 1. Define la interfaz para cada objeto de opción dentro del array `options`.
//    Cada opción tiene un 'label' (el texto a mostrar) y un 'onClick' (la acción).
export interface OptionDialogOption {
  label: string;
  onClick: () => void; // Una función que no recibe argumentos y no devuelve nada.
}

// 2. Define la interfaz principal para las props del componente OptionDialog.
export interface OptionDialogProps {
  options?: OptionDialogOption[]; // Array de OptionDialogOption, opcional.
  className?: string;             // Clases adicionales para el div contenedor, opcional.
}