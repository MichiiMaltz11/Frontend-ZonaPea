export interface AuthContainerProps {
    title: string;       // El título del contenedor (ej. "Inicia Sesión", "Regístrate")
    children: React.ReactNode; // El contenido que se renderizará dentro del contenedor (el formulario)
    className?: string;  // Clases adicionales para el div contenedor principal
  }