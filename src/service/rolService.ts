// src/services/rolService.ts
import api, { handleAxiosError } from './api';

export const RolService = {
  getById: async (rolId: string): Promise<{ nombre: string }> => {
    try {
      const response = await api.get<{ nombre: string }>(`/rol/${rolId}`);
      return response.data;
    } catch (error) {
      return handleAxiosError(error);
    }
  }
};