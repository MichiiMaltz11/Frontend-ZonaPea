// src/services/userXLocalService.ts
import api, { handleAxiosError } from './api';
import axios, { AxiosError } from 'axios';
import type { UserXLocal } from './interfaces';
import { API_ENDPOINTS, API_METHODS } from '../config/api';

export const UserXLocalService = {
  getByLocalIdANDUserId: async (userId: string, localId: string): Promise<UserXLocal | null> => {
    try {
      const response = await api.get<{ found: boolean }>(`/${API_ENDPOINTS.FAVORITE}/${API_METHODS.GET}`, {params: { userId, localId }});
      return { userId, localId, isFavorite: response.data.found };
    } catch (error) {
      if (isAxiosError(error) && error.response?.status === 404) {
        return { userId, localId, isFavorite: false };
      }
      return handleAxiosError(error);
    }
  },

  post: async (userId: string, localId: string): Promise<UserXLocal> => {
    try {
      await api.post(`/${API_ENDPOINTS.FAVORITE}/${API_METHODS.POST}`, { userId, localId });
      return { userId, localId, isFavorite: true };
    } catch (error) {
      return handleAxiosError(error);
    }
  },

  delete: async (userId: string, localId: string): Promise<void> => {
    try {
      await api.delete(`/${API_ENDPOINTS.FAVORITE}/${API_METHODS.DELETE}`, { params: { userId, localId } });
    } catch (error) {
      handleAxiosError(error);
    }
  },
};

function isAxiosError(error: any): error is AxiosError {
    return axios.isAxiosError(error);
}
