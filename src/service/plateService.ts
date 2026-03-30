import api, { handleAxiosError } from "./api";
import type { PlateInfoProps } from "../interface/PlateInfo";
import { API_ENDPOINTS, API_METHODS } from "../config/api";
import { mapBackendPlateToFrontend } from "../utils/mappers/platebackToFront";

const PLATE_URL = API_ENDPOINTS.PLATO;
const { GET, GETALL, POST, PUT, DELETE } = API_METHODS;

export const PlateService = {
  // Obtener todos los platos
  getAll: async (idLocal: string): Promise<PlateInfoProps[]> => {
    // Activando la llamada real al backend para getAll
    try {
      const response = await api.get(PLATE_URL + GETALL + `/${idLocal}`); // Endpoint para obtener todos los platos

      // Verificación de que la respuesta es un array (mejora para robustez)
      if (!Array.isArray(response.data.data)) {
        console.error(
          "PlateServices.getAll: La API no devolvió un array. Respuesta:",
          response.data
        );
        throw new Error("Respuesta de la API inválida al obtener platos.");
      }

      const plates = response.data.data.map(mapBackendPlateToFrontend);

      return plates;
    } catch (error) {
      console.error("PlateService.getAll: Error al obtener locales:", error);
      handleAxiosError(error); // Maneja el error y lo relanza como ApiError
      throw error;
    }
  },

  // Obtener un plato por ID
  getById: async (id: string): Promise<PlateInfoProps> => {
    try {
      const response = await api.get<PlateInfoProps>(
        `${API_ENDPOINTS.PLATO}/${API_METHODS.GET}/${id}`
      );
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      throw error;
    }
  },

  // Crear un nuevo plato (con imagen)
  create: async (plate: PlateInfoProps, localId: string): Promise<PlateInfoProps> => {
    try {
      const formData = new FormData();
      const { image, local, id, ...rest } = plate;
      
      
      const jsonData = JSON.stringify({local: localId, ...rest});
      formData.append("createPlateRequest", jsonData);

      if (image) {
        formData.append("image", image);
      }

      const response = await api.post(PLATE_URL + POST, formData);

      return response.data; // Devuelve la respuesta del backend tras el registro
    } catch (error) {
      handleAxiosError(error);
      throw error;
    }
  },

  // Actualizar un plato (opcionalmente con nueva imagen)
  update: async (
    plate: PlateInfoProps
  ): Promise<PlateInfoProps> => {
    try {
      const formData = new FormData();
      const { image, local, id, ...rest } = plate;
      
      
      const jsonData = JSON.stringify({idPlate: id, ...rest});
      formData.append("updatePlateRequest", jsonData);

      if (image) {
        formData.append("image", image);
      }

      const response = await api.put(PLATE_URL + PUT, formData);

      return response.data; // Devuelve la respuesta del backend tras el registro
    } catch (error) {
      handleAxiosError(error);
      throw error;
    }
  },

  // Eliminar un plato
  delete: async (plate: PlateInfoProps): Promise<void> => {
    try {      
      if (plate.id == "") {
        console.error(
          "PlateServices.delete: La API no pudo borrar el plato."
        );
        throw new Error("La API no pudo borrar el plato.");
      }      

      const response = await api.delete(PLATE_URL + DELETE + `/${plate.id}`);

      return response.data;
    } catch (error) {
      handleAxiosError(error);
      throw error;
    }
  },
};
