import { fetchProfile, updateProfile } from "api/profileService";
import LoadingSpinner from "components/views/LoadingSpinner";
import React, { useEffect, useState } from "react";

const AccountPage = () => {
  // 가정: 사용자 정보가 state 또는 props를 통해 제공됩니다.
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
    const confirmSubmit = window.confirm("이 내용을 게시하시겠습니까?");
    if (confirmSubmit) {
      const response = await updateProfile(formData);
      console.log(response);
      setProfile(formData);
      setEditMode(false);
    } else {
      console.log("취소됨");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      {profile ? (
        <div className="container mx-auto bg-white p-6 rounded-md shadow-md">
          <div className="border-b pb-4 mb-4">
            <h1 className="text-2xl font-semibold">Profile</h1>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div>
                {editMode ? (
                  <div className="mt-4">
                    <input
                      className="border p-2"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                ) : (
                  <h2 className="text-xl font-semibold">{formData.name}</h2>
                )}
                {editMode ? (
                  <div className="mt-4">
                    <input
                      className="border p-2"
                      name="nickname"
                      value={formData.nickname}
                      onChange={handleChange}
                    />
                  </div>
                ) : (
                  <h2 className="text-xl font-semibold">{formData.nickname}</h2>
                )}
                <h2 className="text-xl font-semibold">{formData.email}</h2>
              </div>
            </div>
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
                    }}>
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  className="text-blue-600 hover:underline"
                  onClick={() => {
                    setEditMode(true);
                  }}>
                  Edit profile
                </button>
              )}
            </div>
          </div>

          <div className="mt-4">
            <h2 className="text-gray-700 text-2xl font-bold">phone number</h2>
            {editMode ? (
              <div className="mt-4">
                <input
                  className="border p-2"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            ) : (
              <p className="text-gray-600">{profile.phone}</p>
            )}
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-2">Security</h2>
            <button className="text-red-600 hover:underline ml-4">Delete account</button>
          </div>
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};

export default AccountPage;
