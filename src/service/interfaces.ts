
export interface AuthResponse {
    token: string;
    userId: string;
    username: string;
  }
  
  export interface NewUser {
    username: string;
    email: string;
    password: string;
    image: string;
    rolId: string;
  }
  
  export interface UpdateNormalUserData {
    username?: string;
    image?: string;
  }
  
  export interface User {
    id: string;
    username: string;
    email: string;
    image: string;
    rolId: string;
  }
  
  export interface Local {
    id: string;
    name: string;
    description: string;
    phone: string;
    address: string;
    type: string;
    schedule: string;
    image: string;
    latitude?: number;
    longitude?: number;
  }
  
  export interface Plato {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    localId: string;
  }
  
  export interface Review {
    id: string;
    comment: string;
    rating: number;
    userId: string;
    localId: string;
    date: string;
  }
  
  export interface Subreview {
    id: string;
    content: string;
    reviewId: string;
    userId: string;
  }
  
  export interface UserXLocal {
    userId: string;
    localId: string;
    isFavorite: boolean;
  }
  
  export interface ImageResponse {
    url: string;
  }

  // Define una interfaz para los datos de registro de usuario para mejor tipado
  export interface UserRegistrationData {
  username: string;
  email: string;
  password: string;
  image?: string; // Opcional, ya que puede ser una cadena vacía
  rolId: string; // O el tipo de ID de rol que uses (ej. number)
  }

// Define una interfaz para la información general del usuario que el login devuelve
  export interface UserGeneralInfoProps {
  id: string;
  username: string;
  email: string;
  img: File | null | string;
  rolId: string; // O el tipo de ID de rol que uses (ej. number)
  }