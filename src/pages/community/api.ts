import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_MIPP_API_URL;

interface IPostFetchRequestForm {
  currentPage: number;
  pageSize: number;
  searchKeyword: string;
  searchType: string;
}

export const fetchPosts = async ({
  currentPage,
  pageSize,
  searchKeyword,
  searchType,
}: IPostFetchRequestForm) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/all_posts/?page=${currentPage}&page_size=${pageSize}&search_query=${encodeURIComponent(
        searchKeyword ? searchKeyword : ""
      )}&search_type=${searchType}`,
      null,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};

export const fetchSinglePost = async (post_id: number) => {
  const formData = new FormData();
  formData.append("post_id", String(post_id));
  try {
    const response = await axios.post(`${API_BASE_URL}/view_post`, formData, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching post:", error);
    throw error;
  }
};

export const addPost = async ({ title, contents }: { title: string; contents: string }) => {
  const formData = new FormData();
  formData.append("title", title);
  formData.append("contents", contents);
  try {
    const response = await axios.post(`${API_BASE_URL}/create_post`, formData, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Error add posts:", error);
    throw error;
  }
};

export const deletePost = async (post_id: number) => {
  const formData = new FormData();
  formData.append("post_id", String(post_id));
  try {
    const response = await axios.post(`${API_BASE_URL}/delete_posts`, formData, {
      withCredentials: true,
    });
    return response;
  } catch (error) {
    console.error("Error delete posts:", error);
    throw error;
  }
};

interface IPost {
  id: string;
  title: string;
  contents: string;
}

export const updatePost = async ({ id, title, contents }: IPost) => {
  const formData = new FormData();
  formData.append("post_id", String(id));
  formData.append("title", title);
  formData.append("contents", contents);
  try {
    const response = await axios.post(`${API_BASE_URL}/update_post`, formData, {
      withCredentials: true,
    });
    return response;
  } catch (error) {
    console.error("Error update posts:", error);
    throw error;
  }
};

export const updateServerLikeStatus = async (post_id: number, like: boolean) => {
  const formData = new FormData();
  formData.append("post_id", String(post_id));
  formData.append("like", String(like));
  try {
    const response = await axios.post(`${API_BASE_URL}/like_post`, formData, {
      withCredentials: true,
    });
    return response;
  } catch (error) {
    console.error("Error updating like status:", error);
    throw error;
  }
};

interface ICommentRequestForm {
  post_id: number;
  content: string;
  parent_id?: number;
}

export const addComment = async ({ post_id, content, parent_id }: ICommentRequestForm) => {
  const formData = new FormData();
  formData.append("post_id", String(post_id));
  formData.append("content", content);
  if (parent_id) formData.append("parent_id", String(parent_id));
  try {
    const response = await axios.post(`${API_BASE_URL}/create_comment`, formData, {
      withCredentials: true,
    });
    return response;
  } catch (error) {
    console.error("Error adding comment:", error);
    throw error;
  }
};

export const deleteComment = async (comment_id: number) => {
  const formData = new FormData();
  formData.append("comment_id", String(comment_id));
  try {
    const response = await axios.post(`${API_BASE_URL}/delete_comment`, formData, {
      withCredentials: true,
    });
    return response;
  } catch (error) {
    console.error("Error deleting comment:", error);
    throw error;
  }
};

export const updateComment = async (comment_id: number, contents: string) => {
  const formData = new FormData();
  formData.append("comment_id", String(comment_id));
  formData.append("contents", contents);
  try {
    const response = await axios.post(`${API_BASE_URL}/update_comment`, formData, {
      withCredentials: true,
    });
    return response;
  } catch (error) {
    console.error("Error updating comment:", error);
    throw error;
  }
};
