import api, { handleAxiosError } from "./api";
import type { SubreviewProps } from "../interface/serviceInterface/Request/Subreview";
import { API_ENDPOINTS, API_METHODS } from "../config/api";
import type { ReviewProps } from "../interface/serviceInterface/Request/Review";

const SUBREVIEW_URL = API_ENDPOINTS.SUBREVIEW;
const { GET, GETALL, POST, PUT, DELETE } = API_METHODS;

export const SubreviewService = {
  // Obtener todas las subreviews de una review
  getByReviewId: async (reviewId: string): Promise<SubreviewProps[]> => {
    try {
      const response = await api.get<SubreviewProps[]>(
        `${API_ENDPOINTS.SUBREVIEW}/${reviewId}`
      );
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      throw error;
    }
  },

  // Crear una subreview (respuesta a una review)
  create: async (review: SubreviewProps, localId: string): Promise<any> => {
    try {
      const payload = {
        content: review.content,
        idUser: review.userId,
        idReview: review.reviewId,
      };

      console.log(payload);
      

      const response = await api.post(SUBREVIEW_URL + POST + `/${localId}`, payload);

      return response.data; // Devuelve la respuesta del backend tras el registro
    } catch (error) {
      handleAxiosError(error);
      throw error;
    }
  },

  // Actualizar una subreview
  update: async (
    subreviewId: string,
    data: Partial<Omit<SubreviewProps, "subreviewId">>
  ): Promise<SubreviewProps> => {
    try {
      const response = await api.put<SubreviewProps>(
        `${API_ENDPOINTS.SUBREVIEW}/${subreviewId}`,
        data
      );
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      throw error;
    }
  },

  // Eliminar una subreview
  delete: async (subreviewId: string): Promise<void> => {
    try {
      await api.delete(`${API_ENDPOINTS.SUBREVIEW}/${subreviewId}`);
    } catch (error) {
      handleAxiosError(error);
      throw error;
    }
  },
};
