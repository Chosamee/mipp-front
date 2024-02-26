import React, { useState, useEffect } from "react";
import { updateServerLikeStatus } from "../api";

const PostLikeBtn = ({ initialLikeStatus, initialLikeCount, postId }) => {
  const [liked, setLiked] = useState(initialLikeStatus);
  const [likeCount, setLikeCount] = useState(initialLikeCount);

  useEffect(() => {
    // 초기값 설정
    setLiked(initialLikeStatus);
    setLikeCount(initialLikeCount);
  }, [initialLikeStatus, initialLikeCount]);

  const handleLikeClick = async () => {
    const newLikedStatus = !liked;
    const newLikeCount = newLikedStatus ? likeCount + 1 : likeCount - 1;

    // UI를 즉각적으로 업데이트
    setLiked(newLikedStatus);
    setLikeCount(newLikeCount);

    try {
      // 서버에 좋아요 상태 업데이트를 비동기적으로 요청
      await updateServerLikeStatus(postId, newLikedStatus);
      console.log("Like status updated successfully");
    } catch (error) {
      // 요청 실패 시, UI를 이전 상태로 롤백
      setLiked(!newLikedStatus);
      setLikeCount(newLikeCount === likeCount + 1 ? likeCount - 1 : likeCount + 1);
      console.error("Failed to update like status:", error);
    }
  };

  return (
    <button onClick={handleLikeClick}>
      {liked ? "❤️" : "♡"} {likeCount}
    </button>
  );
};

export default PostLikeBtn;
