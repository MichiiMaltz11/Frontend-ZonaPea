// src/config/api.ts
export const API_BASE_URL = 'http://localhost:8080/api'; // Reemplaza con la URL real de tu backend
// Si tu backend tiene diferentes prefijos para cada recurso, puedes definirlos aquí también
export const API_ENDPOINTS = {
  LOCAL: '/local',
  PLATO: '/plate',
  IMAGE: '/image',
  USER: '/user',
  REVIEW: '/review',
  SUBREVIEW: '/subReview',
  FAVORITE: '/favorite', // Para favoritos
  // ... otros endpoints si los hay
};

export const API_METHODS = {
  GET: '/get',
  GETALL: '/getAll',
  POST: '/create',
  PUT: '/update',
  DELETE: '/delete',
}

export const FRONTEND_PORT = 5175;
export const ROL_DEFAULT_ID = '65c15b08-4c86-49d4-a0de-cf4cb15aa4d2'; 
export const ADMIN_DEFALT_ID = 'c694c269-4526-4198-ab63-e7df571a5056';
export const LOCAL_MANAGER_ID = '8d429772-e463-48f2-bc94-0bade9016d37';