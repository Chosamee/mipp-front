import { useEffect, useRef } from "react";
import styled from "styled-components";

const NaverLoginComp = ({ setGetToken, setUserInfo }) => {
  const naverRef = useRef();
  const { naver } = window;
  const NAVER_CLIENT_ID = process.env.REACT_APP_NAVER_CLIENT_ID;
  const NAVER_CALLBACK_URL = window.location.href;

  const initializeNaverLogin = () => {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: NAVER_CLIENT_ID,
      callbackUrl: NAVER_CALLBACK_URL,
      // 팝업창으로 로그인을 진행할 것인지?
      isPopup: false,
      // 버튼 타입 ( 색상, 타입, 크기 변경 가능 )
      loginButton: { color: "green", type: 3, height: 58 },
      callbackHandle: true,
    });
    naverLogin.init();

    // 선언된 naverLogin 을 이용하여 유저 (사용자) 정보를 불러오는데
    // 함수 내부에서 naverLogin을 선언하였기에 지역변수처리가 되어
    // userinfo 정보를 추출하는 것은 지역변수와 같은 함수에서 진행주어야한다.

    // 아래와 같이 로그인한 유저 ( 사용자 ) 정보를 직접 접근하여 추출가능하다.
    // 이때, 데이터는 첫 연동시 정보 동의한 데이터만 추출 가능하다.

    // 백엔드 개발자가 정보를 전달해준다면 아래 요기! 라고 작성된 부분까지는
    // 코드 생략이 가능하다.

    naverLogin.getLoginStatus(async function (status) {
      if (status) {
        // 아래처럼 선택하여 추출이 가능하고,
        const useremail = naverLogin.user.getEmail();
        const username = naverLogin.user.getName();
        // 정보 전체를 아래처럼 state 에 저장하여 추출하여 사용가능하다.
        // setUserInfo(naverLogin.user)
      }
    });
    // 요기!
  };

  // 네이버 소셜 로그인 (네아로) 는 URL 에 엑세스 어스코드가 붙어서 전달된다.
  // 우선 아래와 같이 어스코드를 추출 할 수 있으며,
  // 3부에 작성 될 Redirect 페이지를 통해 빠르고, 깨끗하게 처리가 가능하다.

  const userAccessToken = () => {
    window.location.href.includes("access_token") && getToken();
  };

  const getToken = () => {
    const token = window.location.href.split("=")[1].split("&")[0];
    // console.log, alert 창을 통해 어스코드가 잘 추출 되는지 확인하자!

    // 이후 로컬 스토리지 또는 state에 저장하여 사용하자!
    // localStorage.setItem('access_token', token)
    // setGetToken(token)

    //서버에도 올려야됨
  };

  // 화면 첫 렌더링이후 바로 실행하기 위해 useEffect 를 사용하였다.
  useEffect(() => {
    initializeNaverLogin();
    userAccessToken();
  }, []);

  const handleNaverLogin = () => {
    naverRef.current.children[0].click();
  };
  return (
    <>
      {" "}
      <NaverIdLogin ref={naverRef} id="naverIdLogin" />
      <NaverLoginBtn onClick={handleNaverLogin}>
        <NaverIcon alt="navericon" />
        <NaverLoginTitle>네이버로 로그인</NaverLoginTitle>
      </NaverLoginBtn>
    </>
  );
};

export default NaverLoginComp;

// 기존 로그인 버튼이 아닌 커스텀을 진행한 로그인 버튼만 나타내기 위해 작성
const NaverIdLogin = styled.div`
  display: none;
`;

const NaverLoginBtn = styled.button`
  display: flex;
  align-items: center;
  width: 360px;
  height: 56px;
  background-color: #03c75a;
  border-radius: 6px;
`;

// 로그인 버튼 사용가이드 링크를 들어가면 이미지를 받아 이렇게 적용이 가능하다 !
const NaverIcon = styled.div`
  width: 30px;
  height: 30px;
  margin-left: 10px;
  background: url("/images/Login/navericon.png") no-repeat center;
  background-size: 30px;
`;

const NaverLoginTitle = styled.span`
  margin-left: 90px;
  color: ${({ theme }) => theme.White};
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
`;
