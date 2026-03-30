// src/services/imageService.ts
import api, { handleAxiosError } from './api';
import type { ImageResponse } from './interfaces';
import { API_BASE_URL } from '../config/api'; // Necesario para la URL de imagen placeholder

export const ImageService = {
  getById: async (imageId: string): Promise<ImageResponse> => {
    try {
      const response = await api.get<ImageResponse>(`/image/${imageId}/url`);
      return response.data;
    } catch (error) {
      return handleAxiosError(error);
    }
  },

  // Nota: Tu `endpoint.txt` para `Image.post` espera `{ localId, url }`.
  // Si tu backend tiene un endpoint para subir archivos, esto deberá ser una petición FormData.
  post: async (file: File, localId: string): Promise<ImageResponse> => {
    console.warn("ADVERTENCIA: El método ImageService.post está adaptado. Si tu backend maneja subida de archivos, esta función deberá ser reescrita para usar FormData.");
    try {
      const mockImageUrl = `${API_BASE_URL}/uploaded/${file.name}`; // Simulación de URL
      const payload = { localId, url: mockImageUrl };
      const response = await api.post<ImageResponse>('/image', payload);
      return response.data;
    } catch (error) {
      return handleAxiosError(error);
    }
  },

  put: async (imageId: string, newUrl: string): Promise<ImageResponse | undefined> => {
    try {
      const response = await api.put<ImageResponse>(`/image/${imageId}`, { url: newUrl });
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      return undefined;
    }
  },

  delete: async (imageId: string): Promise<void> => {
    try {
      await api.delete(`/image/${imageId}`);
    } catch (error) {
      handleAxiosError(error);
    }
  },
};