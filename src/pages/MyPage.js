import { handleCheckNicknameDuplicate } from "api/authService";
import { deleteUser, fetchProfile, updateProfile } from "api/profileService";
import { useAuth } from "components/auth/AuthContext";
import LoadingSpinner from "components/views/LoadingSpinner";
import { getLangUrl } from "locales/utils";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const AccountPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  // 가정: 사용자 정보가 state 또는 props를 통해 제공됩니다.
  const [originData, setOriginData] = useState({
    name: "",
    nickname: "",
    email: "",
    phone: "",
    birthdate: "",
    marketingconsent: false,
    organization: "",
  });
  const [formData, setFormData] = useState({
    name: "",
    nickname: "",
    email: "",
    phone: "",
    birthdate: "",
    marketingconsent: false,
    organization: "",
  });
  const [profile, setProfile] = useState("");
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProfile();
        setProfile(data);
        setFormData({
          name: data.name,
          nickname: data.nickname,
          email: data.email,
          phone: data.phone,
          birthdate: data.birthdate,
          marketingconsent: data.marketingconsent,
          organization: data.organization,
        });
        setOriginData({
          name: data.name,
          nickname: data.nickname,
          email: data.email,
          phone: data.phone,
          birthdate: data.birthdate,
          marketingconsent: data.marketingconsent,
          organization: data.organization,
        });
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value); // 입력 값이 변경될 때마다 콘솔에 로그 출력
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmitClick = async () => {
    const confirmSubmit = window.confirm(t("profile.confirmRegist"));
    if (confirmSubmit) {
      const response = await updateProfile(formData);
      console.log(response);
      setProfile(formData);
      setEditMode(false);
    } else {
      console.log("cancelled");
    }
  };

  const [showDeleteInput, setShowDeleteInput] = useState(false);
  const [deleteInput, setDeleteInput] = useState("");
  const { authState, updateAuthState } = useAuth();

  const handleDelete = async () => {
    if (deleteInput === "Delete Account") {
      // 여기서 사용자에게 추가 확인을 요청하는 로직을 구현하거나,
      // 직접 계정 삭제 로직을 구현할 수 있습니다.
      if (window.confirm(t("profile.confirmDelete"))) {
        await deleteUser();
        updateAuthState({ ...authState, isLoggedIn: false });
        navigate(getLangUrl("/"));
        console.log("Account deleted");
      }
    } else {
      alert(t("profile.errorDelete"));
    }
  };
  const validateNickname = (value) => {
    // 한글과 숫자만 포함, 2~8자, 공백 없음을 확인하는 정규식
    const regex = /^[가-힣A-Za-z0-9]{2,8}$/;
    return regex.test(value);
  };
  const [nicknameError, setNicknameError] = useState("");
  const [isNicknameValid, setIsNicknameValid] = useState(false);

  const checkNicknameAvailability = async () => {
    if (!validateNickname(formData.nickname)) {
      setNicknameError(t("profile.errorNickname"));
      setIsNicknameValid(false);
      return;
    }

    try {
      // 서버에 닉네임 중복 검사 요청
      const response = await handleCheckNicknameDuplicate(formData.nickname);
      if (response.isAvailable) {
        setNicknameError(t("profile.possibleNickname"));
        setIsNicknameValid(true);
      } else {
        setNicknameError(t("profile.errorNicknameDuplicate"));
        setIsNicknameValid(false);
      }
    } catch (error) {
      console.error("Error checking nickname:", error);
      setNicknameError(t("profile.errorNicknameCheck"));
    }
  };

  const handleNicknameChange = (e) => {
    const value = e.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      nickname: value,
    }));
    setIsNicknameValid(false);
    if (!validateNickname(value)) {
      setNicknameError(t("profile.errorNickname"));
    } else {
      setNicknameError("");
    }
  };

  const handleCancel = () => {
    // 취소 로직 (예: 폼 필드 초기화 또는 페이지 이동)
    setFormData(originData);
    setNicknameError("");
    setIsNicknameValid(false);
  };
  return (
    <div className="xl:mt-32 md:mt-48 mt-32 max-w-4xl mx-auto px-5 pb-20">
      {profile ? (
        <div className="container mx-auto  p-6 rounded-md shadow-lg border border-blue-600">
          <div className="border-b border-blue-600 pb-4 mb-4 flex justify-between items-center">
            <div className="text-2xl font-semibold">{t("profile.title")}</div>
            <div>
              {editMode ? (
                <div className="mt-4">
                  <button
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                    onClick={() => {
                      handleSubmitClick();
                    }}>
                    Submit
                  </button>
                  <button
                    className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 ml-2"
                    onClick={() => {
                      setEditMode(false);
                      handleCancel();
                    }}>
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  className="text-blue-600 hover:underline py-2 mt-4"
                  onClick={() => {
                    setEditMode(true);
                  }}>
                  Edit profile
                </button>
              )}
            </div>
          </div>

          <div className="flex justify-between items-center mx-auto mb-10 min-[400px]:flex-row flex-col">
            <div className="text-2xl font-bold">{t("profile.name")}</div>
            {editMode ? (
              <input
                className="border p-2 min-[400px]:text-right text-center"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            ) : (
              <div className="text-lg">{formData.name}</div>
            )}
          </div>

          <div className="flex justify-between items-center mx-auto mb-10">
            <div className="text-2xl font-bold">{t("profile.nickname")}</div>

            {editMode ? (
              <div className="flex flex-col items-end">
                <div>
                  <button
                    type="button"
                    onClick={checkNicknameAvailability}
                    className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    {t("profile.checkDuplicate")}
                  </button>
                  <input
                    className="border p-2 text-right"
                    name="nickname"
                    value={formData.nickname}
                    onChange={handleNicknameChange}
                  />
                </div>

                {nicknameError && (
                  <p
                    className={`${
                      isNicknameValid ? "text-blue-500" : "text-red-500"
                    } text-xs italic`}>
                    {nicknameError}
                  </p>
                )}
              </div>
            ) : (
              <div className="text-lg">{formData.nickname}</div>
            )}
          </div>

          <div className="flex justify-between items-center mx-auto mb-10">
            <div className="text-2xl font-bold">{t("profile.phone")}</div>
            {editMode ? (
              <input
                className="border p-2 text-right"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            ) : (
              <div className="text-gray-600">{profile.phone}</div>
            )}
          </div>

          <div className="flex justify-between items-center mx-auto mb-10">
            <div className="text-2xl font-bold">{t("profile.email")}</div>
            <div className="text-lg ">{formData.email}</div>
          </div>

          <div className="mt-8">
            <div className="text-xl font-semibold mb-2">Security</div>
            <button
              className="text-red-600 hover:underline "
              onClick={() => setShowDeleteInput(!showDeleteInput)}>
              Delete account
            </button>
            {showDeleteInput && (
              <div>
                <p className="mt-4">{t("profile.deleteGuide")}</p>
                <input
                  type="text"
                  value={deleteInput}
                  onChange={(e) => setDeleteInput(e.target.value)}
                  className="border p-2"
                />
                <button className="bg-red-600 text-white p-2 mt-2" onClick={handleDelete}>
                  Confirm Delete
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};

export default AccountPage;
