import type { PlateInfoProps } from "../../interface/PlateInfo";

export function mapBackendPlateToFrontend(backendPlate: any, localId: string): PlateInfoProps {
  return {
    id: backendPlate.id,
    name: backendPlate.name,
    price: backendPlate.price,
    image: backendPlate.imageUrl,
    local: localId,
  };
}