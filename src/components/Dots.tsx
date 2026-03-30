import { useEffect, useRef, useState } from "react";
import type { DotsProps } from "../interface/Dots";
import DotButton from "./DotButton";

function Dots({ images, onClick, style, currentIndex }: DotsProps) {
  const [translate, setTranslate] = useState(0);
  const slides = useRef(0);

  const {
    dotActiveColor = "bg-primary-yellow",
    dotDefaultColor = "border-primary-yellow border",
    boxStyle = "",
  } = style || {};

  const expectedDots = 5;
  const maxDots = images.length < expectedDots ? images.length : expectedDots;
  const defaultDotSize = 12;
  const activeDotSize = 16;
  const gapBetweenDots = 8;
  const dotBoxSize =
    gapBetweenDots * (maxDots - 1) +
    defaultDotSize * (maxDots - 1) +
    activeDotSize;
  const stepSize = 20;
  const lastImageIndex = images.length - 1;

  const handleTranslate = () => {
    let movingTranslate = 0;
    const totalSlides = images.length - maxDots;

    /* Moves forward */
    if (
      currentIndex + 1 - slides.current === maxDots &&
      slides.current !== totalSlides
    ) {
      slides.current += 1;
      movingTranslate = -((currentIndex - (maxDots - 2)) * stepSize);

      /* Moves backward */
    } else if (currentIndex + 1 - slides.current === 1 && currentIndex !== 0) {
      slides.current -= 1;
      movingTranslate = -((currentIndex - 1) * stepSize);

      /* Resets de translate */
    } else if (currentIndex === 0) {
      movingTranslate = 0;
      slides.current = 0;

      /* Goes to the last slide */
    } else if (currentIndex === lastImageIndex) {
      movingTranslate = -(images.length - maxDots) * stepSize;
      slides.current = totalSlides;

      /* Frozes de translate */
    } else {
      movingTranslate =
        -(images.length - (images.length - slides.current)) * stepSize;
    }

    setTranslate(movingTranslate);
  };

  useEffect(() => {
    handleTranslate();
  }, [currentIndex]);

  return (
    <div
      className={`h-[24px] flex overflow-hidden ${boxStyle}`}
      style={{ width: `${dotBoxSize}px` }}
    >
      <div
        className={`w-full transition-transform duration-200 ease-in-out items-end flex gap-[8px] justify-start`}
        style={{ transform: `translateX(${translate}px)` }}
      >
        {images.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onClick(index)}
            style={{
              dotSize: index === currentIndex ? activeDotSize : defaultDotSize,
              dotColor:
                index === currentIndex ? dotActiveColor : dotDefaultColor,
            }}
            aria={`Dot ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Dots;