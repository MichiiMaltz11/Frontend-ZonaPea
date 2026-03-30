// src/components/CommentsSection.tsx
import type { PlateFormProps } from "../interface/PlateForm";
import ImageInput from "./ImageInput";
import Input from "./Input";

export default function PlateForm({ onChange, value }: PlateFormProps) {
  const plateInitialInfo = [
    {
      title: "Nombre",
      placeholder: "Ingrese el nombre del platillo",
      info: value.name,
      key: "name",
    },
    {
      title: "Precio",
      placeholder: "Ingrese el precio del platillo",
      info: value.price,
      key: "price",
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value:newValue } = e.target;
    const cleaned = newValue.replace(/\n/g, " ");
    onChange({...value, [name]:cleaned})
  };

  return (
    <form className="flex flex-col gap-3">
      {plateInitialInfo.map((plate) => (
        <Input
          key={plate.key}
          id={plate.key}
          name={plate.key}
          value={plate.info}
          placeholder={plate.placeholder}
          onChange={handleChange}
          className="shadow-none text-sm"
          label={plate.title}
        />
      ))}
      <ImageInput
        label="Foto del platillo"
        onImageChange={(file) =>
          onChange({ ...value, image: file })
        }
        imageRecieved={value.image}
      />
    </form>
  );
}
