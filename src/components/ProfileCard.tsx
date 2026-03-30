// src/components/ProfileCard.tsx
import React from "react";
import type { ProfileCardProps } from "../interface/ProfileCard";
import Button from "./Button"; // Importa tu componente Button genérico, no SolidButton
import ProfilePicture from "./ProfilePicture"; // Asegúrate de tipar ProfilePicture si no lo has hecho
import Text from "./Text";

const ProfileCard: React.FC<ProfileCardProps> = ({
  userName,
  profileImageSrc,
  onEditProfileClick,
  onLogoutClick,
  className = "",
  setShowForm,
  showLocalButton,
  isLocalManager
}) => {
  return (
    <div
      className={`
      bg-white rounded-3xl shadow-xl p-6 sm:p-8 md:p-10
      flex flex-col items-center text-center
      w-full max-w-xs sm:max-w-sm lg:max-w-md relative
      ${className}
    `}
    >
      <h2 className="text-gray-800 text-2xl sm:text-3xl font-semibold mb-6 border-b-2 border-primary-yellow pb-3 w-full">
        Perfil
      </h2>
      <div className="mb-6">
        <ProfilePicture
          imageSrc={profileImageSrc}
          alt={`Profile picture of ${userName}`}
          size="large" // Asegúrate de que ProfilePicture tenga una prop 'size' tipada
        />
      </div>
      <p className="text-gray-700 text-xl sm:text-2xl font-medium mb-8">
        {userName}
      </p>
      <div className="w-full space-y-4">
        <Button
          onClick={onEditProfileClick}
          variant="solidPrimary" // Asumiendo que 'secondary' en tu SolidButton se mapea a 'solidSecondary' en Button.tsx
          className="w-full"
        >
          Editar
        </Button>

        {(showLocalButton&&isLocalManager) && (
          <Button
            className="w-full p-0 bg-transparent hover:bg-primary-yellow border-primary-yellow"
            onClick={() => {
              setShowForm?.(true);
            }}
          >
            <Text
              text="Crear Local"
              className="text-primary-yellow py-2 px-6 text-[1em] w-full h-full hover:text-white duration-200 ease-in-out"
            />
          </Button>
        )}

        <Button
          onClick={onLogoutClick}
          variant="solidSecondary" // Asumiendo que 'secondary' se mapea a 'solidSecondary'
          className="w-full"
        >
          Cerrar Sesión
        </Button>
      </div>
    </div>
  );
};

export default ProfileCard;
