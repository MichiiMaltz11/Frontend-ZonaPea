import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContainer from '../components/AuthContainer';
import Input from '../components/Input';
import Button from '../components/Button';
import Text from '../components/Text';
import TextButton from '../components/TextButton';
import { UserService, ApiError } from '../service'; 
import { useUser } from '../context/UserContext';

const LoginPage: React.FC = () => { 
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { login } = useUser(); 

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Llama al endpoint de login en tu servicio de usuario
      // UserService.login ya maneja el almacenamiento del token
      const userData = await UserService.login({ email, password });

      // Redirige al usuario a la página principal o a un dashboard
      navigate('/'); // Puedes cambiar a '/' o a una ruta específica de dashboard
    } catch (err: any) {
      console.error('Error durante el login:', err);
      if (err instanceof ApiError) {
        setError(err.message);
      } else {
        setError('Credenciales inválidas. Por favor, inténtalo de nuevo.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-120px)] p-4">
      <AuthContainer title="Inicia Sesión">
        <form onSubmit={handleSubmit} className="w-full flex flex-col space-y-2">
            <Text
            text='Correo'
            className='text-white text-base '
            />
                <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="text-gray-800"
                />
            <Text
            text='Contraseña'
            className='text-white text-base '
            />
                <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="text-gray-800"
                />

          {error && <p className="text-red-500 text-center text-sm">{error}</p>}

          <p className="text-start text-gray-400 mt-3">
                ¿Olvidaste tu contraseña?{' '}
                <TextButton to="/change-password" variant='primaryYellow'>
                    Cambiar contraseña
                </TextButton>
            </p>
            <p className="text-start text-gray-400 mt-3">
                ¿No tienes cuenta?{' '}
                <TextButton to="/signup" variant="primaryYellow">
                    Regístrate
                </TextButton>
            </p>
            <Button
            type="submit"
            variant="authSignIn"
            className="w-full py-3 bg-primary-yellow text-white hover:text-black mt-3"
            disabled={loading}
          >
            {loading ? 'Iniciando sesión...' : 'INICIAR SESION'}
          </Button>
        </form>
      </AuthContainer>
    </div>
  );
};

export default LoginPage;