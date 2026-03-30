import { useEffect, useState } from "react";
import IconButton from "./IconButton";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import type { CarouselProps } from "../interface/Carousel";
import Dots from "./Dots";
import CarouselContent from "./CarouselContent";

function Carousel({ images, className, autoSlide }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = images.length || 0;
  let touchStartX = 0;

  useEffect(() => {
    if (autoSlide && totalSlides > 0) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? totalSlides - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % totalSlides);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const detectSwipeAt = 50;

    if (touchStartX - touchEndX > detectSwipeAt) {
      nextSlide();
    } else if (touchEndX - touchStartX > detectSwipeAt) {
      prevSlide();
    }
  };

  return (
    <section className="w-full flex flex-col items-center">
      <div
        className={`relative max-w-[600px] overflow-hidden ${className}`}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <span className="flex w-full h-full absolute justify-between items-center opacity-0 max-[1064px]:hidden hover:opacity-100 z-10 transition-opacity duration-300 delay-75 ease-in-out">
          <div className="bg-black opacity-30 absolute w-full h-full" />
          <IconButton
            className={{ icon: "text-primary-yellow", button: "z-20" }}
            icon={IoIosArrowBack}
            onClick={prevSlide}
          />
          <IconButton
            className={{ icon: "text-primary-yellow", button: "z-20" }}
            icon={IoIosArrowForward}
            onClick={nextSlide}
          />
        </span>

        <CarouselContent currentIndex={currentIndex} images={images} />
      </div>
      <Dots
        currentIndex={currentIndex}
        images={images}
        onClick={(index) => setCurrentIndex(index)}
      />
    </section>
  );
}

export default Carousel;
