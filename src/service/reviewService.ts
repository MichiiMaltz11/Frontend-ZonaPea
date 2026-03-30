import api, { handleAxiosError } from './api';
import type { ReviewProps } from '../interface/serviceInterface/Request/Review'; 
import { API_ENDPOINTS, API_METHODS } from '../config/api';

const REVIEW_URL = API_ENDPOINTS.REVIEW;
const { GET, GETALL, POST, PUT, DELETE } = API_METHODS;

export const ReviewService = {
  // Obtener todas las reviews
  getAll: async (localId: string): Promise<ReviewProps[]> => {
    // Activando la llamada real al backend para getAll
    try {
      const response = await api.get(REVIEW_URL + GETALL + `/${localId}`); // Endpoint para obtener todos los locales
      
      // Verificación de que la respuesta es un array (mejora para robustez)
      if (!Array.isArray(response.data.data)) {
        console.error(
          "ReviewService.getAll: La API no devolvió un array. Respuesta:",
          response.data
        );
        throw new Error("Respuesta de la API inválida al obtener reviews.");
      }

      return response.data.data;
    } catch (error) {
      console.error("ReviewService.getAll: Error al obtener reviews:", error);
      handleAxiosError(error); // Maneja el error y lo relanza como ApiError
      throw error;
    }
  },

  // Crear una review
  create: async (review: ReviewProps): Promise<any> => {
    try {
      const response = await api.post(REVIEW_URL + POST, review);

      return response.data; // Devuelve la respuesta del backend tras el registro
    } catch (error) {
      handleAxiosError(error);
      throw error;
    }
  },

  // Actualizar una review
  update: async (updatedReview: ReviewProps): Promise<ReviewProps> => {
    try {
      const response = await api.put<ReviewProps>(`${API_ENDPOINTS.REVIEW}/${API_METHODS.PUT}`, updatedReview);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      throw error;
    }
  },

  // Eliminar una review
  delete: async (id: string): Promise<void> => {
    try {      
          if (id == "") {
            console.error(
              "PlateServices.delete: La API no pudo borrar el plato."
            );
            throw new Error("La API no pudo borrar el plato.");
          }      
    
          const response = await api.delete(REVIEW_URL + DELETE + `/${id}`);
    
          return response.data;
        } catch (error) {
          handleAxiosError(error);
          throw error;
        }
  }
};
