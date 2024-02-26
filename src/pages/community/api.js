import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_MIPP_API_URL;

export const fetchAllPosts = async () => {
  try {
    const response = await axios.post(`${API_BASE_URL}/all_posts`, null, {
      withCredentials: true,
    });
    return { posts: response.data.posts, my_posts: response.data.my_posts };
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};

export const fetchPost = async (post_id) => {
  const formData = new FormData();
  formData.append("post_id", post_id);
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

export const addPost = async (title, contents) => {
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

export const deletePost = async (post_id) => {
  const formData = new FormData();
  formData.append("post_id", post_id);
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

export const updatePost = async (post_id, title, contents) => {
  const formData = new FormData();
  formData.append("post_id", post_id);
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

export const updateServerLikeStatus = async (post_id, like) => {
  const formData = new FormData();
  formData.append("post_id", post_id);
  formData.append("like", like);
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
