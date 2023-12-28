import React, { useState } from "react";
import { handleCheckNicknameDuplicate, handleRegist } from "api/authService";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [nicknameError, setNicknameError] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [organization, setOrganization] = useState("");
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [isNicknameValid, setIsNicknameValid] = useState(false);
  const navigate = useNavigate();
  const validateNickname = (value) => {
    // 한글과 숫자만 포함, 2~8자, 공백 없음을 확인하는 정규식
    const regex = /^[가-힣A-Za-z0-9]{2,8}$/;
    return regex.test(value);
  };

  const checkNicknameAvailability = async () => {
    if (!validateNickname(nickname)) {
      setNicknameError("닉네임은 한글, 영어, 숫자를 포함한 2~8자여야 합니다.");
      setIsNicknameValid(false);
      return;
    }

    try {
      // 서버에 닉네임 중복 검사 요청
      const response = await handleCheckNicknameDuplicate(nickname);
      if (response.isAvailable) {
        setNicknameError("사용 가능 합니다.");
        setIsNicknameValid(true);
      } else {
        setNicknameError("이미 사용 중인 닉네임입니다.");
        setIsNicknameValid(false);
      }
    } catch (error) {
      console.error("Error checking nickname:", error);
      setNicknameError("닉네임 검사 중 오류가 발생했습니다.");
    }
  };

  const handleNicknameChange = (e) => {
    const value = e.target.value;
    setNickname(value);
    setIsNicknameValid(false);
    if (!validateNickname(value)) {
      setNicknameError("닉네임은 한글, 영어, 숫자를 포함한 2~8자여야 합니다.");
    } else {
      setNicknameError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isNicknameValid) {
      setNicknameError("닉네임 중복 검사를 해주세요.");
      return;
    }
    // 여기에 회원 가입 요청 로직 구현
    try {
      const response = await handleRegist({
        nickname: nickname,
        phone: phoneNumber,
        birthDate: birthDate,
        marketingConsent: marketingConsent,
        organization: organization,
      });
      console.log(response.data);
      // 회원 가입 성공 후 처리 (예: 로그인 페이지로 리다이렉션)
      navigate("/home");
    } catch (error) {
      console.error("Error submitting registration:", error);
      // 오류 처리
    }
  };

  const handleCancel = () => {
    // 취소 로직 (예: 폼 필드 초기화 또는 페이지 이동)
    setNickname("");
    setPhoneNumber("");
  };

  return (
    <div className="container mx-auto p-4">
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            이름 *
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="이름"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nickname">
            닉네임 *
          </label>
          <div className="flex">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="nickname"
              type="text"
              placeholder="닉네임"
              value={nickname}
              onChange={handleNicknameChange}
              required
            />
            <button
              type="button"
              onClick={checkNicknameAvailability}
              className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              중복 검사
            </button>
          </div>
          {nicknameError && (
            <p className={`${isNicknameValid ? "text-blue-500" : "text-red-500"} text-xs italic`}>
              {nicknameError}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
            전화번호 *
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phoneNumber"
            type="tel"
            placeholder="전화번호"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="birthDate">
            생일 *
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="birthDate"
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="organization">
            소속/단체
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="organization"
            type="text"
            placeholder="소속 또는 단체명 (선택 사항)"
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-600"
              checked={marketingConsent}
              onChange={(e) => setMarketingConsent(e.target.checked)}
            />
            <span className="ml-2 text-gray-700 text-sm">마케팅 정보 수신 동의</span>
          </label>
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit">
            가입
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleCancel}>
            취소
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
