import { useAuth } from "components/auth/AuthContext";
import CommentActions from "./CommentActions";
import getFormattedDate from "components/utils/getFormattedDate";
import { useState } from "react";
import CommentForm from "./CommentForm";

const Comment = ({ comment, setReloadRequired }) => {
  const { authState } = useAuth();
  const [openChildInput, setOpenChildInput] = useState(false);

  return (
    <>
      <div className="flex border-b p-2">
        <div className="flex w-full justify-between">
          <div>
            <p>
              {comment.parent_id && "↳"}
              {comment.content}
            </p>
            {comment.user_id === authState.user_id && (
              <CommentActions id={comment.id} setReloadRequired={setReloadRequired} />
            )}
          </div>
          <div>
            <p>{comment.user_nickname}</p>
            <p>{getFormattedDate(comment.created_at)}</p>
          </div>
        </div>
        <button
          onClick={() => {
            setOpenChildInput(!openChildInput);
          }}
          className="ml-auto pl-4">
          :::
        </button>
      </div>
      {openChildInput && (
        <div className="pl-6">
          <CommentForm
            post_id={comment.post_id}
            parent_id={comment.id}
            setReloadRequired={setReloadRequired}
          />
        </div>
      )}

      {comment.children &&
        comment.children.map((child) => (
          <div className="pl-4">
            <Comment key={child.id} comment={child} setReloadRequired={setReloadRequired} />
          </div>
        ))}
    </>
  );
};

export default Comment;
