import { Dispatch, SetStateAction } from "react";
import { Comment } from "../components/Comment";

export default function changeComment(
  commentArray: Comment[],
  commentId: number,
  setterFunction: Dispatch<SetStateAction<Comment[]>>,
  makeChanges: (obj: Comment) => Comment
) {
  const individualCommentIndex = commentArray.findIndex(
    (comment) => comment.id === commentId
  );
  setterFunction((prev) => {
    const newArray = [...prev];
    newArray[individualCommentIndex] = makeChanges(
      newArray[individualCommentIndex]
    );
    return [...newArray];
  });
}
