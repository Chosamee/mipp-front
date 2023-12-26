import axios from "axios";
import { loadTokenFromLocalStorage } from "../util/HandleToken";

const API_BASE_URL = process.env.REACT_APP_MIPP_API_URL;

export const fetchPosts = async () => {
  try {
    const token = loadTokenFromLocalStorage();
    const formData = new FormData();
    formData.append("token", token);
    const response = await axios.post(`${API_BASE_URL}/all_posts`, formData);
    console.log(response.data);
    return { posts: response.data.posts, my_posts: response.data.my_posts };
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};

export const addPosts = async (contents) => {
  const token = loadTokenFromLocalStorage();
  const formData = new FormData();
  formData.append("token", token);
  formData.append("contents", contents);
  try {
    const response = await axios.post(`${API_BASE_URL}/posts`, formData);
    return response.data;
  } catch (error) {
    console.error("Error add posts:", error);
    throw error;
  }
};

export const deletePosts = async (post_id) => {
  const token = loadTokenFromLocalStorage();
  const formData = new FormData();
  formData.append("token", token);
  formData.append("post_id", post_id);
  try {
    const response = await axios.post(`${API_BASE_URL}/delete_posts`, formData);
    return response;
  } catch (error) {
    console.error("Error delete posts:", error);
    throw error;
  }
};
