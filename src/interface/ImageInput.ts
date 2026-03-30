export interface ImageInputProps{
    onImageChange: (image: string | null | File) => void;
    label: string;
    imageRecieved: string | null | File;
    className?:{
        wrapper?: string;
    }
}