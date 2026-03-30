// src/components/CommentsSection.tsx
import type { PlateCardProps } from "../interface/PlateCard";
import Text from "./Text";
import IconButton from "./IconButton";
import { IoAdd } from "react-icons/io5";
import { GrFormEdit } from "react-icons/gr";
import { getImageSrc } from "../utils/verifyImgType";

export default function PlateCard({
  plateInfo,
  mode,
  onClick,
}: PlateCardProps) {
  return (
    <section className="flex flex-col justify-start p-2 rounded-tl-2xl rounded-br-2xl shadow-border-box duration-200 ease-in-out">
      <Text text={plateInfo?.name || "Agregar"} className="text-xl" />
      <Text
        text={(plateInfo ? "$" + plateInfo?.price.toString() : "$0.00")}
        className="text-xl font-semibold mb-2"
      />

      <figure className="w-50 h-32 rounded-tl-2xl rounded-br-2xl relative overflow-clip">
        {plateInfo?.image && mode != "create" ? (
          <>
            <img
              className="object-cover absolute w-full h-full"
              src={getImageSrc(plateInfo?.image)}
              alt=""
            />
            {mode == "edit" && (
              <div
                className="flex items-center w-full h-full justify-center cursor-pointer duration-200 absolute z-10 ease-in-out hover:shadow-2xl"
                onClick={onClick}
              >
                <div className="bg-gray-400 z-10 absolute w-full h-full hover:bg-gray-500 opacity-70" />
                <IconButton
                  icon={GrFormEdit}
                  onClick={() => {}}
                  className={{ icon: "text-gray-950 text-7xl", button: "z-0" }}
                />
              </div>
            )}
          </>
        ) : (
          <div
            className="bg-gray-400 w-full h-full flex items-center justify-center cursor-pointer hover:bg-gray-500 duration-200 ease-in-out hover:shadow-2xl"
            onClick={onClick}
          >
            <IconButton
              icon={IoAdd}
              onClick={() => {}}
              className={{ icon: "text-primary-yellow text-5xl" }}
            />
          </div>
        )}
      </figure>
    </section>
  );
}
