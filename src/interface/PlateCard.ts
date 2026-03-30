import type { PlateInfoProps } from "./PlateInfo";

export interface PlateCardProps{
    plateInfo?: PlateInfoProps;
    mode: "edit" | "create" | "view";
    onClick?: () => void;
}