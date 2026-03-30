import React from 'react';
import type { AuthContainerProps } from '../interface/AuthContainer'; 

const AuthContainer: React.FC<AuthContainerProps> = ({
  title,
  children,
  className = ''
}) => {
  return (
    <div className={`
      bg-[#3C3A4D] rounded-xl shadow-2xl p-6 sm:p-8 md:p-10
      flex flex-col items-center
      w-full max-w-sm sm:max-w-md
      border border-gray-600 // Mantengo un borde por defecto, puedes ajustarlo
      ${className}
    `}>
      <h2 className="text-white text-3xl font-bold mb-8 text-center">
        {title}
      </h2>
      {children}
    </div>
  );
};

export default AuthContainer;