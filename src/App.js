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
import Suggestion from "./pages/Suggestion.js";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./util/AuthContext";
import Admin from "./pages/admin/Admin";
import { Provider } from "react-redux";
import store from "./util/Store.js";
import { Asks, AskDetail, AskCreate } from "./pages/ask";

const App = () => {
  return (
    <AuthProvider>
      <Provider store={store}>
        <Router>
          <div className="flex flex-col min-h-screen min-w-fit font-['GowunDodum-Regular']">
            <div className="h-20"></div>
            <Navbar />
            <Routes className="flex-grow">
              <Route path="*" element={<Navigate to={"/"} replace />} />
              <Route path="/" element={<Index />} />
              <Route path="/home" element={<ProtectedRoute component={Home} />} />
              <Route path="/login" element={<Login />} />

              <Route path="/board" element={<ProtectedRoute component={Suggestion} />} />
              <Route path="/result" element={<ProtectedRoute component={Result} />} />
              <Route path="/asks" element={<ProtectedRoute component={Asks} />} />
              <Route path="/asks/detail/:id" element={<ProtectedRoute component={AskDetail} />} />
              <Route path="/asks/create" element={<ProtectedRoute component={AskCreate} />} />

              <Route path="/detail/:id" element={<ProtectedRoute component={Detail} />} />
              <Route path="/admin" element={<ProtectedRoute component={Admin} />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </Provider>
    </AuthProvider>
  );
};

export default App;
