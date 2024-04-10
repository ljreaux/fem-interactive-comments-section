import Comment from "./components/Comment";
import NewComment from "./components/NewComment";
import { Comment as CommentType } from "./components/Comment";
import data from "../public/data.json";
import { useState } from "react";

function App() {
  const [commentData, setCommentData] = useState<CommentType[]>(data.comments);
  const [user, setUser] = useState(data.currentUser);

  return (
    <main>
      {commentData.map((comment) => {
        return (
          <>
            <Comment
              comment={comment}
              key={comment.id}
              setCommentData={setCommentData}
              user={user}
              reply={false}
            ></Comment>
            <div className="reply-container">
              {comment.replies &&
                comment.replies.map((comment) => {
                  return (
                    <Comment
                      comment={comment}
                      key={comment.id}
                      setCommentData={setCommentData}
                      user={user}
                      reply
                    />
                  );
                })}
            </div>
          </>
        );
      })}
      <NewComment user={user} />
    </main>
  );
}

export default App;
