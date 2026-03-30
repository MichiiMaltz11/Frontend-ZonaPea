import { useParams } from "react-router-dom";
import CommentsSection from "../components/CommentsSection";
import { useLocalSection } from "../hooks/useLocalSection";

export default function CommentPage() {
    const { id } = useParams<{ id: string }>();

    const {localInfo} = useLocalSection({id: id});
    
    /* Do a fetch to obtain the reviews from the local id */

  return (
    <section className="p-16">
      <CommentsSection isSummarySection={false} localId={id!} localOwnerName={localInfo.id_user||""} optionsIsNeverShowed={false} />
    </section>
  );
}
