// src/components/CommentsSection.tsx
import { LuTrash2 } from "react-icons/lu";
import { twMerge } from "tailwind-merge";
import type { FormHeaderProps } from "../interface/FromHeader";
import IconText from "./IconText";
import Text from "./Text";
import Carousel from "./Carousel";
import type { CarouselSectionProps } from "../interface/CarouselSection";

export default function CarouselSection(local: CarouselSectionProps) {
  const images = [
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1526178613658-3f1622045557?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1465101178521-c1a9136a3fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
  ];

  const localImages = local.localInfo.map((localItem) => {
    return localItem.image;
  });

  /* GET IMAGES FROM THE LOCALS BEST RATED */


  return (
    <section className="flex flex-col items-center py-10 px-32 gap-5">
      <Text text="Mejores Calificados" className="font-bold" />
      <Carousel
        images={ localImages || images}
        className="max-w-none h-[30rem] w-full rounded-2xl"
        autoSlide={true}
      />
    </section>
  );
}
