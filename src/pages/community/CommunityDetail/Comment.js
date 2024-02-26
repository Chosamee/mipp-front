import React, { useState } from "react";

// 각 댓글 항목을 나타내는 컴포넌트
const Comment = ({ comment, addReply }) => {
  const [reply, setReply] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addReply(comment.id, reply);
    setReply("");
  };

  return (
    <div className="ml-4 border-l-2 pl-4">
      <p>{comment.text}</p>
      {comment.replies &&
        comment.replies.map((reply) => (
          <Comment key={reply.id} comment={reply} addReply={addReply} />
        ))}
      <form onSubmit={handleSubmit} className="mt-2">
        <input
          type="text"
          value={reply}
          onChange={(e) => setReply(e.target.value)}
          className="border rounded p-1 mr-2"
          placeholder="Write a reply..."
        />
        <button type="submit" className="bg-blue-500 text-white rounded p-1">
          Reply
        </button>
      </form>
    </div>
  );
};
