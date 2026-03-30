import axios from 'axios';
import { API_BASE_URL } from '../config/api'; // Asegúrate de que esta ruta sea correcta
import { getCookie } from '../utils/cookies';

// Crea una instancia de Axios.
const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true
});

// Interceptor para añadir el token de autenticación a las cabeceras de cada petición
api.interceptors.request.use(
  (config) => {
    const token = getCookie("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Clase para manejar errores específicos de la API
export class ApiError extends Error {
  statusCode: number;
  data: any;
  constructor(message: string, statusCode: number, data: any = null) {
    super(message);
    this.name = 'ApiError';
    this.statusCode = statusCode;
    this.data = data;
  }
}

// Función auxiliar para manejar errores comunes de Axios
export const handleAxiosError = (error: any): never => {
  if (axios.isAxiosError(error) && error.response) {
    const message = error.response.data?.message || error.response.data?.error || 'Error del servidor.';
    throw new ApiError(message, error.response.status, error.response.data);
  } else if (axios.isAxiosError(error) && error.request) {
    throw new ApiError('No se pudo conectar con el servidor. Revisa tu conexión a internet.', 503);
  } else {
    throw new ApiError(`Error en la petición: ${error.message}`, 500);
  }
};

export default api; // Exporta la instancia de Axios configurada