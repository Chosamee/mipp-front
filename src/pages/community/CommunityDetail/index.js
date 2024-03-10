import { useEffect, useState } from "react";
import { fetchSinglePost } from "../api";
import { useLocation, useParams } from "react-router-dom";
import PostDeleteBtn from "./PostDeleteBtn";
import PostEditBtn from "./PostEditBtn";
import PostLikeBtn from "./PostLikeBtn";
import getFormattedDate from "components/utils/getFormattedDate";
import { useTranslation } from "react-i18next";
import Comment from "./comment/Comment";
import { useAuth } from "components/auth/AuthContext";
import CommentForm from "./comment/CommentForm";

const CommunityDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);
  const [isOwner, setIsOwner] = useState(false);
  const [data, setData] = useState([]);
  const [reloadRequired, setReloadRequired] = useState(false); // 댓글 추가 후 새로고침 필요 여부

  const fetchData = async () => {
    try {
      const data = await fetchSinglePost(id);
      setPost(data.post);
      setComments(data.comments);
      setIsOwner(data.owner);
      setData(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchData();
    setReloadRequired(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reloadRequired]);

  // 검색 기능

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [currentPage, setCurrentPage] = useState(parseInt(queryParams.get("page") || "1", 10));
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const urlPage = parseInt(queryParams.get("page"), 10) || 1;
    if (urlPage !== currentPage) {
      setCurrentPage(urlPage);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);
  const { i18n } = useTranslation();

  return (
    <div className="py-20 flex flex-col items-center">
      <div className="w-[750px] mx-auto justify-between px-5 flex mb-6">
        <h1>Detail</h1>
        <div className="flex gap-5">
          {isOwner && <PostEditBtn postId={id} title={post.title} content={post.content} />}
          {isOwner && <PostDeleteBtn postId={id} />}
          {data && (
            <PostLikeBtn
              initialLikeStatus={data.is_liked}
              initialLikeCount={data.likes}
              postId={post.id}
            />
          )}
        </div>
      </div>
      <div className="w-[750px] mx-auto px-5 text-3xl mb-4">{post.title}</div>
      <div className="w-[750px] mx-auto px-5 text-sm">
        {post.created_at && getFormattedDate(post.created_at, i18n.language)}
      </div>
      <div className="w-[750px] mx-auto px-5 text-lg">{data.nickname}</div>
      <div className="h-px w-[750px] bg-blue-500 my-10"></div>
      <p className="w-[750px] mx-auto px-5 mb-40">{post.content}</p>

      <div className="w-[750px] mx-auto px-5 mb-10 text-xl">
        {i18n.language === "en" ? "Comments" : "댓글"}
      </div>
      <div className="w-[700px]">
        <CommentForm post_id={post.id} setReloadRequired={setReloadRequired} />
      </div>
      <div className="h-10" />
      {comments.map((comment) => (
        <div key={comment.id} className="w-[750px] mx-auto px-5">
          <Comment comment={comment} setReloadRequired={setReloadRequired} />
        </div>
      ))}
    </div>
  );
};

export default CommunityDetail;
