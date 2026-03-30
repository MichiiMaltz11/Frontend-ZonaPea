// src/components/Rating.tsx
import { twMerge } from "tailwind-merge";
import { LuStar } from "react-icons/lu";
import IconButton from "./IconButton";
import { useState } from "react";
import type { RatingProps } from "../interface/Rating";

export default function Rating({ rating, className, isDisabled = true, onClick }: RatingProps) {
  const maxStars = 5;
  const [starsHovered, setStarHovered] = useState(0);
  const [starsClicked, setStarClicked] = useState(rating ?? 0);  

  const disabledBttn = "stroke-yellow-400 h-full w-full";
  const activeBttn =
    "duration-150 ease-in-out active:stroke-yellow-50 active:fill-yellow-50";
  const finalBttn = isDisabled
    ? disabledBttn
    : twMerge(disabledBttn, activeBttn);

  const baseWrapper = "flex gap-2";
  const mergeWrapper = twMerge(baseWrapper, className?.wrapper);

  const handleOnMouseEnter = (index: number) => {
    setStarHovered(index + 1);
  };

  const handleOnMouseLeave = () => {
    setStarHovered(0);
  };

  const handleOnClick = (index: number) => {
    setStarClicked(index + 1);
    onClick?.(index + 1);
  };

  const getClass = (i: number) => {
    let hoverClass = "";

    if (starsClicked != 0 && i + 1 <= starsClicked) {
      hoverClass = "stroke-yellow-400 fill-yellow-400";
    }

    if (starsHovered != 0 && i + 1 <= starsHovered) {
      hoverClass = "fill-yellow-200 stroke-yellow-200";
    }

    return twMerge(finalBttn, hoverClass);
  };

  return (
    <section className={mergeWrapper}>
      {Array.from({ length: maxStars }).map((_, i) => {
        const hoverClass = getClass(i);

        return (
          <IconButton
            key={i}
            icon={LuStar}
            onClick={() => handleOnClick(i)}
            onMouseEnter={() => handleOnMouseEnter(i)}
            onMouseLeave={handleOnMouseLeave}
            className={{ icon: hoverClass, button: "opacity-100" }}
            isDisabled={isDisabled}
          />
        );
      })}
    </section>
  );
}
