import type { CommentInfoProps } from "./CommentInfo";
import type { ReviewProps } from "./serviceInterface/Request/Review";

export interface CommentCardProps {
  commentInfo: ReviewProps;
  userOwnerId: string;
  showResponseInput?: () => void;
  optionsIsNeverShowed: boolean;
  showStars: boolean;
  className?: {
    commentWrapper?: string; // Para el div contenedor
  };
  localId: string;
}
