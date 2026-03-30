// src/components/CommentsSection.tsx
import type { FormFooterProps } from "../interface/FormFooter";
import Button from "./Button";
import Text from "./Text";

export default function FormFooter({
  handleSubmit,
  handleCancel,
}: FormFooterProps) {
  const buttonOption = [
    {
      name: "Cancelar",
      onClick: handleCancel,
      buttonStyle:
        "bg-primary-blue hover:bg-primary-blue-hover active:bg-primary-blue-pressed cursor-pointer",
    },
    {
      name: "Guardar",
      onClick: handleSubmit,
      buttonStyle: "bg-primary-yellow hover:bg-amber-400 active:bg-amber-500 cursor-pointer",
    },
  ];

  return (
    <footer className="flex justify-end gap-3">
      {buttonOption.map((option, index) => (
        <Button
          className={option.buttonStyle}
          key={index}
          onClick={option.onClick}
        >
          <Text
            className="text-sm font-semibold text-white"
            text={option.name}
          />
        </Button>
      ))}
    </footer>
  );
}
