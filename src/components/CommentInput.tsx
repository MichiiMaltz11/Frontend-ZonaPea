// src/components/CommentsSection.tsx
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import type { CommentInputProps } from "../interface/CommentInput";
import type { ReviewProps } from "../interface/serviceInterface/Request/Review";
import type { SubreviewProps } from "../interface/serviceInterface/Request/Subreview";
import Button from "./Button";
import Rating from "./Rating";
import Text from "./Text";
import TextArea from "./TextArea";
import { ReviewService, SubreviewService } from "../service";
import { useUser } from "../context/UserContext";

export default function CommentInput({
  localId,
  showStars,
  reviewId,
  className,
  handleSubmitExtra,
}: CommentInputProps) {
  const {user} = useUser();
  const [value, setValue] = useState("");
  const [rating, setRating] = useState(0);
  const [userId, setUserId] = useState(user?.id || "");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const cleaned = e.target.value.replace(/\n/g, " ");
    setValue(cleaned);
  };

  /* ATTENTION: if the logic grows to much then put it in a hook */

  /* TODO: make a useEffect to get the actual user info, or maybe a useUserSession hook or a Context */

  const handleSubmit = async () => {
    if (showStars) {
      const newReview: ReviewProps = {
        content: value,
        userId: userId,
        localId: localId || "",
        stars: rating,
      };

      const response = await ReviewService.create(newReview); 

      /* TODO: send newReview to ReviewPostService */
    } else {
      const newSubreview: SubreviewProps = {
        content: value,
        userId: userId,
        reviewId: reviewId || "",
      };

      const response = await SubreviewService.create(newSubreview, localId||""); 

      /* TODO: send newSubreview to SubreviewPostService */
    }

    handleSubmitExtra?.();
    setRating(0);
    setValue("");
  };

  const handleStars = (rating: number) => {
    setRating(rating);
  };

  const baseWrapper = "flex flex-col gap-5";
  const mergeWrapper = twMerge(baseWrapper, className?.wrapper);

  return (
    <section className={mergeWrapper}>
      <div className="flex flex-col bg-gray-300 px-3 py-4 gap-3 rounded-[10px] shadow-lg">
        {showStars && (
          <Rating
            isDisabled={false}
            className={{ wrapper: "h-6" }}
            onClick={handleStars}
          />
        )}

        <TextArea
          id="response"
          name="response"
          onChange={handleChange}
          placeholder="Escribe tu comentario..."
          value={value}
          className={{
            textArea:
              "shadow-none min-h-32 placeholder:text-xs placeholder:text-gray-400 text-xs",
          }}
        />
      </div>

      <Button
        className="w-40 shadow-md hover:shadow-lg duration-200 ease-in-out bg-primary-blue px-3 py-[0.6rem] cursor-pointer hover:bg-primary-blue-hover active:bg-primary-blue-pressed"
        onClick={handleSubmit}
      >
        <Text
          text="Agregar Comentario"
          className="text-[0.8em] font-bold text-white"
        />
      </Button>
    </section>
  );
}
