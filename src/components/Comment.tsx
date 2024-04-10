import { Dispatch, SetStateAction } from "react";
import { ReactComponent as ReplyIcon } from "../assets/icon-reply.svg";

export interface User {
  image: {
    png: string;
    webp: string;
  };
  username: string;
}
interface Reply {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: User;
  replyingTo?: "";
}
export interface Comment extends Reply {
  replies?: Reply[];
}

function CommentHeader({
  user,
  createdAt,
  currentUser,
}: {
  user: User;
  createdAt: string;
  currentUser: User;
}) {
  return (
    <div className="comment-header">
      <div className="info-container">
        <img
          src={user.image.png}
          alt={`${user.username}'s profile image`}
          className="profile-img"
        />
        <p className="username">{user.username}</p>
        {currentUser.username === user.username && (
          <p
            style={{
              boxSizing: "border-box",
              backgroundColor: "var(--clr-mod-blue)",
              color: "var(--clr-white)",
              padding: "0.25rem 0.5rem",
              borderRadius: ".25rem",
            }}
          >
            you
          </p>
        )}
        <p>{createdAt}</p>
      </div>
      {currentUser.username === user.username ? (
        <div className="user-btns">
          <button className="btn delete">
            <img src="/images/icon-delete.svg" alt="delete icon" />
            Delete
          </button>
          <button className="btn reply">
            <img src="/images/icon-edit.svg" alt="edit icon" />
            Edit
          </button>
        </div>
      ) : (
        <button className="btn reply">
          <ReplyIcon />
          Reply
        </button>
      )}
    </div>
  );
}

function Ratings({ rating }: { rating: number }) {
  return (
    <div className="rating">
      <button className="btn">
        <img src="/images/icon-plus.svg" alt="increase rating" />
      </button>
      <p>{rating}</p>
      <button className="btn">
        <img src="/images/icon-minus.svg" alt="decrease rating" />
      </button>
    </div>
  );
}

export default function Comment({
  comment,
  setCommentData,
  reply,
  user,
}: {
  comment: Comment;
  setCommentData: Dispatch<SetStateAction<Comment[]>>;
  reply: boolean;
  user: User;
}) {
  return (
    <div className={`card ${reply && "indented"}`}>
      <Ratings rating={comment.score} />
      <CommentHeader
        user={comment.user}
        createdAt={comment.createdAt}
        currentUser={user}
      />
      <div className="comment-content">
        {comment.replyingTo && (
          <span className="replying-to">@{comment.replyingTo}</span>
        )}{" "}
        {comment.content}
      </div>
    </div>
  );
}
