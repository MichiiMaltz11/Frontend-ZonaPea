import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { UserService, ApiError } from "../service";

import ProfileCard from "../components/ProfileCard";
import ProfilePicture from "../components/ProfilePicture";
import ProfileHeader from "../components/ProfileHeader";
import Input from "../components/Input";
import Button from "../components/Button";
import Text from "../components/Text";
import Image from "../assets/logo_buho_owl.png";
import FormContainer from "../components/FormContainer";
import type { LocalInfoProps } from "../interface/LocalInfo";
import { useLocalSection } from "../hooks/useLocalSection";
import LocalForm from "../components/LocalForm";
import { getImageSrc } from "../utils/verifyImgType";

const ProfilePage: React.FC = () => {
  // Asegúrate de que 'updateUser' también se obtenga del contexto
  const { user, logout, isLoggedIn, updateUser, isLocalManager } = useUser();
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [imageKey, setImageKey] = useState<number>(0);

  // Estados para la imagen de perfil
  const [profileImageUrl, setProfileImageUrl] = useState<File | null | string>(
    user?.img || null
  );
  // Estado para el nombre de usuario editable
  const [editableUsername, setEditableUsername] = useState(
    user?.username || "Usuario"
  );
  // Estado para controlar el modo de edición (false: ver, true: editar)
  const [isEditing, setIsEditing] = useState(false);

  // Estados para UI feedback
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Efecto para sincronizar los estados locales con el contexto del usuario
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
      return; // Salir para evitar más procesamiento
    }
    if (user) {
      setEditableUsername(user.username);
      setProfileImageUrl(user.img || null);
    } else {
      // En caso de que user sea null inesperadamente mientras isLoggedIn es true (ej. carga inicial)
      setEditableUsername("Usuario");
      setProfileImageUrl(null);
    }
  }, [isLoggedIn, navigate, user]);

  // Función para alternar el modo de edición
  const handleToggleEdit = () => {
    setIsEditing(!isEditing);
    // Si se cancela la edición (se pasa de true a false), resetear el nombre a su valor original
    if (isEditing) {
      setEditableUsername(user?.username || "Usuario");
      setProfileImageUrl(user?.img || null);
    }
    // Limpiar mensajes al cambiar de modo
    setError(null);
    setSuccess(null);
  };

  // Función para guardar los cambios en el perfil
  const handleSaveProfile = async () => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    if (!user?.id) {
      setError("No se pudo obtener el ID de usuario para guardar los cambios.");
      setLoading(false);
      return;
    }

    try {
      // Datos a enviar: solo el nombre de usuario por ahora.
      // Puedes añadir email, etc., si tu backend permite la edición
      const updateData = { username: editableUsername, img: profileImageUrl };

      // Llama al servicio para actualizar el perfil
      const response = await UserService.updateProfile(user.id, updateData);

      // Actualiza el contexto del usuario con los nuevos datos
      // Esto es CRUCIAL para que los cambios se reflejen en toda la app (ej. Navbar)
      
      const updatedUser = await UserService.findByEmail(user.email);      

      updateUser(updatedUser);

      setSuccess("¡Perfil actualizado con éxito!");
      setIsEditing(false); // Salir del modo de edición
    } catch (err: any) {
      console.error("Error al actualizar el perfil:", err);
      if (err instanceof ApiError) {
        setError(err.message);
      } else {
        setError("Error al actualizar el perfil. Inténtalo de nuevo.");
      }
    } finally {
      setLoading(false);
    }
  };

  // Funciones existentes para logout y manejo de imagen
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleDeleteProfilePicture =  () => {
    setProfileImageUrl(null);
    setImageKey(0);
  };

  const handleChangeClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImageUrl(e.target.files[0]);
      setImageKey(prev => prev + 1);
    }
  };

  const useLocal = useLocalSection({id: user?.id || ""});

  return (
    <div className=" min-h-screen p-8 flex flex-col items-center mt-7 relative">
      {loading && (
        <p className="text-center text-yellow-400 mb-4">Cargando...</p>
      )}
      {error && <p className="text-center text-red-500 mb-4">{error}</p>}
      {success && <p className="text-center text-green-500 mb-4">{success}</p>}

      <div className="flex flex-col md:flex-row justify-center items-start md:space-x-8 w-full max-w-4xl">
        {/* ProfileCard - Siempre visible, muestra el nombre del usuario del contexto */}
        <div className="mb-8 md:mb-0 w-full flex justify-center">
          <ProfileCard
            userName={user?.username || "Usuario"} // Siempre muestra el nombre del usuario actual del contexto
            profileImageSrc={user?.img ? getImageSrc(user?.img, Image) : Image}
            onEditProfileClick={handleToggleEdit} // Usa la nueva función para alternar edición
            onLogoutClick={handleLogout}
            className="border border-gray-200"
            setShowForm={useLocal.setShowForm} // Pasa la función para mostrar el formulario de local
            showLocalButton={useLocal.showForm ? false : true}
            isLocalManager={isLocalManager()}
          />
        </div>

        {useLocal.showForm && (
          <>
            <div className="w-full z-30 flex self-center justify-center">
              <div className="w-full h-full z-20 relative">
                <FormContainer<LocalInfoProps>
                  handleDelete={() => {}}
                  handleCancel={() => useLocal.setShowForm(false)}
                  handleSubmit={useLocal.handleSubmitPost}
                  title={"Crear Local"}
                  className={{
                    formHeader: { mainWrapper: "bg-primary-blue" },
                    wrapper: "overflow-y-scroll",
                  }}
                  value={useLocal.newLocalInfo}
                  onChange={useLocal.setNewLocalInfo}
                  deleteOption={false}
                  form={({ value, onChange }) => (
                    <LocalForm value={value} onChange={onChange} />
                  )}
                />
              </div>
            </div>
          </>
        )}

        {/* Sección de Edición de Perfil (Visible SOLAMENTE en modo de edición) */}
        {isEditing && (
          <div className="w-full max-w-sm bg-white p-6 rounded-lg flex flex-col space-y-4 items-center shadow-lg">
            <ProfileHeader
              title="Editar Perfil"
              subtitle="Actualiza tu información"
            />

            {/* Input para cambiar el nombre */}
            <div className="w-full">
              <Text
                text="Nombre de Usuario"
                className="text-gray-700 text-sm mb-1"
              />
              <Input
                id="username-edit"
                name="username-edit"
                type="text"
                value={editableUsername}
                onChange={(e) => setEditableUsername(e.target.value)}
                placeholder="Nuevo nombre de usuario"
                className="w-full text-gray-800"
              />
            </div>

            {/* Sección de Editar Foto */}
            {profileImageUrl && (
              <ProfilePicture
                imageSrc={getImageSrc(profileImageUrl, Image)}
                alt="Foto de perfil del usuario"
                size="medium"
                deletable={true} // Siempre 'deletable' en modo edición
                onDeleteClick={handleDeleteProfilePicture}
              />
            )}

            <input
              key={imageKey}
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              accept="image/*"
              onChange={handleFileChange}
            />

            <Button
              variant="solidSecondary"
              onClick={handleChangeClick} // Abre el selector de archivos
              disabled={loading}
              className="w-full py-2 text-white"
            >
              {loading ? "Guardando..." : "Cambiar foto"}
            </Button>

            {/* Botones de acción en modo edición */}
            <Button
              variant="solidPrimary" // O una variante más adecuada para "Guardar"
              onClick={handleSaveProfile}
              disabled={loading}
              className="w-full py-2 text-primary-yellow"
            >
              {loading ? "Guardando..." : "Guardar cambios"}
            </Button>
            <Button
              variant="textOnly"
              onClick={handleToggleEdit} // Para cancelar y salir del modo edición
              className="w-full text-gray-600 hover:text-gray-800"
            >
              Cancelar
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
