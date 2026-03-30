export interface FormHeaderProps{
    title: string;
    deleteOption: boolean;
    onClick?: () => void;
    className?:{
        mainWrapper?: string;
        title?: string;
        icon?: string;
        iconText?: string;
        iconWrapper?: string;
    }
}