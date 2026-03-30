import { useState } from "react";
import { ImSpinner2 } from "react-icons/im";
import type { ImageProps } from "../interface/Image";

function Image({ image, style, priority }: ImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const isPriority = priority ?? true;
  const loading = isPriority ? "eager" : "lazy"

  const handleLoad = () => {
    setIsLoading(false);
  }

  return (
    <figure className={`relative w-full h-full ${style} ${isPriority ? "visible" : "invisible"}`}>
      {isLoading &&
        <div className="bg-black opacity-50 absolute w-full h-full z-10 flex justify-center items-center">
          <ImSpinner2 className="text-primary-yellow text-8xl z-20 animate-spin" />
        </div>
      }
      <img
        src={image}
        className="absolute w-full h-full object-cover"
        loading={loading}
        onLoad={handleLoad}
      />
    </figure>
  );
}

export default Image;