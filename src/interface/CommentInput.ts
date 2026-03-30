export interface CommentInputProps {
  showStars: boolean;
  localId?: string;
  reviewId?: string;
  handleSubmitExtra?: ()=>void;
  className?: {
    wrapper?: string; // Para el div contenedor
  };
}
