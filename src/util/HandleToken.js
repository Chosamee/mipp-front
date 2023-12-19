// 토큰 저장
const saveTokenToLocalStorage = (token) => {
  const encodedToken = btoa(token); // Base64 인코딩
  localStorage.setItem("userToken", encodedToken);
};

// 토큰 로드
const loadTokenFromLocalStorage = () => {
  const encodedToken = localStorage.getItem("userToken");
  if (encodedToken) {
    const decodedToken = atob(encodedToken); // Base64 디코딩
    return decodedToken;
  }
  return null;
};

// 토큰 삭제
const removeTokenFromLocalStorage = () => {
  localStorage.removeItem("userToken");
  localStorage.removeItem("name");
  localStorage.removeItem("email");
};

/*
// 사용 예시
const token = "your_token_here";
saveTokenToLocalStorage(token);

const loadedToken = loadTokenFromLocalStorage();
console.log("Loaded Token:", loadedToken);

// 토큰 삭제
removeTokenFromLocalStorage();
*/
export {
  saveTokenToLocalStorage,
  loadTokenFromLocalStorage,
  removeTokenFromLocalStorage,
};
