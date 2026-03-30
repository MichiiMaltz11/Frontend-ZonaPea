// src/types/FilterSectionTypes.ts

import type { DropdownOption } from './Dropdown'; // Importa DropdownOption como tipo

// Define la interfaz para las props del componente FilterSection.
export interface FilterSectionProps {
  label?: string; // El label es opcional, ya que tiene un valor por defecto.
  options?: DropdownOption[]; // Las opciones, que deben ser un array de DropdownOption.
  value: string | number; // El valor seleccionado, que debe coincidir con el tipo de Dropdown.
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void; // La función de cambio.
  className?: string; // Clases adicionales para el contenedor de la sección de filtro.
}