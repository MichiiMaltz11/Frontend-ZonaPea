// Define la interfaz para las props del componente Navbar.
export interface NavbarProps {
    isAuthenticated: boolean;
    // onUserIconClick es opcional y solo relevante cuando isAuthenticated es true.
    // Ahora, si la pasas, se usará para *abrir un menú* o algo similar,
    // NO para navegar directamente a /profile (porque Link ya hace eso).
    onUserIconClick?: () => void;
    // onLogout será manejado por el Navbar para que el App.tsx pueda pasarlo.
    onLogout?: () => void; // Añadimos onLogout para el botón de cerrar sesión
    className?: string;
  }