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

// Redux 관련
import { Provider } from "react-redux";
import store from "stateStore/store";

// 국제화 및 번역 관련
import "./i18n";
import { useTranslation } from "react-i18next";
import LoginCallbackPage from "components/auth/LoginCallbackPage";
import { SearchParamsProvider } from "components/SearchParamsContext";

// 페이지: 애플리케이션의 각 페이지
// import Home from "pages/Home";
// import Login from "pages/Login";
// import ResultList from "pages/result/ResultList";
// import Index from "pages/Index";
// import Intro from "pages/Intro";
// import Howtouse from "pages/Howtouse";
// import Ask from "pages/Support/Ask";
// import AskCreate from "pages/Support/Ask/AskCreate";
// import AskDetail from "pages/Support/Ask/AskDetail";
// import RegistrationForm from "pages/Regist";
// import MyPage from "backup/MyPage";
// import Detail from "pages/result/Detail";
// import FAQs from "pages/Support/FAQs";
// import TermsPage from "pages/docs/Terms";
// import PolicyPage from "pages/docs/Policy";
// import NoticeLists from "pages/Support/notice/NoticeList";
// import NoticeDetail from "pages/Support/notice/NoticeDetail";
// import CommunityList from "pages/community/CommunityList";
// import CommunityDetail from "pages/community/CommunityDetail";
// import CommunityEditor from "pages/community/CommunityEditor";
// import Support from "pages/Support";
// import Dashboard from "pages/Dashboard";
// import ProfileEditor from "pages/Dashboard/ProfileEditor";

const Home = React.lazy(() => import("pages/Home"));
const Login = React.lazy(() => import("pages/Login"));
const ResultList = React.lazy(() => import("pages/result/ResultList"));
const Index = React.lazy(() => import("pages/Index"));
const Intro = React.lazy(() => import("pages/Intro"));
const Howtouse = React.lazy(() => import("pages/Howtouse"));
const Ask = React.lazy(() => import("pages/Support/Ask"));
const AskCreate = React.lazy(() => import("pages/Support/Ask/AskCreate"));
const AskDetail = React.lazy(() => import("pages/Support/Ask/AskDetail"));
const RegistrationForm = React.lazy(() => import("pages/Regist"));
const Detail = React.lazy(() => import("pages/result/Detail"));
const FAQs = React.lazy(() => import("pages/Support/FAQs"));
const TermsPage = React.lazy(() => import("pages/docs/Terms"));
const PolicyPage = React.lazy(() => import("pages/docs/Policy"));
const NoticeLists = React.lazy(() => import("pages/Support/notice/NoticeList"));
const NoticeDetail = React.lazy(() => import("pages/Support/notice/NoticeDetail"));
const CommunityList = React.lazy(() => import("pages/community/CommunityList"));
const CommunityDetail = React.lazy(() => import("pages/community/CommunityDetail"));
const CommunityEditor = React.lazy(() => import("pages/community/CommunityEditor"));
const Support = React.lazy(() => import("pages/Support"));
const Dashboard = React.lazy(() => import("pages/Dashboard"));
const ProfileEditor = React.lazy(() => import("pages/Dashboard/ProfileEditor"));
const Visual = React.lazy(() => import("pages/Visual"));

const App = () => {
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    // 컴포넌트가 마운트된 후 일정 시간(예: 100ms)이 지나면 fallback 컨텐츠를 보여주도록 설정
    const timer = setTimeout(() => setShowFallback(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: any) => {
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
        <ScrollToTop />
        <div className="flex flex-col min-h-screen min-w-72 font-['Pretendard-Regular']">
          <Navbar />
          <Suspense
            fallback={
              showFallback ? (
                <div className="flex flex-col min-h-screen min-w-72 font-['Pretendard-Regular']" />
              ) : null
            }>
            <div className="flex-grow mt-20 ">
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
                    element={
                      <ProtectedRoute>
                        <RegistrationForm />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="result"
                    element={
                      <ProtectedRoute>
                        <ResultList />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="home"
                    element={
                      <ProtectedRoute>
                        <Home />
                      </ProtectedRoute>
                    }
                  />

                  <Route path="howtouse" element={<Howtouse />} />
                  <Route path="intro" element={<Intro />} />

                  <Route path="notice/:id" element={<NoticeDetail />} />
                  {/* Community */}
                  <Route path="community" element={<CommunityList />} />
                  <Route path="community/:id" element={<CommunityDetail />} />
                  <Route
                    path="community/:id/edit"
                    element={
                      <ProtectedRoute>
                        <CommunityEditor />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="community/create"
                    element={
                      <ProtectedRoute>
                        <CommunityEditor />
                      </ProtectedRoute>
                    }
                  />
                  {/* Support */}

                  <Route
                    path="dashboard"
                    element={
                      <ProtectedRoute>
                        <Dashboard />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="profile/edit"
                    element={
                      <ProtectedRoute>
                        <ProfileEditor />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="support/*"
                    element={
                      <SearchParamsProvider>
                        <Support />
                      </SearchParamsProvider>
                    }></Route>
                  <Route
                    path="support/contact/detail/:id"
                    element={
                      <ProtectedRoute>
                        <AskDetail />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="detail/:id"
                    element={
                      <ProtectedRoute>
                        <Detail />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="visual/:id"
                    element={
                      <ProtectedRoute>
                        <Visual />
                      </ProtectedRoute>
                    }
                  />
                </Route>
              </Routes>
            </div>
          </Suspense>
          <Footer />
        </div>
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
    const targetLang = lang && supportedLanguages.includes(lang) ? lang : defaultLang;

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
