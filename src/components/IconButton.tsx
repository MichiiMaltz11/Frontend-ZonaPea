// src/components/IconButton.tsx
import type { IconButtonProps } from '../interface/IconButton';
import { twMerge } from 'tailwind-merge';

export default function IconButton({
  icon: Icon,
  onClick,
  className,
  onMouseEnter,
  onMouseLeave,
  isDisabled = false
}: IconButtonProps){
  const baseButton = isDisabled ? "h-auto w-auto opacity-0" : "cursor-pointer h-auto w-auto";
  const mergeButton = twMerge(baseButton, className?.button);

  const baseIcon = "text-white text-4xl"
  const mergeIcon = twMerge(baseIcon, className?.icon);

  return (
    <button className={mergeButton} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} disabled = {isDisabled}>
        <Icon className={mergeIcon} />    
    </button>
  );
};