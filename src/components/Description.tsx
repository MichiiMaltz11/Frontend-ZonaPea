// src/components/CommentsSection.tsx
import { twMerge } from "tailwind-merge";
import type { DescriptionProps } from "../interface/Description";
import Text from "./Text";

export default function Description({
  description,
  className,
}: DescriptionProps) {
  const baseWrapper = "flex flex-col gap-2";
  const mergeWrapper = twMerge(baseWrapper, className?.wrapper);

  return (
    <section className={mergeWrapper}>
      <Text text="Descripción" className="font-semibold text-2xl" />
      <Text text={description} className="text-[0.8em]" />
    </section>
  );
}
