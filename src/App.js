import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ResultPage from "./pages/Result";
// import LoginPage from "./pages/Login";
// import { useState } from "react";
import { loadTokenFromLocalStorage } from "./util/HandleToken";
import Index from "./pages/Index";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Result from "./pages/Result";
import Detail from "./pages/Detail";
import AuthProvider from "./util/AuthProvider";

const App = () => {
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   // 구글 OAuth 로그인 후 반환된 토큰을 localStorage에서 가져옵니다.
  //   const token = localStorage.getItem("googleToken");

  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:8000/user", {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });
  //       setUser(response.data);
  //     } catch (error) {
  //       console.error("Error fetching data: ", error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <div className="h-20"></div>
          <Navbar />
          <Routes className="flex-grow">
            <Route path="/" element={<Index />} />
            <Route path="/home" element={<Home />} />
            <Route path="/result" element={<ResultPage />} />
            <Route path="*" element={<Navigate to={"/"} replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/result" element={<Result />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
