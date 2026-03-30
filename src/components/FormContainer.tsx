// src/components/CommentsSection.tsx
import { twMerge } from "tailwind-merge";
import type { FormContainerProps } from "../interface/FormContainer";
import FormHeader from "./FormHeader";
import FormFooter from "./FormFooter";

export default function FormContainer<T>({
  deleteOption,
  className,
  form,
  handleDelete,
  handleSubmit,
  handleCancel,
  onChange, 
  title,
  value
}: FormContainerProps<T>) {
  /* EXAMPLE OF USE: 
  const [plateInfoValue, setPlateInfoValue] = useState<PlateInfoProps>({
        id: "dasda",
        name: "",
        price: 0,
        image: null,
      });
      const [showDialog, setDialog] = useState(true);
  
      const handleSubmit = () => {
        const newData = plateInfoValue;
      }
  
      const handleDelete = () => {
        const id = plateInfoValue.id;  - > It's the id that goes there
      }
  
    return (
      <>
        <section>
          {showDialog && <FormContainer<PlateInfoProps>
            handleDelete={()=>{}}
            handleCancel={()=>setDialog(false)}
            handleSubmit={handleSubmit}
            title="Platillo"
            value={plateInfoValue}
            onChange={setPlateInfoValue}
            deleteOption={false}
            form={({ value, onChange }) => (
              <PlateForm value={value} onChange={onChange} />
            )}
          />}
          
        </section>
      </>
    ); */

  return (
    <section className="flex flex-col overflow-clip rounded-xl">
      <FormHeader onClick={handleDelete} deleteOption={deleteOption} title={title} className={className?.formHeader} />
      <div className="bg-gray-100 px-10 py-8 gap-5 flex flex-col">
        {form({onChange: onChange, value: value})}
        <FormFooter handleSubmit={handleSubmit} handleCancel={handleCancel} />
      </div>
    </section>
  );
}
