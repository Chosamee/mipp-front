import axios from "axios";
import { useEffect } from "react";

const Dashboard = () => {
  const API_BASE_URL = process.env.REACT_APP_MIPP_API_URL;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(`${API_BASE_URL}/dashboard`, null, {
          withCredentials: true,
        });
        return response.data;
      } catch (error) {
        console.error("Error update posts:", error);
        throw error;
      }
    };
    const data = fetchData();
    console.log(data);
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;
