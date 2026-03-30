import type { LocalSpecificInfoProps } from "./LocalSpecificInfo";

export interface InfoSectionProps {
  info: LocalSpecificInfoProps
  className?: {
    internalWrapper?: string;
    externalWrapper?: string;
  };
}
