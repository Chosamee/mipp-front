import * as PortOne from "@portone/browser-sdk/v2";
import React, { useState } from "react";
import PayPal from "./components/PayPal";

const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;

function PaymentForm() {
  const channelKey = process.env.REACT_APP_PORTONE_CHANNEL_KEY;
  const storeId = process.env.REACT_APP_PORTONE_STORE_ID;

  const handlePayment = async () => {
    const paymentId = `payment-${crypto.randomUUID()}`;

    const response = await PortOne.requestPayment({
      storeId: storeId!,
      // 채널 키 설정
      channelKey: channelKey,
      paymentId: paymentId,
      orderName: "나이키 와플 트레이너 2 SD",
      totalAmount: 1000,
      currency: "CURRENCY_USD",
      payMethod: "PAYPAL",
      // 웹훅 설정
      noticeUrls: ["https://localhost:3000/portone-webhook"],
      redirectUrl: `${window.location.href}/pay`,
    });

    if (response === undefined || response.code != null) {
      console.log("error");
      // 오류 발생
      return alert(response?.message);
    }
    console.log("debug", response);
    // 고객사 서버에서 /payment/complete 엔드포인트를 구현해야 합니다.
    // (다음 목차에서 설명합니다)
    const notified = await fetch(`${BASE_API_URL}/payment/complete`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // paymentId와 주문 정보를 서버에 전달합니다
      body: JSON.stringify({
        paymentId: paymentId,
        // 주문 정보...
      }),
    });
  };

  return (
    <div>
      <button onClick={handlePayment}>결제하기</button>
      <PayPal />
    </div>
  );
}

export default PaymentForm;
