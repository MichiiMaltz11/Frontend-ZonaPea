// src/components/CommentsSection.tsx
import { LuTrash2 } from "react-icons/lu";
import { twMerge } from "tailwind-merge";
import type { FormHeaderProps } from "../interface/FromHeader";
import IconText from "./IconText";
import Text from "./Text";

export default function FormHeader({
  title,
  deleteOption,
  className,
  onClick
}: FormHeaderProps) {
  const mainWrapper = "bg-primary-blue py-3 px-4.5 flex flex-row justify-between";
  const mergeMainWrapper = twMerge(mainWrapper, className?.mainWrapper);
  const baseTitle = "text-white font-semibold text-xl";
  const mergeTitle = twMerge(baseTitle, className?.title);
  const baseIcon = "stroke-1 text-primary-blue";
  const mergeIcon = twMerge(baseIcon, className?.icon);
  const iconText = "text-[1em] font-semibold text-primary-blue";
  const mergeIconText = twMerge(iconText, className?.iconText);
  const iconTextWrapper = "cursor-pointer flex-row-reverse";
  const mergeIconTextWrapper = twMerge(iconTextWrapper, className?.iconWrapper);


  return (
    <section className={mergeMainWrapper}>
      <Text text={title} className={mergeTitle} />
        {deleteOption && <IconText icon={LuTrash2} onClick={onClick} text="Eliminar platillo" className={{wrapper: mergeIconTextWrapper, text:mergeIconText, icon:mergeIcon}} />} 
    </section>
  );
}
