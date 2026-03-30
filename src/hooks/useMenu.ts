import { useEffect, useState } from "react";
import type { PlateInfoProps } from "../interface/PlateInfo";
import { ApiError, PlateService } from "../service";

export const useMenu = (localId: string) => {
  const [plates, setPlates] = useState<PlateInfoProps[]>([]);
  const [editeModeOn, setEditeModeOn] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [selectedPlate, setSelectedPlate] = useState<PlateInfoProps>({
    id: "",
    name: "",
    price: 0,
    image: null,
    local: ""
  });
  const [deleteOptionActive, setDeleteOptionActive] = useState(false);

  const className = {
    button: editeModeOn
      ? "w-full cursor-pointer border-2 border-transparent bg-primary-yellow hover:bg-yellow-400"
      : "w-full cursor-pointer bg-transparent border-2 hover:border-yellow-400 hover:bg-transparent border-primary-yellow",
    text: editeModeOn
      ? "text-white text-xl font-semibold"
      : "text-primary-yellow text-xl font-semibold hover:text-yellow-400 duration-200 ease-in-out",
  };

  const text = editeModeOn ? "Terminar edición" : "Editar Menú";

  const mode : "edit" | "view" = editeModeOn ? "edit" : "view";

  const formTitle = editeModeOn ? "Editar Platillo" : "Agregar Platillo";

  useEffect(() => {
    /* Get all the Plates with a service, make a function fetchImages for that */

    const fetchPlates = async () => {
          try {
            if(localId){
              const data = await PlateService.getAll(localId); 
              
              setPlates(data);
            }
          } catch (err: any) {
            console.error("Error al obtener los locales:", err);
            // Manejo de errores mejorado con ApiError
            if (err instanceof ApiError) {
              console.log(err);
              
            } else {
              console.log("No se puede cargar el local. Inténtalo de nuevo más tarde.");
            }
          }
        };
    
        fetchPlates();
  }, [showForm]);

  const handleAddPlate = () => {
    setSelectedPlate({
      id: "",
      name: "",
      price: 0,
      image: null,
      local: ""
    });
    setShowForm(true);
    setDeleteOptionActive(false);
  };

  const handleEditPlate = (plate: PlateInfoProps) => {    
    setSelectedPlate(plate);
    setShowForm(true);
    setDeleteOptionActive(true);
  };

  const handleSubmit = async () => {
    if(selectedPlate.id){
      const response = await PlateService.update(selectedPlate);
    }else{
      const response = await PlateService.create(selectedPlate, localId);
    }

    setShowForm(false);
  };

  const handleDelete = async () => {
    const response = await PlateService.delete(selectedPlate);

    setShowForm(false);
  };

  return {
    // States
    plates,
    setPlates,
    editeModeOn,
    setEditeModeOn,
    showForm,
    setShowForm,
    selectedPlate,
    setSelectedPlate,
    deleteOptionActive,
    setDeleteOptionActive,
    // Constantes y helpers
    className,
    text,
    mode,
    formTitle,
    // Métodos
    handleAddPlate,
    handleEditPlate,
    handleSubmit,
    handleDelete,
  };
};
