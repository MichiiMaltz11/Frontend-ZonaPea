import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import AuthContainer  from '../components/AuthContainer';
import Input from '../components/Input';
import Button from '../components/Button';
import TextButton from '../components/TextButton';
import Text from '../components/Text';
import { UserService, ApiError } from '../service';
import { ROL_DEFAULT_ID } from '../config/api';

const SignUpPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden.');
      return;
    }

    setLoading(true);
    try {
      // Por defecto, la imagen será una cadena vacía y el rol 'user'
      // Ajusta esto si tu backend espera algo diferente o si tienes una selección de rol/imagen
      const newUser = await UserService.post({
        username,
        email,
        password,
        image: '', // URL de imagen por defecto o vacía
        rolId: ROL_DEFAULT_ID, // ID del rol por defecto, según tu base de datos
      });
      console.log('Usuario registrado con éxito:', newUser);
      alert('Registro exitoso. ¡Ahora puedes iniciar sesión!');
      navigate('/login'); // Redirige al usuario a la página de login
    } catch (err: any) {
      console.error('Error durante el registro:', err);
      // Muestra un mensaje de error al usuario, usando ApiError si es posible
      if (err instanceof ApiError) { 
        setError(err.message);
      } else {
        setError('Error en el registro. Inténtalo de nuevo.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-120px)] p-4">
      <AuthContainer title="Crear Cuenta">
      <form onSubmit={handleSubmit} className="w-full flex flex-col space-y-1 ">
        {error && (
          <div className="bg-red-500 text-white p-3 rounded-md text-sm text-center">
            {error}
          </div>
        )}
          <Text
            text='Nombre'
            className='text-white text-base '
            />
        <Input
          id="username"
          name="username"
          type="text"
          placeholder="Ingresa tu nombre"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="mb-1"
        />
        <Text
            text='Correo'
            className='text-white text-base '
            />
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="example@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mb-1"
        />
        <Text
            text='Contraseña'
            className='text-white text-base '
            />
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="Contraseña123"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="mb-1"
        />
        <Text
            text='Confirma tu contraseña'
            className='text-white text-base '
            />
        <Input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="Contraseña123"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          className="mb-1"
        />
        <Button
          type="submit"
          variant="authSignIn"
          disabled={loading}
          className="w-full bg-primary-yellow text-white hover:text-black mt-2">
          {loading ? 'Registrando...' : 'CREAR CUENTA'}
        </Button>
        <p className="text-start text-gray-400 mt-4">
        ¿Ya tienes cuenta?{' '}
        <TextButton to="/login" variant='primaryYellow'>
            Inicia Sesión
        </TextButton>
      </p>
      </form>
    </AuthContainer>
    </div>
  );
};

export default SignUpPage;