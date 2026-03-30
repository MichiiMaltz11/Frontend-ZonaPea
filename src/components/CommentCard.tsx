// src/components/Rating.tsx
import { LuEllipsisVertical } from "react-icons/lu";
import { twMerge } from "tailwind-merge";
import { useCommentCardHook } from "../hooks/CommentCardHook";
import type { CommentCardProps } from "../interface/CommentCard";
import IconButton from "./IconButton";
import OptionDialog from "./OptionDialog";
import Rating from "./Rating";
import Text from "./Text";
import CommentInput from "./CommentInput";

export default function CommentCard({
  commentInfo,
  className,
  userOwnerId,
  showResponseInput,
  optionsIsNeverShowed,
  showStars,
  localId
}: CommentCardProps) {
  const baseCommentWrapper =
    "flex flex-col bg-gray-300 rounded-xs px-2 py-3 gap-1";
  const mergeCommentWrapper = twMerge(
    baseCommentWrapper,
    className?.commentWrapper
  );

  const commentsHook = useCommentCardHook({
    userOwnerId: userOwnerId,
    commentId: commentInfo.reviewId || "",
    showResponseInput: showResponseInput,
    optionsIsNeverShowed: optionsIsNeverShowed,
    userAuthorId: commentInfo.userId,
    commentInfo: commentInfo
  });  

  return (
    <section className="flex flex-col gap-5 shadow-md">
      <div className={mergeCommentWrapper}>
        <div className="flex justify-between relative">
          <Text
            text={commentsHook.username || ""}
            className="font-semibold text-xl"
          />
          {commentsHook.showOptions && (
            <IconButton
              icon={LuEllipsisVertical}
              className={{ icon: "text-gray-400 text-xl" }}
              onClick={commentsHook.handleOnClick}
            />
          )}

          {commentsHook.showModal && (
            <OptionDialog
              className="absolute right-0 top-8 z-10"
              options={commentsHook.options}
            />
          )}
        </div>

        {showStars && (
          <Rating
            rating={commentInfo.stars}
            className={{ wrapper: "h-4 gap-1" }}
          />
        )}

        <Text text={commentInfo.content} className="text-[0.7em]" />
      </div>

      {commentsHook.showCommentInput && (
        <CommentInput
          className={{ wrapper: "w-[95%] self-end" }}
          showStars={false}
          reviewId={commentInfo.reviewId}
          handleSubmitExtra={commentsHook.handleResponseSubmit}
          localId={localId}
        />
      )}
    </section>
  );
}
