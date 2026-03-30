import { API_ENDPOINTS, API_METHODS } from "../config/api";
import type { AllLocalsProps } from "../interface/AllLocals";
import type { LocalInfoProps } from "../interface/LocalInfo";
import { mapLocalToAllLocalInfoProps } from "../utils/mappers/localInfoToAllLocals";
import { mapLocalInfoToPut } from "../utils/mappers/localInfoToPut";
import { mapLocalToLocalInfoProps } from "../utils/mappers/localToLocalInfo";
import api, { handleAxiosError } from "./api";

const LOCAL_URL = API_ENDPOINTS.LOCAL;
const { GET, GETALL, POST, PUT, DELETE } = API_METHODS;

export const LocalService = {
  getAll: async (page: number, sortOrder: string, sortBy: string): Promise<AllLocalsProps> => {
    // Activando la llamada real al backend para getAll
    try {
      const response = await api.get(LOCAL_URL + GETALL + `?page=${page}&sortOrder=${sortOrder}&size=8&sortBy=${sortBy}`); // Endpoint para obtener todos los locales

      // Verificación de que la respuesta es un array (mejora para robustez)
      if (!Array.isArray(response.data.data.content)) {
        console.error(
          "LocalService.getAll: La API no devolvió un array. Respuesta:",
          response.data
        );
        throw new Error("Respuesta de la API inválida al obtener locales.");
      }

      const localList : LocalInfoProps[] = response.data.data.content.map(mapLocalToLocalInfoProps);
      const allLocals : AllLocalsProps = mapLocalToAllLocalInfoProps(response.data.data, localList);

      return allLocals;
    } catch (error) {
      console.error("LocalService.getAll: Error al obtener locales:", error);
      handleAxiosError(error); // Maneja el error y lo relanza como ApiError
      throw error;
    }
  },

  getById: async (id: string): Promise<LocalInfoProps> => {
    // Activando la llamada real al backend para getById
    try {
      const response = await api.get(LOCAL_URL+GET+ `/${id}`); // Endpoint para obtener un local por ID

      const responseMapped = mapLocalToLocalInfoProps(response.data.data);

      return responseMapped;
    } catch (error) {
      console.error(
        `LocalService.getById: Error al obtener local con ID ${id}:`,
        error
      );
      handleAxiosError(error); // Maneja el error y lo relanza como ApiError
      throw error; // Es importante relanzar el error para que los componentes que lo llamen puedan manejarlo
    }
  },

  post: async (localData: LocalInfoProps, userId: string): Promise<any> => {
    try {
      const formData = new FormData();
      const { image, id_local, id_user, ...rest } = localData;

      rest.type = "RESTAURANTES";
      rest.direction.lat = Number(localData.direction.lat);
      rest.direction.lng = Number(localData.direction.lng);

      const jsonData = JSON.stringify({ user: userId, ...rest });
      formData.append("createLocalRequest", jsonData);

      if (image) {
        formData.append("image", image);
      }

      const response = await api.post(LOCAL_URL + POST, formData);

      return response.data; // Devuelve la respuesta del backend tras el registro
    } catch (error) {
      handleAxiosError(error);
      throw error;
    }
  },
  
  put: async (localData: LocalInfoProps): Promise<any> => {
    try {
      const formData = new FormData();
      const local = mapLocalInfoToPut(localData);
      const { image,  ...rest } = local;

      const jsonData = JSON.stringify(rest);
      formData.append("localUpdateRequest", jsonData);

      if (image) {
        formData.append("image", image);
      }

      const response = await api.put(LOCAL_URL + PUT, formData);

      return response.data; // Devuelve la respuesta del backend tras el registro
    } catch (error) {
      handleAxiosError(error);
      throw error;
    }
  }
};
