import { useParams } from "react-router-dom";
import LocalInfoSection from "../components/LocalInfoSection";
import MenuSection from "../components/MenuSection";

export default function LocalPage() {
    const { id } = useParams<{ id: string }>();

  return (
    <section>
      <LocalInfoSection localId={id!} />
      <MenuSection localId={id!} />
    </section>
  );
}
