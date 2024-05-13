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
        주식회사 미피아(이하 ‘회사’)는 관련 법령에 따라 MIPP 서비스 및 이에 부수하는 제반 서
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
      <BracketOl>
        <li className="mb-2">
          관계 법령 위반에 따른 수사, 조사 등이 진행 중인 경우에는 해당 수사·조사 종료 시까지
        </li>
        <li className="mb-2">
          서비스 이용에 따른 채권·채무관계 잔존 시에는 해당 채권·채무관계 정산 시까지
        </li>
        <li className="mb-2">
          회사가 이용약관에 따라 서비스 이용계약을 해지한 경우 부정한 재가입 및 서비스 이용을
          방지하기 위하여 서비스
        </li>
        <li className="mb-2">
          상법, 전자상거래 등에서의 소비자보호에 관한 법률 등 관계법령의 규정에 의하여 보존할 필요가
          있는 경우 회사는 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다.
        </li>
      </BracketOl>
      <p className="mb-2 ml-6">
        4-1 서비스 이용 관련 개인정보 (로그기록): 「통신비밀보호법」상 보존기간인 3개월
      </p>
      <p className="mb-2 ml-6">
        4-2 계약 또는 청약철회 등에 관한 기록 및 대금결제 및 재화 등의 공급에 관한 기록:
        「전자상거래 등에서의 소비자보호에 관한 법률」상 보존기간인 5년
      </p>
      <p className="mb-2 ml-6">
        4-3 소비자의 불만 또는 분쟁처리에 관한 기록: 「전자상거래 등에서의 소비자보호에 관한
        법률」상 보존기간인 3년
      </p>
      <p className="mb-2 ml-6">
        4-4 표시 광고에 관한 기록: 「전자상거래 등에서의 소비자보호에 관한 법률」상 보존기간인 6개월
      </p>
      <p className="mb-2 ml-6">
        4-5 세법이 규정하는 모든 거래에 관한 장부 및 증빙서류: 「국세기본법」상 보존기간인 5년
      </p>
      {/* 약관 4 */}
      <h2 className="text-3xl font-medium mt-10 mb-6">4. 개인정보의 제공</h2>
      <p className="mb-2">
        회사는 회원의 개인정보를 개인정보의 수집 및 목적에서 고지한 범위 내에서 사용하며, 회원의
        사전 동의 없이는 동 범위를 초과하여 이용하거나 원칙적으로 고객의 개인정보를 외부에 공개하지
        않습니다. 다만, 아래의 경우에는 예외로 합니다.
      </p>
      <DiskOl>
        <li className="mb-2">
          법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요
          구가 있는 경우
        </li>
      </DiskOl>
      {/* 약관 5 */}
      <h2 className="text-3xl font-medium mt-10 mb-6">5. 개인정보의 처리 위탁</h2>
      <p className="mb-2">
        회사는 서비스 향상 및 빅데이터 분석을 위해서 개인정보를 위탁하고 있습니다.
      </p>
      <DiskOl>
        <li className="mb-2">Google Analytics, Amplitude를 통한 Big Data 분석</li>
      </DiskOl>
      {/* 약관 6 */}
      <h2 className="text-3xl font-medium mt-10 mb-6">6. 개인정보의 파기</h2>
      <p className="mb-2">
        개인정보는 수집 및 이용목적이 달성되면 지체 없이 파기하며, 절차 및 방법은 다음과 같습니다.
      </p>
      <BracketOl>
        <li className="mb-2">
          파기절차 : 회사는 파기 사유가 발생한 개인정보를 선정하고, 회사의 개인정보 보호책임자의
          승인을 받아 개인정보를 파기합니다. 정보주체로부터 동의 받은 개인정보 보유기간이 경과하거나
          처리목적이 달성되었음에도 불구하고 다른 법령에 따라 개인정보를 계속 보존하여야 하는
          경우에는 해당 개인정보를 별도의 데이터베이스(DB)로 옮기거나 보관 장소를 달리하여
          보존합니다.
        </li>
        <li className="mb-2">
          파기방법 전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용합니다. 종 이에
          출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.
        </li>
      </BracketOl>
      {/* 약관 7 */}
      <h2 className="text-3xl font-medium mt-10 mb-6">7. 정보주체 및 법정대리인의 권리 및 의무</h2>
      <BracketOl>
        <li className="mb-2">
          정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다
          <p className="ml-4">가) 개인정보 열람 요구</p>
          <p className="ml-4">나) 오류 등이 있을 경우 정정 요구</p>
          <p className="ml-4">다) 삭제 요구</p>
          <p className="ml-4">라) 처리정지 요구</p>
        </li>
        <li className="mb-2">
          제1항에 따른 권리 행사는 회사에 대해 서면, 전화, 전자우편, FAX 등을 통하여 하실 수 있으며
          회사는 이에 대해 지체 없이 조치하겠습니다.
        </li>
        <li className="mb-2">
          제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실
          수 있습니다. 이 경우 수임인에 대한 위임사실을 확인할 수 있는 위임장을 제출하셔야 합니다.
        </li>
        <li className="mb-2">
          정보주체는 개인정보 보호법 등 관계법령을 위반하여 회사가 처리하고 있는 정보주체 본인이나
          타인의 개인정보 및 사생활을 침해하여서는 안됩니다.
        </li>
      </BracketOl>
      {/* 약관 8 */}
      <h2 className="text-3xl font-medium mt-10 mb-6">8. 개인정보의 안전성 확보 조치</h2>
      <p className="mb-2">
        회사는 개인정보 보호법 제29조에 따라 이용자의 개인정보가 분실, 도난, 위.변조 또는 훼손되지
        않도록 안전성 확보에 필요한 기술적/관리적 및 물리적 조치를 적정하게 취하고 있습니다.
      </p>
      <BracketOl>
        <li className="mb-2">관리적 조치: 내부관리계획 수립·시행, 정기적 직원 교육 등</li>
        <li className="mb-2">
          기술적 조치: 해킹 등에 대비한 기술적 대책개인정보의 암호화, 접속기록의 보관 및 위변조 방지
          등
        </li>
        <li className="mb-2">물리적 조치: 서버실, 자료보관실 등의 접근통제 등</li>
      </BracketOl>
      {/* 약관 9 */}
      <h2 className="text-3xl font-medium mt-10 mb-6">9. 개인정보관리책임자</h2>
      <p className="mb-2">
        회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 이용자의 불만
        처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
      </p>
      <BracketOl>
        <li className="mb-2">개인정보 보호 책임자</li>
      </BracketOl>
      <p>
        성명: 오찬호
        <br />
        직책: 대표이사
        <br />
        메일주소: mippcomp@gmail.com
      </p>
      <p>
        <br />
        기타 개인정보 침해에 대한 신고나 상담이 필요한 경우에 아래 기관에 문의 가능합니다.
        <BracketOl>
          <li>개인정보침해신고센터 (국번없이 118)</li>
          <li>대검찰청 사이버수사과 (국번없이 1301)</li>
          <li>경찰청 사이버수사국 (국번없이 182)</li>
        </BracketOl>
        <br />
      </p>
      <p>
        본 개인정보처리방침은 서비스에 기재된 효력 발생일에 그 효력이 발생합니다.
        <br />
        개인정보처리방침 개정 2024.02.22.
      </p>
    </React.Fragment>
  );
};

export default PolicyKO;
