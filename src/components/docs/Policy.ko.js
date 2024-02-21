import React from "react";
import styled from "styled-components";

const BracketOl = styled.ol`
  counter-reset: list-item 0; /* 카운터를 0부터 시작하도록 초기화 */
  > li {
    counter-increment: list-item; /* 각 항목마다 카운터를 1씩 증가 */
  }
  > li::before {
    content: counter(list-item) ") "; /* 카운터와 닫는 괄호를 내용으로 설정 */
  }
`;

const DiskOl = styled.ol`
  > li::before {
    content: "• ";
  }
`;

// 공통 스타일이 적용된 TableCell 컴포넌트
const TableCell = ({ children, isHeader = false }) => {
  const commonStyles = "border border-gray-400 px-4 py-2 w-1/2";
  return isHeader ? (
    <th className={`${commonStyles} text-gray-800`}>{children}</th>
  ) : (
    <td className={commonStyles}>{children}</td>
  );
};

const PolicyKO = () => {
  return (
    <React.Fragment>
      <h1 className="font-semibold mb-2">MIPP 개인정보 처리방침</h1>
      <p>
        주식회사 더블H컴퍼니(이하 ‘회사’)는 관련 법령에 따라 MIPP 서비스 및 이에 부수하는 제반 서
        비스(통칭하여 이하 ‘서비스’)를 이용하는 회원의 개인정보를 보호하고, 이와 관련한 불편을 신속
        하고 원활하게 처리하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.
      </p>

      {/* 약관 1 */}
      <h2 className="text-3xl font-medium mt-10 mb-6">1. 개인정보의 처리목적</h2>
      <p className="mb-4 font-semibold">회사는 다양한 목적을 위하여 개인정보를 처리합니다.</p>
      <BracketOl>
        <li className="mb-2">
          서비스 제공 논리 회원 및 기간의 활용, 서비스 제공, 콘텐츠 제공, 맞춤형 서비스 제공 등
          회사의 각종 서비스 제공을 위한 목적으로 개인정보를 처리합니다.
        </li>
        <li className="mb-2">
          민원처리, 개인정보 열람, 개인정보 정정/삭제, 개인정보 처리정지 요구 등 민원처리를 위한
          업무 등을 위해 개인정보를 처리합니다.
        </li>
        <li className="mb-2">
          마케팅 및 광고에의 활용: 맞춤형 광고 제공, 이벤트 및 광고성 정보 제공 및 참여기회 제공을
          위한 목적으로 개인정보를 처리합니다.
        </li>
        <li className="mb-2">
          서비스 개선 및 개발: 기존 서비스 개선 및 신규 서비스, 맞춤형 서비스 개발을 위한 목적으로
          개인정보를 처리합니다.
        </li>
        <li className="mb-2">
          유료서비스 제공: 유료서비스 구매 및 이용 시 요금결제, 정산 등을 목적으로 개인정보를
          처리합니다.
        </li>
      </BracketOl>

      {/* 약관 2 */}
      <h2 className="text-3xl font-medium mt-10 mb-6">2. 개인정보 수집항목 및 수집 방법</h2>
      <p className="mb-4 font-semibold">
        회사가 서비스의 제공을 위해 아래와 같은 개인정보를 수집하고 있습니다.
      </p>
      <table className="min-w-full border-collapse mb-4">
        <thead>
          <tr>
            <TableCell isHeader>수집항목</TableCell>
            <TableCell isHeader>이용목적</TableCell>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableCell>
              (필수) <br />
              이메일, 닉네임, 이름
            </TableCell>
            <TableCell>본인인증 및 회원관리</TableCell>
          </tr>
          <tr>
            <TableCell>회원이 업로드 한 파일, 링크</TableCell>
            <TableCell>서비스 제공 및 개발</TableCell>
          </tr>
          <tr>
            <TableCell>
              (선택) <br />
              연락 가능한 이메일 주소, 이름, 휴대폰번호
            </TableCell>
            <TableCell>이벤트 안내 및 뉴스레터 발송 등 마케팅 활용</TableCell>
          </tr>
          <tr>
            <TableCell>IP 주소, 쿠키, 접속 로그, 방문 일시, 서비스 이용기록</TableCell>
            <TableCell>서비스 제공</TableCell>
          </tr>
          <tr>
            <TableCell>
              카드사명, 카드번호, 이메일, 생년월일, 사업자등록번호, 예금주명, 계좌번호, 은행명,
              휴대전화번호 및 통신사 정보
            </TableCell>
            <TableCell>유료 결제</TableCell>
          </tr>
        </tbody>
      </table>
      <p className="mb-4 font-semibold">개인정보를 수집하는 방법은 다음과 같습니다.</p>
      <p className="mb-2">
        개인정보를 수집하는 경우에는 반드시 사전에 이용자에게 해당 사실을 알리고 동의를 구하고
        있으며, 아래와 같은 방법을 통해 개인정보를 수집합니다.
      </p>
      <DiskOl>
        <li className="mb-2">
          회원가입 및 서비스 이용 과정에서 이용자가 개인정보 수집에 대해 동의를 하고 직접 정보를
          입력하는 경우
        </li>
        <li className="mb-2">고객센터를 통한 상담 과정에서 메일, 전화 등에서 수집 하는 경우</li>
        <li className="mb-2">
          온·오프라인에서 진행되는 이벤트/행사 등에 참여 하는 경우 (마케팅 목적의 경우 별도 동의를
          통해 수집)
        </li>
      </DiskOl>

      {/* 약관 3 */}
      <h2 className="text-3xl font-medium mt-10 mb-6">3. 개인정보 처리 및 보유기간</h2>
      <DiskOl>
        <li className="mb-2">
          회사는 법령에 따른 개인정보 보유/이용기간 또는 정보주체로부터 개인정보 수집 시에 동의를
          받은 개인정보 보유/이용기간 내에서 개인정보를 처리/보유합니다.
        </li>
        <li className="mb-2">
          회사는 개인정보의 수집 및 이용 목적이 달성되면 지체 없이 파기합니다. 회원의 서비스 탈퇴
          또는 이용자격을 상실할 경우에는 별도의 요청이 없더라도 수집된 회원의 정보를 지체 없이
          파기합니다. 다만, 회원 탈퇴 또는 이용자격 상실에도 불구하고 다음의 정보에 대해서는 아래의
          이유로 보존합니다.
        </li>
      </DiskOl>
    </React.Fragment>
  );
};

export default PolicyKO;
