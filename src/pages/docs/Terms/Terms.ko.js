import { Link } from "react-router-dom";
import { Content, Title } from "pages/docs/Terms/Style";
import React from "react";
import { getLangUrl } from "locales/utils";

const TermsKo = () => {
  return (
    <React.Fragment>
      <Title>제 1조 목적</Title>
      <Content>
        본 이용약관(이하 약관)은 주식회사 미피아(이하 "회사")가 제공하는 다양한 서비스 이용에 있어
        “사용자”(이하 ‘회원’이라 함) 회사 간에 필요한 권리와 의무, 책임 등 기본적인 사항을 명확히
        하기 위해 마련되었습니다.
      </Content>

      <Title>제 2조 약관의 효력 및 변경</Title>
      <Content>
        2-1 이 약관은 회사가 서비스 내에 공지하거나 이메일 등으로 회원에게 통지함으로써 효력이
        발생합니다.
      </Content>
      <Content>
        2-2 회사는 필요한 경우 관련법령을 위반하지 않는 범위에서 사전 고지 없이 약관을 개정할 수
        있습니다.
      </Content>
      <Content>
        2-3 변경된 약관에 동의하지 않으시면 회원 탈퇴를 요청할 수 있습니다. 변경된 약관 공지 후
        서비스를 계속 이용하시면, 변경된 약관에 동의하신 것으로 간주됩니다.
      </Content>

      <Title>제 3조 용어의 정의</Title>
      <Content>
        3-1 "서비스": 회사가 운영하는 &lt;MIPPIA&rt; 플랫폼을 통해 제공하는 모든 서비스를 의미합니다.
      </Content>
      <Content>3-2 "회원": 회사의 서비스를 이용하는 모든 사용자를 의미합니다.</Content>
      <Content>
        3-3 "검사음원": 회원이 서비스를 이용하기 위해 업로드하신 음악 파일이나 데이터를 말합니다.
      </Content>
      <Content>
        3-4 "비교음원": 검사음원의 독창성을 판단하기 위해 비교하는 기준이 되는 음악을 말합니다.
      </Content>
      <Content>
        3-5 "음악표절검사": 회사가 검사음원과 비교음원을 비교 분석하여 유사성을 확인하는 과정입니다.
      </Content>
      <Content>
        3-6 "표절률": 검사음원과 비교음원 사이의 유사성을 나타내는 지표입니다. 표절 여부의 최종
        판단은 회원의 책임 아래 이루어집니다.
      </Content>
      <Content>
        3-7 이 약관에서 사용하는 용어정의는 제 3조에서 정의한 것을 제외하고는 관계 법령 및 서비스 별
        안내에서 정하는 바에 의합니다.
      </Content>

      <Title>제 4조 약관 외 준칙</Title>
      <Content>
        4-1 약관에 명시되지 않은 사항이나 해석에 대해선 회사의 공지사항, 관련 법령, 상관례를
        따릅니다.
      </Content>
      <Content>4-2 회원님이 회사와 별도의 계약을 체결한 경우, 그 계약이 우선합니다.</Content>

      <Title>제 5조 이용 계약 성립</Title>
      <Content>
        5-1 회원가입 시 "동의합니다" 버튼을 클릭하면 이 약관에 동의한 것으로 간주하며, 회사가 이를
        승인함으로써 이용 계약이 성립됩니다.
      </Content>

      <Title>제 6조 서비스의 변경 및 중지</Title>
      <Content>
        6-1 서비스 품질 향상, 운영상 혹은 기술상 필요에 따라 회사는 서비스의 전부 또는 일부를
        중단/변경/추가(이하 ‘변경’)할 수 있습니다.
      </Content>

      <Title>제 7조 게시물의 저작권</Title>
      <Content>
        7-1 회원이 MIPPIA 서비스에 업로드한 검사음원에 대한 권리와 책임은 회원에게 있습니다. 회사는
        서비스 운영을 위해 필요한 범위 내에서만 이를 사용합니다.
      </Content>
      <Content>
        7-2 회원은 검사음원을 서비스 개선을 위해 회사가 사용할 수 있도록 허락합니다. 회사는 회원님이
        제공한 콘텐츠에 대해 저작권을 존중합니다.
      </Content>
      <Content>
        7-3 회사는 회원의 검사음원이 타인의 저작권을 침해하거나 침해당했더라도 이에 대한 민,
        형사상의 책임을 부담하지 않습니다.
      </Content>

      <Title>제 8조 회원의 의무</Title>
      <Content>
        8-1 회원은 서비스를 이용하기 전에 해당 콘텐츠의 저작권을 확인하고 적절한 권리를 확보하셔야
        합니다. 특히, 저작권법에 따라 필요한 경우, 적절한 사용 허가를 받으셔야 합니다.
      </Content>
      <Content>
        8-2 서비스 이용으로 인해 발생할 수 있는 저작권 문제에 대한 책임은 회원에게 있습니다.
      </Content>
      <Content>
        8-3 상업적 목적으로 서비스를 이용하고자 할 경우, 반드시 회사의 사전 승인을 받으셔야 합니다.
      </Content>
      <Content>
        8-4 회원은 얻은 정보를 회사의 사전 동의 없이 영리 목적으로 이용하거나 제3자에게 제공해서는
        안 됩니다.
      </Content>
      <Content>
        8-5 회원은 회사의 서비스 운영 또는 다른 회원의 서비스 이용을 방해하거나 제3자의 권리를
        침해해서는 안 됩니다.
      </Content>

      <Title>제 9조 회사의 의무</Title>
      <Content>9-1 회사는 안정적이고 지속적인 서비스 제공을 위해 최선을 다하겠습니다.</Content>
      <Content>
        9-2 회원의 불편사항이나 불만이 제기될 경우, 이를 신속히 해결하기 위해 노력하겠습니다.
      </Content>
      <Content>
        9-3 불가항력적인 사유로 서비스가 중단되는 경우, 회사는 이로 인한 책임을 지지 않지만,
        정상적인 서비스를 재개하도록 최선을 다 해야합니다.
      </Content>
      <Content>
        9-4 회사는 회원님의 개인정보를 보호하고 안전하게 관리하기 위해 최선을 다하며, 회원님의 동의
        없이 개인정보를 제3자에게 제공하지 않습니다. 단, 관련법 및 규정에 따라 조사의 목적 등으로
        법원 또는 기타 사법 기관이 발행하는 영장 등을 통해 회원의 개인정보 제공을 요청 받을 경우는
        예외로 할 수 있습니다.
      </Content>
      <Content>
        9-5 서비스 이용 과정에서 수집된 데이터는 서비스 개선 및 개발을 위해 사용될 수 있습니다.
      </Content>
      <Content>
        9-6 회사는 서비스 사용과 관련해 발생되는 회원의 어떠한 책임, 손해, 소송, 피해 또는 손해
        배상에 대하여 원칙적으로 책임을 부담하지 않습니다.
      </Content>

      <Title>제 10조 개인정보의 보호</Title>
      <Content>
        10-1 회사는 관련 법령에 따라 회원의 개인정보를 보호하고, 회원의 개인정보가 유출되지
        않도록&nbsp;
        <Link to={getLangUrl("/docs/policy")} className="text-nowrap text-blue-700 underline">
          개인정보보호정책
        </Link>
        을 참조해 주시기 바랍니다.
      </Content>

      <Title>제 11조 이용 요금</Title>
      <Content>
        11-1 회원님은 베타 서비스 기간 동안 서비스를 무료로 이용하실 수 있습니다. 향후 요금 정책
        변경 시, 회사는 사전에 명확하게 공지할 것입니다.
      </Content>

      <Title>제 12조 기타</Title>
      <Content>
        12-1 본 약관은 대한민국 법률을 준수하며, 회원님의 거주지와 관계없이 적용됩니다.
      </Content>
      <Content>
        12-2 약관의 일부 조항이 법원 또는 관할 재판소에 의해 무효 또는 집행 불가하다고 판단되더라도,
        나머지 조항들은 이에 영향을 받지 않고 여전히 유효하며 강제력을 유지합니다.
      </Content>
    </React.Fragment>
  );
};

export default TermsKo;
