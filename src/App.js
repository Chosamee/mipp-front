import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarComponent from "./components/NavbarComp";
import Home from "./pages/Home";
import ResultPage from "./pages/Result";
import LoginPage from "./pages/Login";
import { useState } from "react";
const About = () => <h2>About</h2>;
const Contact = () => <h2>Contact</h2>;

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // 로그인 상태에 따라 isAuthenticated 업데이트
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  // 로그아웃 상태에 따라 isAuthenticated 업데이트
  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <NavbarComponent />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/result"
            element={<ResultPage />}
            isAuthenticated={isAuthenticated}
          />
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
