export interface FormFooterProps<>{
    handleSubmit: ()=>void; /* Recieves only the function that will save the data, but the data is passed
    where the function was originally creatd */
    handleCancel: ()=>void;
}