import { useEffect, useState } from "react";
import type { CarouselContentProps } from "../interface/CarouselContent";
import Image from "./Image";
import { getImageSrc } from "../utils/verifyImgType";

function CarouselContent({ currentIndex, images }: CarouselContentProps) {
  const [range, useRange] = useState([0, 0, 0]);

  useEffect(() => {
    useRange([currentIndex - 1 < 0 ? images.length - 1 : currentIndex - 1, currentIndex, currentIndex + 1 > images.length - 1 ? 0 : currentIndex + 1])
  }, [currentIndex])

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div
        className="flex transition-transform duration-[0.7s] ease-in-out w-full h-full"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`
        }}
      >
        {images.map((img, index) => (
          <Image image={getImageSrc(img)} style="flex-shrink-0" key={index} priority={range.includes(index)} />
        ))}
      </div>
    </div>
  );
}

export default CarouselContent;