import { useEffect, useState } from "react";
import type { LocalInfoProps } from "../interface/LocalInfo";
import type { LocalSpecificInfoProps } from "../interface/LocalSpecificInfo";
import type { useLocalInfoProps } from "../interface/hooks/useLocalSection";
import { ApiError, LocalService } from "../service";
import { useUser } from "../context/UserContext";

export const useLocalSection = ({ id }: useLocalInfoProps) => {
  const {user, isLocalManager} = useUser();

  const [showForm, setShowForm] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [localInfo, setLocalInfo] = useState<LocalInfoProps>({
    description: "",
    direction: { lat: 0, lng: 0 },
    name: "",
    phone: "",
    schedule: "",
    type: "",
    image: null,
    id_local: "",
    id_user: "",
  });
  const [newLocalInfo, setNewLocalInfo] = useState<LocalInfoProps>({
    description: "",
    direction: { lat: 0, lng: 0 },
    name: "",
    phone: "",
    schedule: "",
    type: "",
    image: null,
    id_local: "",
    id_user: "",
  });

  const infoArray: LocalSpecificInfoProps = {
    phone: localInfo.phone,
    schedule: localInfo.schedule,
    direction: localInfo.direction,
  };

  const className = isFavorite
    ? "fill-red-700 text-red-700 hover:text-red-500 duration-200 ease-in-out hover:fill-red-500"
    : "text-red-700 hover:text-red-500 duration-200 ease-in-out";

  const isLocalOwner = isLocalManager() && (user?.id === localInfo.id_user);

  useEffect(() => {
    /* Get the local info with a service using the localId, make a function fetchImages for that */
    /* Search if the local is the favorite of the user and setIsFavorite based on that info */

    const fetchLocals = async () => {
      try {
        if(id){
          const data = await LocalService.getById(id); 
          setLocalInfo(data);
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

    fetchLocals();
  }, []);

  useEffect(() => {
    setNewLocalInfo(localInfo);
  }, [localInfo]);

  const handleSubmitPost = async () => {
    if (id) {
      const response = await LocalService.post(newLocalInfo, id);
    }

    /* Add it or edit an existing value with a service and then make a fetchImage, what is below
    of this comment will be deleted but it would be necessary some logic to know when to use
    the editService or the postService, maybe check if newLocalInfo has an id, if it has one then it's editService
    if not then postService */

    /* Do a fetch of the new data and save it in LocalInfo */

    setShowForm(false);
    setLocalInfo(newLocalInfo);
  };

  const handleSubmitPut = async () => {
    if (id) {
      const response = await LocalService.put(newLocalInfo);
    }

    /* Add it or edit an existing value with a service and then make a fetchImage, what is below
    of this comment will be deleted but it would be necessary some logic to know when to use
    the editService or the postService, maybe check if newLocalInfo has an id, if it has one then it's editService
    if not then postService */

    /* Do a fetch of the new data and save it in LocalInfo */

    setShowForm(false);
    setLocalInfo(newLocalInfo);
  };

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);

    /* Use the service to change the favorite status */
  };

  return {
    // States
    localInfo,
    setLocalInfo,
    newLocalInfo,
    setNewLocalInfo,
    showForm,
    setShowForm,
    setIsFavorite,
    isFavorite,
    // Constantes y helpers
    className,
    infoArray,
    // Métodos
    handleSubmitPost,
    handleFavoriteToggle,
    handleSubmitPut,
    isLocalOwner
  };
};
