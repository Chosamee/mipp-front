import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from "react-router-dom";
import Navbar from "components/Navbar";
import Home from "pages/Home";
import Index from "pages/Index";
import Footer from "components/Footer";
import Login from "pages/Login";
import Result from "pages/Result";
import Detail from "pages/Detail";
import Suggestion from "pages/Suggestion.js";
import ProtectedRoute from "components/ProtectedRoute";
import { AuthProvider } from "utils/AuthContext";
import { Provider } from "react-redux";
import store from "utils/Store.js";
import Asks from "pages/ask/Asks";
import AskCreate from "pages/ask/AskCreate";
import AskDetail from "pages/ask/AskDetail";
import RegistrationForm from "pages/Regist";
import ScrollToTop from "components/ScrollToTop";

const App = () => {
  return (
    <AuthProvider>
      <Provider store={store}>
        <Router>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen font-['GowunDodum-Regular']">
            <div className="h-20"></div>
            <CustomNavbar />
            <Routes className="flex-grow">
              <Route path="*" element={<Navigate to={"/"} replace />} />
              <Route path="/" element={<Index />} />
              <Route path="/home" element={<ProtectedRoute component={Home} />} />
              <Route path="/login" element={<Login />} />
              <Route path="/regist" element={<RegistrationForm />} />

              <Route path="/board" element={<ProtectedRoute component={Suggestion} />} />
              <Route path="/result" element={<ProtectedRoute component={Result} />} />
              <Route path="/asks" element={<ProtectedRoute component={Asks} />} />
              <Route path="/asks/detail/:id" element={<ProtectedRoute component={AskDetail} />} />
              <Route path="/asks/create" element={<ProtectedRoute component={AskCreate} />} />

              <Route path="/detail/:id" element={<ProtectedRoute component={Detail} />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </Provider>
    </AuthProvider>
  );
};

const CustomNavbar = () => {
  const location = useLocation(); // Router 컨텍스트 내부에서 useLocation 사용

  return location.pathname.startsWith("/asks") ? <Navbar /> : <Navbar />;
};

export default App;
