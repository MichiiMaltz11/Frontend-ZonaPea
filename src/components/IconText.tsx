// src/components/IconText.tsx
import type { IconTextProps } from '../interface/IconText';
import Text from './Text';
import { twMerge } from 'tailwind-merge';

export default function IconText({
  icon: Icon,
  text,
  className,
  onClick
}: IconTextProps){
  const baseWrapper = "flex items-center gap-2";
  const mergeWrapper = twMerge(baseWrapper, className?.wrapper);

  const baseIcon = "text-black text-xl"
  const mergeIcon = twMerge(baseIcon, className?.icon);

  return (
    <div className={mergeWrapper} onClick={onClick}>
        <Icon className={mergeIcon} />
        <Text text={text} className={className?.text}/>
    </div>
  );
};