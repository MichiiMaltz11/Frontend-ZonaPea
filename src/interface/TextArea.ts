export interface TextAreaProps {
  label?: string;
  id: string;
  name: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
  className?: {
    label?: string;  // Para el div contenedor
    textArea?: string;     // Para el icono
    wrapper?: string;
  };
}