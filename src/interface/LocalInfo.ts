export interface LocalInfoProps{
    id_local?: string;
    id_user?: string;
    name: string;
    description: string;
    phone: string;
    type?: string;
    schedule: string;
    direction: {lat: number, lng: number}
    image: File | null | string;
}