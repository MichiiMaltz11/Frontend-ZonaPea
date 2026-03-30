// src/components/CommentsSection.tsx
import type { MenuProps } from "../interface/Menu";
import MenuHeader from "./MenuHeader";
import PlateCard from "./PlateCard";

export default function Menu({ plateInfo, mode, onAdd, onEdit }: MenuProps) {
  /* EXAMPLE TO TEST IT:
  const [plates, setPlates] = useState<PlateInfoProps[]>([]);
  
    useEffect(() => {
      async function fetchImages() {
        const urls = [ 
          `http://localhost:5173/plate1.jpg`, -> the images should be on the public folder
          `http://localhost:5173/plate2.jpg`,
          `http://localhost:5173/plate2.jpg`,
          `http://localhost:5173/plate2.jpg`,
          `http://localhost:5173/plate2.jpg`,
          `http://localhost:5173/plate2.jpg`,
          `http://localhost:5173/plate2.jpg`,
        ];
  
        const plateData: PlateInfoProps[] = await Promise.all(
          urls.map(async (url, idx) => {
            const response = await fetch(url);
            const blob = await response.blob();
            const file = new File([blob], `plate${idx + 1}.jpg`, {
              type: blob.type,
            });
            console.log(file); // Debería mostrar un File con size > 0
            console.log(URL.createObjectURL(file)); // Debería mostrar una URL tipo blob:
            return {
              image: file,
              name: `Plato ${idx + 1}`,
              price: idx === 0 ? 10.99 : 15.5,
            };
          })
        );
  
        setPlates(plateData);
      }
  
      fetchImages();
    }, []);
  
    return (
      <>
        <section>
          <Menu plateInfo={plates} mode="edit" />
        </section>
      </>
    ); */
  return (
    <section className="flex flex-col items-center p-6 gap-5 bg-gray-300 shadow-xl rounded-2xl">
      <MenuHeader />
      <div className="flex flex-wrap justify-center gap-6">
        {mode === "edit" && <PlateCard mode="create" onClick={onAdd} />}
        {plateInfo.map((plate, index) => (
          <PlateCard key={index} mode={mode} plateInfo={plate} onClick={mode == "edit" ? () => onEdit?.(plate) : () =>{}} />
        ))}
      </div>
    </section>
  );
}
