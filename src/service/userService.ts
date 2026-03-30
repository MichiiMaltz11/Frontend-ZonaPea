import api, { ApiError, handleAxiosError } from "./api";
import { API_BASE_URL, API_ENDPOINTS, API_METHODS } from "../config/api";
import type { UserGeneralInfoProps, UserRegistrationData } from "./interfaces";

const USER_URL = API_ENDPOINTS.USER;
const { GET, GETALL, POST, PUT, DELETE } = API_METHODS;

import { jwtDecode } from "jwt-decode";
import { setCookie } from "../utils/cookies";

export const UserService = {
  // Método para el login
  login: async (credentials: { email: string; password: string }) => {
    try {
      const response = await api.post("/auth/login", credentials);
      const { accessToken, type } = response.data;

      const decodedToken: any = jwtDecode(accessToken);

      setCookie("authToken", accessToken, decodedToken.exp);
    } catch (error) {
      handleAxiosError(error);
      throw error;
    }
  },

  post: async (userData: UserRegistrationData): Promise<any> => {
    try {
      const formData = new FormData();

      const { username, email, password, image } = userData;
      const rol = userData.rolId;
      const jsonData = JSON.stringify({ username, email, password, rol });
      formData.append("createUserRequest", jsonData);

      if (image) {
        formData.append("image", image);
      }

      const response = await api.post(USER_URL + POST, formData);
      return response.data; // Devuelve la respuesta del backend tras el registro
    } catch (error) {
      handleAxiosError(error);
      throw error;
    }
  },

  putSensitiveData: async (
    userId: string,
    newPassword: string
  ): Promise<void> => {
    try {
      await api.put(`/user/sensitive/${userId}`, { password: newPassword });
    } catch (error) {
      handleAxiosError(error);
      throw error;
    }
  },

  uploadProfileImage: async (
    userId: string,
    formData: FormData
  ): Promise<string> => {
    try {
      const response = await api.put(
        `/users/${userId}/profile-image`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data.imageUrl;
    } catch (error) {
      handleAxiosError(error);
      throw error;
    }
  },

  updateProfile: async (
    userId: string,
    data: Partial<UserGeneralInfoProps>
  ): Promise<UserGeneralInfoProps> => {
    try {
      // El endpoint 'put' para user en tu endpoint.txt espera un objeto con userId y los campos a actualizar
      // data: Partial<UserGeneralInfoProps> significa que puedes enviar solo los campos que quieres actualizar
      const formData = new FormData();
      const { img, ...rest } = data;
      const jsonData = JSON.stringify({ id:userId, ...rest });
      console.log(jsonData);
      
      formData.append("updateUserRequest", jsonData);

      if (img) {
        formData.append("image", img);
      }

      const response = await api.put(USER_URL + PUT, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      
      return response.data; // Devuelve la respuesta del backend tras el registro
    } catch (error) {
      handleAxiosError(error);
      throw error;
    }
  },

  deleteProfileImage: async (userId: string): Promise<void> => {
    try {
      await api.delete(`/users/${userId}/profile-image`);
    } catch (error) {
      handleAxiosError(error);
      throw error;
    }
  },

  getById: async (userId: string): Promise<UserGeneralInfoProps> => {
    try {
      const response = await api.get(USER_URL + GETALL);

      const img: File | null = response.data.data.imageUrl || null;

      const user:UserGeneralInfoProps = response.data.data.find((u: UserGeneralInfoProps) => u.id === userId);

      // Asumiendo que el backend devuelve 'id', 'username', 'img', 'rolId'
      return user;
    } catch (error) {
      handleAxiosError(error);
      throw error;
    }
  },

  findByEmail: async (email: string): Promise<UserGeneralInfoProps> => {
    try {
      const response = await api.get(USER_URL + GET + `/${email}`);

      const { id, username, idRol } = response.data.data;

      const img: File | null = response.data.data.imageUrl || null;

      // Asumiendo que el backend devuelve 'id', 'username', 'img', 'rolId'
      return { id, username, email: email, img: img, rolId: idRol };
    } catch (error) {
      handleAxiosError(error);
      throw error;
    }
  },
};
