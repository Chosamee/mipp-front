import { deleteUser, fetchProfile, updateProfile } from "api/profileService";
import LoadingSpinner from "components/LoadingSpinner";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AccountPage = () => {
  const navigate = useNavigate();
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

  const handleDelete = async () => {
    await deleteUser();
    navigate("/");
  };

  return (
    <div className="py-10 max-w-4xl mx-auto px-5 pt-40">
      {profile ? (
        <div className="container mx-auto bg-gray-100 p-6 rounded-md shadow-lg border border-blue-600">
          <div className="border-b border-blue-600 pb-4 mb-4 flex justify-between items-center">
            <h1 className="text-2xl font-semibold">Profile</h1>
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
            <div className="text-2xl font-bold">Name</div>
            {editMode ? (
              <input
                className="border p-2 min-[400px]:text-right text-center"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            ) : (
              <div className="text-lg p-2">{formData.name}</div>
            )}
          </div>

          <div className="flex justify-between items-center mx-auto mb-10">
            <div className="text-2xl font-bold">NickName</div>

            {editMode ? (
              <input
                className="border p-2 text-right"
                name="nickname"
                value={formData.nickname}
                onChange={handleChange}
              />
            ) : (
              <div className="text-lg p-2">{formData.nickname}</div>
            )}
          </div>

          <div className="flex justify-between items-center mx-auto mb-10">
            <div className="text-2xl font-bold">Email</div>
            <div className="text-lg">{formData.email}</div>
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
            <button className="text-red-600 hover:underline ml-4" onClick={handleDelete}>
              Delete account
            </button>
          </div>
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};

export default AccountPage;
