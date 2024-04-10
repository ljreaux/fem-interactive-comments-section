import { User } from "./Comment";

export default function NewComment({ user }: { user: User }) {
  return (
    <form className="comment-form">
      <img src={user.image.png} alt="user image" />
      <textarea
        placeholder="Add a comment..."
        name="comment"
        id="comment"
        cols={30}
        rows={3}
      ></textarea>
      <button className="btn send">SEND</button>
    </form>
  );
}
