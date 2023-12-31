import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
  useNavigate,
  useParams,
  Outlet,
} from "react-router-dom";
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
import MyPage from "pages/MyPage";
import Test from "pages/test";
import "./i18n";
import { useTranslation } from "react-i18next";

const App = () => {
  const { i18n } = useTranslation();
  useEffect(() => {
    // URL에서 언어 코드 추출 (예: /en/, /ko/)
    const language = window.location.pathname.split("/")[1];
    i18n.changeLanguage(language);
  }, [i18n]);
  return (
    <AuthProvider>
      <Provider store={store}>
        <Router>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen min-w-72">
            <CustomNavbar />
            <div className="flex-grow">
              <Routes>
                <Route path="/" element={<LanguageRedirector />} />
                <Route path="*" element={<Navigate to="/" replace />} />

                <Route path="/:lang" element={<LanguageRedirector />}>
                  <Route path="*" element={<Navigate to="." replace />} />
                  {/* 공통된 경로들을 여기에 배치합니다. */}
                  <Route index element={<Index />} />
                  <Route path="home" element={<ProtectedRoute component={Home} />} />
                  <Route path="login" element={<Login />} />
                  <Route path="regist" element={<ProtectedRoute component={RegistrationForm} />} />
                  <Route path="mypage" element={<ProtectedRoute component={MyPage} />} />
                  <Route path="board" element={<ProtectedRoute component={Suggestion} />} />
                  <Route path="result" element={<ProtectedRoute component={Result} />} />
                  <Route path="asks" element={<ProtectedRoute component={Asks} />} />
                  <Route
                    path="asks/detail/:id"
                    element={<ProtectedRoute component={AskDetail} />}
                  />
                  <Route path="asks/create" element={<ProtectedRoute component={AskCreate} />} />
                  <Route path="test" element={<Test />} />
                  <Route path="detail/:id" element={<ProtectedRoute component={Detail} />} />
                </Route>
              </Routes>
            </div>
            <Footer />
          </div>
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

const supportedLanguages = ["en", "ko"]; // 지원되는 언어 목록

const LanguageRedirector = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { lang } = useParams();
  const { i18n } = useTranslation();

  useEffect(() => {
    const pathSegments = location.pathname.split("/");
    const currentLang = pathSegments.length > 1 ? pathSegments[1] : null;

    if (location.pathname === "/" || !supportedLanguages.includes(currentLang)) {
      // 루트 경로 또는 지원되지 않는 언어 경로에 접근한 경우
      const userLang = navigator.language || navigator.userLanguage;
      const defaultLang = userLang.includes("ko") ? "ko" : "en";
      navigate(`/${defaultLang}`, { replace: true });
    } else if (
      currentLang &&
      supportedLanguages.includes(currentLang) &&
      i18n.language !== currentLang
    ) {
      // 지원되는 언어 경로에 접근했으나 현재 설정된 언어와 다른 경우
      i18n.changeLanguage(currentLang);
    }
  }, [navigate, location, lang, i18n]);

  return <Outlet />;
};
