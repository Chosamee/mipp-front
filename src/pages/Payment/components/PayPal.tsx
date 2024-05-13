import * as PortOne from "@portone/browser-sdk/v2";
import { getLangUrl } from "locales/utils";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;
interface PaymentRequest {
  uiType: "PAYPAL_SPB";
  storeId: string;
  channelKey: string;
  paymentId: string;
  orderName: string;
  totalAmount: number;
  currency: "CURRENCY_USD";
}

const PayPal = () => {
  const paymentId = `payment-${crypto.randomUUID()}`;
  const channelKey = process.env.REACT_APP_PORTONE_CHANNEL_KEY;
  const storeId = process.env.REACT_APP_PORTONE_STORE_ID;
  const navigate = useNavigate();

  const requestData: PaymentRequest = {
    uiType: "PAYPAL_SPB",
    storeId: storeId!,
    channelKey: channelKey!,
    paymentId: paymentId,
    orderName: "나이키 와플 트레이너 2 SD",
    totalAmount: 1000,
    currency: "CURRENCY_USD",
  };

  const loadUI = () => {
    PortOne.loadPaymentUI(requestData, {
      onPaymentSuccess: (response) => {
        alert(response);
        console.log("debug", response);
        navigate(getLangUrl("/payment/complete"));
        // 고객사 서버에서 /payment/complete 엔드포인트를 구현해야 합니다.
        // (다음 목차에서 설명합니다)
        // const notified = fetch(`${BASE_API_URL}/payment/complete`, {
        //   method: "POST",
        //   headers: { "Content-Type": "application/json" },
        //   // paymentId와 주문 정보를 서버에 전달합니다
        //   body: JSON.stringify({
        //     paymentId: paymentId,
        //     // 주문 정보...
        //   }),
        // });
      },
      onPaymentFail: (error) => {
        alert(error);
      },
    });
  };

  useEffect(() => {
    loadUI();
  }, []);

  return (
    <div>
      <h1>PayPal</h1>
      <div className="portone-ui-container" data-portone-ui-type="PAYPAL_SPB">
        {/* PortOne PG 전용 버튼이 그려집니다 */}
      </div>
    </div>
  );
};
export default PayPal;
