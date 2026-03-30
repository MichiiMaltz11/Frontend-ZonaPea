import React from 'react';
import { Link } from 'react-router-dom';
import BuhoLogo from '../assets/logo_buho_owl.png';
import Button from './Button'; // Tu botón genérico
import type { NavbarProps } from '../interface/Navbar'

const Navbar: React.FC<NavbarProps> = ({
  isAuthenticated,
  onUserIconClick,
  onLogout, // Desestructuramos onLogout
  className = '',
}) => {

  return (
    <nav className={`bg-[#3C3A4D] p-4 flex items-center justify-between ${className}`}>
      {/* Logo y Nombre de la Marca */}
      <Link to="/" className="flex items-center space-x-2 text-white text-2xl font-bold">
        <img src={BuhoLogo} alt="Búho Eat's Logo" className="h-10 w-auto" />
        <span>BÚHO EAT'S</span>
      </Link>

      {/* Contenido Dinámico a la Derecha */}
      <div className="flex items-center space-x-4">
        {isAuthenticated ? (
          // Si el usuario está autenticado, muestra el icono de usuario y quizás un botón de logout
          <>
            <Link to="/profile" className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 cursor-pointer hover:text-gray-300 transition-colors"
                // Si onUserIconClick existe, se dispara *además* de la navegación del Link
                // Esto podría ser para un menú desplegable
                onClick={onUserIconClick}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </Link>
            {onLogout && ( // Muestra el botón de logout solo si se proporciona la prop
              <Button variant="textOnly" onClick={onLogout} className="py-2 px-4">
                Cerrar Sesión
              </Button>
            )}
          </>
        ) : (
          // Si el usuario NO está autenticado, muestra los botones Sign Up / Sign In
          <div className="flex items-center space-x-4">
            <Link to="/signup">
              <Button
                variant="authSignUp" // Usamos la variante específica
                className="py-2 px-6 rounded-full"
              >
                Sign Up
              </Button>
            </Link>
            <Link to="/login">
              <Button
                variant="authSignIn" // Usamos la variante específica
                className="py-2 px-6 rounded-full"
              >
                Sign In
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;