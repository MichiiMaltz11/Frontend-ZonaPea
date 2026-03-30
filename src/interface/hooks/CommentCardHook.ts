import type { CommentInfoProps } from "../CommentInfo";
import type { ReviewProps } from "../serviceInterface/Request/Review";

export interface CommentCardHookProps {
  commentInfo: ReviewProps;
  userAuthorId: string;
  userOwnerId: string;
  commentId: string;
  optionsIsNeverShowed: boolean;
  showResponseInput?: () => void;
}
