// src/components/CommentsSection.tsx
import type { LocalFormProps } from "../interface/LocalForm";
import { getImageSrc } from "../utils/verifyImgType";
import ImageInput from "./ImageInput";
import Input from "./Input";
import TextArea from "./TextArea";

export default function LocalForm({ onChange, value }: LocalFormProps) {
  /* EXAMPLE:
    const [localInfo, setLocalInfo] = useState<LocalInfoProps>({
        name: "",
        description: "",
        direction: "",
        email: "",
        image: null,
        phone: "",
        schedule: ""
      });
        const [showDialog, setDialog] = useState(true);
    
        const handleSubmit = () => {
          const newData = localInfo;
        }
    
        const handleDelete = () => {
          const id = localInfo.id; - > It's the id that goes there 
        }
    
      return (
        <>
          <section>
            {showDialog && <FormContainer<LocalInfoProps>
              handleDelete={()=>{}}
              handleCancel={()=>setDialog(false)}
              handleSubmit={handleSubmit}
              title="Platillo"
              value={localInfo}
              onChange={setLocalInfo}
              deleteOption={false}
              form={({ value, onChange }) => (
                <LocalForm onChange={onChange} value={value} />
              )}
            />}
            
          </section>
        </>
      ); */

  const localInitialInfo = [
    {
      title: "Teléfono",
      placeholder: "Ingresa el número de tu local ej: 7777-7777",
      info: value.phone,
      key: "phone",
    },
    {
      title: "Horario",
      placeholder: "Ingresa el horario de tu local",
      info: value.schedule,
      key: "schedule",
    },
  ];

  const localInitialInfoDirection = [
    {
      title: "Latitud",
      placeholder: "Ingresa la latitud (coordenada) de tu local",
      info: value.direction.lat,
      key: "lat",
    },
    {
      title: "Longitud",
      placeholder: "Ingresa la longitud (coordenada) de tu local",
      info: value.direction.lng,
      key: "lng",
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value: newValue } = e.target;
    const cleaned = newValue.replace(/\n/g, " ");

    if (name === "lat" || name === "lng") {
      onChange({
        ...value,
        direction: {
          ...value.direction,
          [name]: cleaned,
        },
      });
      return;
    }

    onChange({
      ...value,
      [name]: cleaned,
    });
  };  

  return (
    <form className="flex flex-col gap-3">
      <Input
        id="name"
        name="name"
        value={value.name}
        placeholder="Ingrese el nombre de su local"
        onChange={handleChange}
        className="shadow-none text-sm"
        label="Nombre"
      />

      <TextArea
        id="description"
        label="Descripción"
        name="description"
        placeholder="Ingrese la descripción de su local"
        onChange={handleChange}
        value={value.description}
        className={{
          textArea: "text-[0.8em] min-h-24",
          label: "text-gray-800",
          wrapper: "mb-4",
        }}
      />
      {localInitialInfo.map((info) => (
        <Input
          key={info.key}
          id={info.key}
          name={info.key}
          value={info.info}
          placeholder={info.placeholder}
          onChange={handleChange}
          className="shadow-none text-sm"
          label={info.title}
        />
      ))}
      {localInitialInfoDirection.map((info) => (
        <Input
          key={info.key}
          id={info.key}
          name={info.key}
          value={info.info}
          placeholder={info.placeholder}
          onChange={handleChange}
          className="shadow-none text-sm"
          label={info.title}
        />
      ))}
      <ImageInput
        label="Foto del local"
        imageRecieved={value.image}
        onImageChange={(file) => onChange({ ...value, image: file })}
      />
    </form>
  );
}
