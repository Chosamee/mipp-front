// React 및 라우팅 관련 라이브러리
import React, { Suspense, useEffect, useState } from "react";
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
import ResultList from "pages/result/ResultList";
import Howtouse from "pages/Howtouse";
import Ask from "pages/Support/Ask";
import AskCreate from "pages/Support/Ask/AskCreate";
import AskDetail from "pages/Support/Ask/AskDetail";
import RegistrationForm from "pages/Regist";
import MyPage from "backup/MyPage";
import Intro from "pages/Intro";
import Detail from "pages/result/Detail";
import FAQs from "pages/Support/FAQs";
import TermsPage from "pages/docs/Terms";
import PolicyPage from "pages/docs/Policy";
import NoticeLists from "pages/Support/notice/NoticeList";
import NoticeDetail from "pages/Support/notice/NoticeDetail";
import CommunityList from "pages/community/CommunityList";
import CommunityDetail from "pages/community/CommunityDetail";
import CommunityEditor from "pages/community/CommunityEditor";
import Support from "pages/Support";
import { SearchParamsProvider } from "components/SearchParamsContext";
import Dashboard from "pages/Dashboard";
import ProfileEditor from "pages/Dashboard/ProfileEditor";

const App = () => {
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    // 컴포넌트가 마운트된 후 일정 시간(예: 100ms)이 지나면 fallback 컨텐츠를 보여주도록 설정
    const timer = setTimeout(() => setShowFallback(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      console.log("설치 프롬프트가 표시되지 않습니다.");
      // 여기에 필요한 로직 추가
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거하기 위한 정리 함수
    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []); // 의존성 배열을 빈 배열로 설정하여 컴포넌트 마운트 시에만 실행되도록 함

  return (
    <Provider store={store}>
      <Router>
        <AuthProvider>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen min-w-72 font-['Pretendard-Regular']">
            <Navbar />
            <Suspense
              fallback={
                showFallback ? (
                  <div className="flex flex-col min-h-screen min-w-72 font-['Pretendard-Regular']" />
                ) : null
              }>
              <div className="flex-grow md:mt-[125px] mt-[106px] ">
                <Routes>
                  <Route path="/" element={<Index />} />
                  {/* <Route path="/" element={<Index />} /> */}
                  <Route path="*" element={<Navigate to="/" replace />} />
                  <Route path="login/callback" element={<LoginCallbackPage />} />
                  <Route path="/:lang" element={<LanguageRedirector />}>
                    <Route path="*" element={<Navigate to="." replace />} />
                    {/* 공통된 경로들을 배치 */}
                    <Route index element={<Index />} />
                    <Route path="docs/terms" element={<TermsPage />} />
                    <Route path="docs/policy" element={<PolicyPage />} />
                    <Route path="login" element={<Login />} />
                    <Route
                      path="regist"
                      element={<ProtectedRoute component={RegistrationForm} />}
                    />
                    <Route path="mypage" element={<ProtectedRoute component={MyPage} />} />
                    <Route path="result" element={<ProtectedRoute component={ResultList} />} />
                    <Route path="home" element={<ProtectedRoute component={Home} />} />
                    {/* <Route path="regist" element={<RegistrationForm />} />
                  <Route path="mypage" element={<MyPage />} />
                  <Route path="board" element={<Suggestion />} />
                  <Route path="result" element={<Result />} /> */}
                    {/* <Route path="home" element={<Home />} /> */}
                    <Route path="howtouse" element={<Howtouse />} />
                    <Route path="intro" element={<Intro />} />
                    {/* Notice */}
                    <Route path="notice/:id" element={<NoticeDetail />} />
                    {/* Community */}
                    <Route
                      path="community"
                      element={<ProtectedRoute component={CommunityList} />}
                    />
                    <Route
                      path="community/:id"
                      element={<ProtectedRoute component={CommunityDetail} />}
                    />
                    <Route
                      path="community/:id/edit"
                      element={<ProtectedRoute component={CommunityEditor} />}
                    />
                    <Route
                      path="community/create"
                      element={<ProtectedRoute component={CommunityEditor} />}
                    />
                    {/* Support */}

                    <Route path="dashboard" element={<ProtectedRoute component={Dashboard} />} />
                    <Route
                      path="profile/edit"
                      element={<ProtectedRoute component={ProfileEditor} />}
                    />
                    <Route
                      path="support"
                      element={
                        <SearchParamsProvider>
                          <Support />
                        </SearchParamsProvider>
                      }>
                      <Route path="notice" element={<Support />} />
                      <Route path="faq" element={<Support />} />
                      <Route path="contact" element={<Support />} />
                      <Route
                        index
                        element={
                          <SearchParamsProvider>
                            <Support />
                          </SearchParamsProvider>
                        }
                      />
                    </Route>
                    <Route
                      path="support/contact"
                      element={<ProtectedRoute component={AskCreate} />}
                    />
                    <Route
                      path="support/contact/detail/:id"
                      element={<ProtectedRoute component={AskDetail} />}
                    />
                    <Route path="detail/:id" element={<ProtectedRoute component={Detail} />} />
                  </Route>
                </Routes>
              </div>
            </Suspense>
            <Footer />
          </div>
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
