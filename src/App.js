// React 및 라우팅 관련 라이브러리
import React, { Suspense, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useNavigate,
  useParams,
  Outlet,
} from "react-router-dom";

// 컴포넌트: 네비게이션 바, 푸터 등 UI 요소
import Navbar from "components/views/Navbar";
import Footer from "components/views/Footer";
import ScrollToTop from "components/utils/ScrollToTop";

// 인증 관련 컴포넌트: 보호된 라우트, 인증 컨텍스트
import ProtectedRoute from "components/auth/ProtectedRoute";
import { AuthProvider } from "components/auth/AuthContext";

// Redux 관련
import { Provider } from "react-redux";
import store from "stateStore/store.js";

// 국제화 및 번역 관련
import "./i18n";
import { useTranslation } from "react-i18next";
import LoginCallbackPage from "components/auth/LoginCallbackPage";

// 페이지: 애플리케이션의 각 페이지
import Home from "pages/Home";
import Index from "pages/Index";
import Login from "pages/Login";
import Result from "pages/Result";
import Howtouse from "pages/Howtouse";
import Suggestion from "pages/Suggestion";
import Asks from "pages/ask/Asks";
import AskCreate from "pages/ask/AskCreate";
import AskDetail from "pages/ask/AskDetail";
import RegistrationForm from "pages/Regist";
import MyPage from "pages/MyPage";
import Intro from "pages/Intro";
import DetailPage from "pages/detail/DetailPage";
import FAQ from "pages/solution/FAQ";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <AuthProvider>
          <Suspense
            fallback={
              <div>
                Page Loading... Wait a second. <br />
                If the problem persists, please contact your network administrator or web page
                administrator.
              </div>
            }>
            <ScrollToTop />
            <div className="flex flex-col min-h-screen min-w-72 ">
              <Navbar />
              <div className="flex-grow desktop:mt-[125px] mt-[106px] ">
                <Routes>
                  <Route path="/" element={<LanguageRedirector />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                  <Route path="login/callback" element={<LoginCallbackPage />} />
                  <Route path="/:lang" element={<LanguageRedirector />}>
                    <Route path="*" element={<Navigate to="." replace />} />
                    {/* 공통된 경로들을 배치 */}
                    <Route index element={<Index />} />

                    <Route path="login" element={<Login />} />
                    <Route
                      path="regist"
                      element={<ProtectedRoute component={RegistrationForm} />}
                    />
                    <Route path="mypage" element={<ProtectedRoute component={MyPage} />} />
                    <Route path="board" element={<ProtectedRoute component={Suggestion} />} />
                    <Route path="result" element={<ProtectedRoute component={Result} />} />
                    <Route path="home" element={<ProtectedRoute component={Home} />} />
                    {/* <Route path="regist" element={<RegistrationForm />} />
                  <Route path="mypage" element={<MyPage />} />
                  <Route path="board" element={<Suggestion />} />
                  <Route path="result" element={<Result />} /> */}
                    {/* <Route path="home" element={<Home />} /> */}
                    <Route path="howtouse" element={<Howtouse />} />
                    <Route path="intro" element={<Intro />} />

                    <Route path="asks" element={<ProtectedRoute component={Asks} />} />
                    <Route path="faqs" element={<FAQ />} />
                    <Route
                      path="asks/detail/:id"
                      element={<ProtectedRoute component={AskDetail} />}
                    />
                    <Route path="asks/create" element={<ProtectedRoute component={AskCreate} />} />
                    <Route path="detail/:id" element={<ProtectedRoute component={DetailPage} />} />
                  </Route>
                </Routes>
              </div>
              <Footer />
            </div>
          </Suspense>
        </AuthProvider>
      </Router>
    </Provider>
  );
};

export default App;

const supportedLanguages = ["en", "ko"]; // 지원되는 언어 목록

const LanguageRedirector = () => {
  const { lang } = useParams();
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  useEffect(() => {
    const browserLang = navigator.language.split("-")[0];
    const defaultLang = supportedLanguages.includes(browserLang) ? browserLang : "en";
    const targetLang = supportedLanguages.includes(lang) ? lang : defaultLang;

    // URL에 설정된 언어가 i18n의 현재 언어와 다른 경우에만 언어 변경을 시도
    if (i18n.language !== targetLang) {
      i18n.changeLanguage(targetLang).then(() => {
        // 언어 변경 후 현재 URL이 변경된 언어에 맞지 않는 경우, 해당 언어의 URL로 리디렉션
        if (lang !== targetLang) {
          navigate(`/${targetLang}`, { replace: true });
        }
      });
    }
  }, [lang, navigate, i18n]);

  return <Outlet />;
};
