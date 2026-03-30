import type { LocalInfoProps } from "../../interface/LocalInfo";

export function mapLocalInfoToPut(local: LocalInfoProps) {
  return {
    id: local.id_local,
    name: local.name,
    description: local.description,
    phone: local.phone,
    direction: {
      lat: Number(local.direction.lat),
      lng: Number(local.direction.lng),
    },
    image: local.image
  };
}