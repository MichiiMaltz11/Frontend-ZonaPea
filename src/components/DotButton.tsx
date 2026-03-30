import type { DotButtonProps } from "../interface/DotButton";

function DotButton({
  style,
  onClick,
  aria,
}: DotButtonProps) {
  const { dotColor = "", dotSize = "" } = style || {};

  return (
    <button
      className={`flex-shrink-0 rounded-full transition-colors duration-200 ease-in-out ${dotColor}`}
      style={{ width: `${dotSize}px`, height: `${dotSize}px` }}
      onClick={() => onClick()}
      aria-label={aria}
    ></button>
  );
}

export default DotButton;