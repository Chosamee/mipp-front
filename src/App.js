// React 및 라우팅 관련 라이브러리
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

// 컴포넌트: 네비게이션 바, 푸터 등 UI 요소
import Navbar from "components/views/Navbar";
import Footer from "components/views/Footer";
import ScrollToTop from "components/utils/ScrollToTop";

// 페이지: 애플리케이션의 각 페이지
import Home from "pages/Home";
import Index from "pages/Index";
import Login from "pages/Login";
import Result from "pages/Result";
import Detail from "pages/Detail";
import Howtouse from "pages/Howtouse";
import Suggestion from "pages/Suggestion.js";
import Asks from "pages/ask/Asks";
import AskCreate from "pages/ask/AskCreate";
import AskDetail from "pages/ask/AskDetail";
import RegistrationForm from "pages/Regist";
import MyPage from "pages/MyPage";
import Test from "pages/test";

// 인증 관련 컴포넌트: 보호된 라우트, 인증 컨텍스트
import ProtectedRoute from "components/auth/ProtectedRoute";
import { AuthProvider } from "components/auth/AuthContext";

// Redux 관련
import { Provider } from "react-redux";
import store from "stateStore/store.js";

// 국제화 및 번역 관련
import "./i18n";
import { useTranslation } from "react-i18next";
import Intro from "pages/Intro";

const App = () => {
  return (
    <AuthProvider>
      <Provider store={store}>
        <Router>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen min-w-72 ">
            <CustomNavbar />
            <div className="flex-grow mt-50">
              <Routes>
                <Route path="/" element={<LanguageRedirector />} />
                <Route path="*" element={<Navigate to="/" replace />} />

                <Route path="/:lang" element={<LanguageRedirector />}>
                  <Route path="*" element={<Navigate to="." replace />} />
                  {/* 공통된 경로들을 배치 */}
                  <Route index element={<Index />} />
                  <Route path="home" element={<ProtectedRoute component={Home} />} />

                  <Route path="login" element={<Login />} />
                  <Route path="regist" element={<ProtectedRoute component={RegistrationForm} />} />
                  <Route path="mypage" element={<ProtectedRoute component={MyPage} />} />
                  <Route path="board" element={<ProtectedRoute component={Suggestion} />} />
                  <Route path="result" element={<ProtectedRoute component={Result} />} />
                  <Route path="howtouse" element={<Howtouse />} />
                  <Route path="intro" element={<Intro />} />

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
  const { lang } = useParams();
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  useEffect(() => {
    // navigator.language에서 첫 부분만 추출 (예: "ko-KR" -> "ko")
    const browserLang = navigator.language.split("-")[0];
    if (!lang || !supportedLanguages.includes(lang)) {
      // 지원되지 않는 언어 코드이거나 언어 코드가 없는 경우 기본 언어로 리다이렉트
      const defaultLang = supportedLanguages.includes(browserLang) ? browserLang : "en";
      navigate(`/${defaultLang}`, { replace: true });
    } else if (i18n.language !== lang) {
      // URL 경로의 언어 코드가 현재 설정된 언어와 다른 경우 언어 변경
      i18n.changeLanguage(lang);
    }
  }, [lang, navigate, i18n]);

  return <Outlet />;
};
