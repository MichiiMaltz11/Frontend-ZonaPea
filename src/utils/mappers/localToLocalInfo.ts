import type { LocalInfoProps } from "../../interface/LocalInfo";

export function mapLocalToLocalInfoProps(local: any): LocalInfoProps {
  return {
    id_local: local.id,
    id_user: local.idUser,
    name: local.name,
    description: local.description,
    phone: local.phone,
    type: local.type,
    schedule: local.schedule,
    direction: {
      lat: Number(local.direction?.lat ?? 0),
      lng: Number(local.direction?.lng ?? 0),
    },
    image: local.imageUrl
  };
}