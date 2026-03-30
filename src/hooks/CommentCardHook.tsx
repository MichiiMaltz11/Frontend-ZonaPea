import { useEffect, useState } from "react";
import type { CommentCardHookProps } from "../interface/hooks/CommentCardHook";
import type { UserGeneralInfoProps } from "../interface/UserGeneralInfo";
import type { OptionDialogOption } from "../interface/OptionDialog";
import { useUser } from "../context/UserContext";
import { ReviewService, UserService } from "../service";

export const useCommentCardHook = ({
  userOwnerId,
  commentId,
  showResponseInput,
  optionsIsNeverShowed,
  userAuthorId,
  commentInfo
}: CommentCardHookProps) => {
  const {user, isAdmin} = useUser();
  const [isAuthor, setIsAuthor] = useState(user?.id == userAuthorId);
  const [isOwner, setIsOwner] = useState(user?.id == userOwnerId);
  const [showModal, setShowModal] = useState(false);
  const [showOptions, setShowOptions] = useState(true);
  const [options, setOptions] = useState<OptionDialogOption[]>([]);
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetchUsername = async () => {
      const response = await UserService.getById(userAuthorId);
      console.log(response);
      
      setUsername(response.username);
    }

    fetchUsername();

    if (!optionsIsNeverShowed) {
      if (isAuthor) {
        setOptions([{ label: "Eliminar", onClick: deleteComment }]);
      } else if (isOwner) {
        setOptions([{ label: "Responder", onClick: handleResponse }]);
      } else if (isAdmin()) {
        setOptions([
          { label: "Eliminar", onClick: deleteComment },
          { label: "Banear", onClick: handleBan },
        ]);
      } else {
        setShowOptions(false);
      }
    }else{
      setShowOptions(false);
    }
  }, []);

  const handleOptionsOnClick = () => {
    setShowModal(!showModal);
  };

  const deleteComment = async () => {
    const response = await ReviewService.delete(commentInfo.reviewId || "");

    setShowModal(false);
  };

  const handleBan = () => {
    /* TODO: delete the user that wrote de comment */

    setShowModal(false);
  };

  const handleResponse = () => {
    showResponseInput?.();
    setShowModal(false);
    setShowCommentInput(true);
  };

  const handleResponseSubmit = () => {
    setShowCommentInput(false);
  };

  return {
    showModal,
    showOptions,
    username,
    handleOnClick: handleOptionsOnClick,
    options,
    showCommentInput,
    setShowCommentInput,
    handleResponseSubmit,
  };
};
