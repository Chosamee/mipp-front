import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import ProfileMenu from "./ProfileMenu";

interface DashboardData {
  user_info?: { name: String; email: String; membership: String };
}
const Dashboard = () => {
  const API_BASE_URL = process.env.REACT_APP_MIPP_API_URL as string;
  const [data, setData] = useState<DashboardData>({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(`${API_BASE_URL}/dashboard`, null, {
          withCredentials: true,
        });
        setData(response.data);
        return response.data;
      } catch (error) {
        console.error("Error update posts:", error);
        throw error;
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      {data.user_info && <ProfileMenu profile={data.user_info} />}
    </div>
  );
};

export default Dashboard;
