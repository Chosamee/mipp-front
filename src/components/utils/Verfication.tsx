import React, { useState } from "react";

const VerificationForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [code, setCode] = useState("");
  const [verificationStarted, setVerificationStarted] = useState(false);

  const requestVerification = () => {
    // 백엔드에 인증 코드를 요청하는 API 호출
    console.log("Requesting verification for number:", phoneNumber);
    setVerificationStarted(true);
    // API 호출 로직을 구현하세요
  };

  const verifyCode = () => {
    // 백엔드에 인증 코드를 검증하는 API 호출
    console.log("Verifying code:", code);
    // API 호출 로직을 구현하세요
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-xs">
        <label htmlFor="phone-number" className="block text-gray-700 text-sm font-bold mb-2">
          Phone Number
        </label>
        <input
          id="phone-number"
          type="tel"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="+1234567890"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          disabled={verificationStarted}
        />
        <button
          className={`mt-4 w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
            verificationStarted ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={requestVerification}
          disabled={verificationStarted}>
          Request Verification
        </button>
      </div>
      {verificationStarted && (
        <div className="w-full max-w-xs mt-8">
          <label htmlFor="verification-code" className="block text-gray-700 text-sm font-bold mb-2">
            Verification Code
          </label>
          <input
            id="verification-code"
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <button
            className="mt-4 w-full bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={verifyCode}>
            Verify Code
          </button>
        </div>
      )}
    </div>
  );
};

export default VerificationForm;
