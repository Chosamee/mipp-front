import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
// import LoginPage from "./pages/Login";
// import { useState } from "react";
import Index from "./pages/Index";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Result from "./pages/Result";
import Detail from "./pages/Detail";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./util/AuthContext";
import Admin from "./pages/admin/Admin";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <div className="h-20"></div>
          <Navbar />
          <Routes className="flex-grow">
            <Route path="*" element={<Navigate to={"/"} replace />} />
            <Route path="/" element={<Index />} />
            <Route path="/home" element={<ProtectedRoute component={Home} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/result" element={<ProtectedRoute component={Result} />} />
            <Route path="/detail/:id" element={<ProtectedRoute component={Detail} />} />
            <Route path="/admin" element={<ProtectedRoute component={Admin} />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
