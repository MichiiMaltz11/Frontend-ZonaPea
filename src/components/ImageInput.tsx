// src/components/CommentsSection.tsx
import { twMerge } from "tailwind-merge";
import type { ImageInputProps } from "../interface/ImageInput";
import ImageSelector from "./ImageSelector";
import { useState } from "react";
import IconButton from "./IconButton";
import { FaCircleXmark } from "react-icons/fa6";
import Text from "./Text";
import { getImageSrc } from "../utils/verifyImgType";

export default function ImageInput({
  className,
  onImageChange,
  label,
  imageRecieved
}: ImageInputProps) {
  const baseWrapper =
    "flex flex-col rounded-sm border border-white p-2 gap-2 w-52";
  const mergeWrapper = twMerge(baseWrapper, className?.wrapper);
  const [image, setImage] = useState<string | File | null>(imageRecieved || null);
  const [inputKey, setInputKey] = useState(Date.now());

  const handleDelete = () => {
    setImage(null);
    onImageChange(null);
    setInputKey(Date.now());
  };

  const handleImageChange = (image: string | null | File) => {
    setImage(image);
    onImageChange(image);
  };

  return (
    <>
      <Text text={label} className="text-sm font-semibold mb-1.5 text-gray-700" />
      <section className={mergeWrapper}>
        <ImageSelector
          inputKey={inputKey.toString()}
          onImageSelected={handleImageChange}
          disabled={false}
          className="border border-slate-600 bg-white text-slate-600 hover:bg-gray-400 active:bg-gray-500 w-30 text-[0.7em] px-2"
        />

        <div className="bg-gray-300 w-full h-24 p-2 rounded-sm">
          {image && (
            <figure className="h-full w-28 relative">
              <img
                src={getImageSrc(image)}
                className="w-full h-full absolute object-cover"
              />
              <div className="absolute w-full h-full opacity-0 hover:opacity-100 duration-200 ease-in-out">
                <div className="w-full h-full bg-black opacity-50" />
                <IconButton
                  icon={FaCircleXmark}
                  onClick={handleDelete}
                  className={{
                    icon: "text-red-800 text-[1em]",
                    button: "absolute right-1 top-1",
                  }}
                />
              </div>
            </figure>
          )}
        </div>
      </section>
    </>
  );
}
