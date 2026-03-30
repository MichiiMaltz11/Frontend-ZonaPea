import type { PlateInfoProps } from "./PlateInfo";

export interface MenuProps {
  plateInfo: PlateInfoProps[];
  mode: "view" | "edit";
  onAdd?: () => void;
  onEdit?: (plate : PlateInfoProps) => void;
}