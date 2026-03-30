export interface LocalInfoRequestProps {
  id_local?: string;     
  name: string;
  description: string;
  phone: string;
  image: File | null | string;
  direction: string;
  type: string;
  schedule: string;
  id_user?: string;      
}