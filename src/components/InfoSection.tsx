// src/components/CommentsSection.tsx
import { useState } from "react";
import { LuClock, LuMail, LuMapPin, LuPhone } from "react-icons/lu";
import { twMerge } from "tailwind-merge";
import type { InfoSectionProps } from "../interface/InfoSection";
import Text from "./Text";
import TextArea from "./TextArea";
import IconText from "./IconText";
import Input from "./Input";

export default function InfoSection({ info, className }: InfoSectionProps) {
  const baseInternalWrapper = "flex flex-col";
  const mergeInternalWrapper = twMerge(
    baseInternalWrapper,
    className?.internalWrapper
  );
  const baseExternalWrapper = "flex flex-col gap-1";
  const mergeExternalWrapper = twMerge(
    baseExternalWrapper,
    className?.externalWrapper
  );

  const infoStructured = [
    {
      title: "Teléfono:",
      content: info.phone,
      icon: LuPhone,
      key: "phone",
    },
    {
      title: "Horario:",
      content: info.schedule,
      icon: LuClock,
      key: "schedule",
    },
    {
      title: "Latitud (coordenada):",
      content: info.direction.lat.toString(),
      icon: LuMapPin,
      key: "direction",
    },
    {
      title: "Longitud (coordenada):",
      content: info.direction.lng.toString(),
      icon: LuMapPin,
      key: "direction",
    },
  ];

  return (
    <section className={mergeExternalWrapper}>
      {infoStructured.map((info) => (
        <div className={mergeInternalWrapper} key={info.title}>
          <Text text={info.title} className="text-[1em] font-semibold" />

          <IconText
            icon={info.icon}
            text={info.content}
            className={{
              text: "text-[0.9em]",
              wrapper: "items-center gap-1.5",
              icon: "text-[1em]",
            }}
          />
        </div>
      ))}
    </section>
  );
}
