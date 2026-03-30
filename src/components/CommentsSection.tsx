// src/components/CommentsSection.tsx
import { twMerge } from "tailwind-merge";
import type { CommentsSectionProps } from "../interface/CommentsSection";
import CommentCard from "./CommentCard";
import { useEffect, useState } from "react";
import type { CommentInfoProps } from "../interface/CommentInfo";
import CommentInput from "./CommentInput";
import TextButton from "./TextButton";
import Text from "./Text";
import { useNavigate } from "react-router-dom";
import { ApiError, ReviewService } from "../service";
import type { ReviewProps } from "../interface/serviceInterface/Request/Review";
import { useUser } from "../context/UserContext";

export default function CommentsSection({
  localOwnerName,
  localId,
  optionsIsNeverShowed,
  isSummarySection,
  className
}:CommentsSectionProps) {
    const navigate = useNavigate();
    const [showResponse, setShowResponse] = useState(false);
    const [comments, setComments] = useState<ReviewProps[]>([]);
    const [hasAlreadyCommented, setHasAlreadyCommented] = useState(false);
    const {user, isLoggedIn} = useUser();
    const isLocalOwner = localOwnerName == user?.id;

  console.log(isLocalOwner);
  

  const baseWrapper = "flex flex-col gap-5";
  const mergeWrapper = twMerge(baseWrapper, className?.wrapper);


    /* TODO: useEffect to get all the reviews */
    useEffect(() => {
        const fetchReviews = async () => {
          try {
            if(localId){
              const data = await ReviewService.getAll(localId); 
              setComments(data);
            }
          } catch (err: any) {
            console.error("Error al obtener las reviews:", err);
            // Manejo de errores mejorado con ApiError
            if (err instanceof ApiError) {
              console.log(err);
              
            } else {
              console.log("No se pueden cargar las reviews. Inténtalo de nuevo más tarde.");
            }
          }
        };
    
        fetchReviews();
      }, []);

    /* TODO: useEffect to get user info, if the user info is found in the comments (the state comments)
    then set hasAlreadyCommented as true */

    /* TODO: make an onClick function that navigate to other page for TextButton */

    const handleShowResponse = () =>{
        setShowResponse(true);
    }

    
    const emptyReview: ReviewProps = {
  content: "",
  userId: "",
  localId: "",
  reviewId: "",
  stars: 0
};

    const searchForOwnerComment = (commentId: string) => {
        /* TODO: search owner comment */
        /* TODO: if found then set ownerComment with the info and thereIsOwnerComment as true, else set ownerComment as empty thereIsOwnerComment as false */
        const ownersComment : ReviewProps = {content: "Me vv", userId: "", localId: "", reviewId: "", stars: 0};

        if(false){ /* TODO: if the comment was found put the result into the if parenthesis */
          return {thereIsOwnerComment: true, ownerComment: ownersComment};
        }else{
          return {thereIsOwnerComment: false, ownerComment: emptyReview}
        }
    }

    const onTextButtonClick = () => {
      navigate(`/local/${localId}/comments`); // Navega a la ruta de detalle del restaurante
    }

  return (
    <section className={mergeWrapper}>
        {(!isSummarySection && !isLocalOwner && isLoggedIn) && <CommentInput showStars={true} localId={localId} />}
        {
            comments.map((comment) => {
                const ownerCommentInfo = searchForOwnerComment(comment.reviewId || "");
                
                return <div className="flex flex-col gap-5" key={comment.reviewId+ "-div"}>
                    <CommentCard key={comment.reviewId + "-user"} commentInfo={comment} showResponseInput={handleShowResponse} optionsIsNeverShowed={optionsIsNeverShowed} userOwnerId={localOwnerName} showStars={true} localId={localId} />

                    {(ownerCommentInfo.thereIsOwnerComment && !isSummarySection) && <CommentCard key={comment.reviewId + "-owner"} commentInfo={ownerCommentInfo.ownerComment} optionsIsNeverShowed={optionsIsNeverShowed} userOwnerId={localOwnerName} showStars={false} className={{commentWrapper: "w-[95%] self-end"}} localId={localId}/>}
                </div>
            })
        }
        {isSummarySection && <TextButton onClick={onTextButtonClick} className="cursor-pointer"> <Text text="Ver más comentarios" className="text-xs" /> </TextButton>}
    </section>
  );
}
