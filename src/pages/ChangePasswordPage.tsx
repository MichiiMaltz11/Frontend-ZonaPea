import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContainer from '../components/AuthContainer';
import Input from '../components/Input';
import Button from '../components/Button';
import TextButton from '../components/TextButton';
import Text from '../components/Text'; // Asumo que tienes un componente Text
import { UserService, ApiError } from '../service';

const ChangePasswordPage: React.FC = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Función para obtener el userId del almacenamiento local
  const getUserId = (): string | null => {
    const storedUserId = localStorage.getItem('userId');
    if (!storedUserId) {
      setError("No se pudo obtener el ID de usuario. Por favor, inicia sesión de nuevo.");
      // Opcional: navigate('/login'); // Puedes redirigir aquí si lo deseas
    }
    return storedUserId;
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (newPassword.length < 6) {
      setError('La nueva contraseña debe tener al menos 6 caracteres.');
      return;
    }

    if (newPassword !== confirmNewPassword) {
      setError('Las contraseñas no coinciden.');
      return;
    }

    const userId = getUserId();
    if (!userId) {
        return; // El error ya se estableció en getUserId
    }

    setLoading(true);
    try {
      await UserService.putSensitiveData(userId, newPassword);
      setSuccess('Contraseña cambiada con éxito. Serás redirigido al inicio de sesión.');
      setTimeout(() => {
        // Después de cambiar la contraseña, lo ideal es forzar al usuario a iniciar sesión de nuevo
        // para que se genere un nuevo token con las credenciales actualizadas (seguridad).
        localStorage.removeItem('authToken'); // Limpia el token antiguo
        localStorage.removeItem('userId');
        localStorage.removeItem('username');
        navigate('/login');
      }, 2000); // Redirige después de 2 segundos
    } catch (err: any) {
      console.error('Error al cambiar la contraseña:', err);
      // Muestra un mensaje de error al usuario, usando ApiError si es posible
      if (err instanceof ApiError) { // ¡MEJORA AQUÍ!
        setError(err.message);
      } else {
        setError('Error al cambiar la contraseña. Inténtalo de nuevo.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-120px)] p-4">
      <AuthContainer title="Cambiar contraseña">
        <form onSubmit={handleSubmit} className="w-full flex flex-col space-y-1">
          {error && (
            <div className="bg-red-500 text-white p-3 rounded-md text-sm text-center mb-4">
              {error}
            </div>
          )}
          {success && (
            <div className="bg-green-500 text-white p-3 rounded-md text-sm text-center mb-4">
              {success}
            </div>
          )}

          <Text
            text='Contraseña'
            className='text-white text-base'
          />
          <Input
            id="newPassword"
            name="newPassword"
            type="password"
            placeholder="contraseña123"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
            className="mb-1"
          />

          <Text
            text='Confirmar Contraseña'
            className='text-white text-base'
          />
          <Input
            id="confirmNewPassword"
            name="confirmNewPassword"
            type="password"
            placeholder="contraseña123"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            required
            className="mb-1"
          />

          <div className="flex justify-center mt-2">
            <Button
              type="submit"
              variant="authSignIn"
              disabled={loading}
              className="w-full bg-[#D19036] text-white hover:text-black mt-2"
            >
              {loading ? 'Guardando...' : 'GUARDAR'}
            </Button>
          </div>
          <p className="text-start text-gray-400 mt-4">
            ¿Aún no tienes cuenta?{' '}
            <TextButton to="/signup" variant='primaryYellow'>
              Regístrate
            </TextButton>
          </p>
        </form>
      </AuthContainer>
    </div>
  );
};

export default ChangePasswordPage;