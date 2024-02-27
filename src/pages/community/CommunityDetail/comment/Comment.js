import { useAuth } from "components/auth/AuthContext";
import CommentActions from "./CommentActions";

const Comment = ({ comment, isOwner }) => {
  const { authState } = useAuth();
  return (
    <div className="border-b p-2">
      <p>{comment.content}</p>
      {isOwner && <CommentActions />}
      {comment.children &&
        comment.children.map((child) => (
          <div className="pl-4">
            <Comment
              key={child.id}
              comment={child}
              isOwner={child.user_id === authState.nickname}
            />
          </div>
        ))}
    </div>
  );
};

export default Comment;
