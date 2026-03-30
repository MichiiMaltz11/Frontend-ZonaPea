// Define la interfaz para las props del componente ImageSelector.
// Extendemos React.ComponentPropsWithoutRef<'div'> para incluir todas
// las props nativas que un <div> HTML podría aceptar (id, style, etc.).
export interface ImageSelectorProps extends React.ComponentPropsWithoutRef<'div'> {
    // onImageSelected es una función que recibe un objeto File y no devuelve nada.
    onImageSelected: (imageFile: string | File | null) => void;
    // El label es opcional, con un valor por defecto.
    label?: string;
    // className para el div principal, opcional.
    className?: string;
    // Nota: '...props' ya están cubiertas por la extensión de React.ComponentPropsWithoutRef<'div'>
    // lo que significa que puedes pasar cualquier prop HTML válida para un <div> (id, style, etc.).
    inputKey: string;
    disabled: boolean;
  }