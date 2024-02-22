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

const PolicyEN = () => {
  return (
    <React.Fragment>
      <h1 className="font-semibold mb-2">MIPP Privacy Policy</h1>
      <p>
        DoubleH Company Ltd. ("the Company") is committed to safeguarding the personal information
        of users engaging with the MIPP service and its associated services (hereafter referred to
        as "the Service"), in line with applicable laws. This Privacy Policy outlines the purposes
        for which we process personal information:
      </p>
      {/* 약관 1 */}
      <h2 className="text-3xl font-medium mt-10 mb-6">
        1. Purposes of Personal Information Processing
      </h2>
      <p className="mb-4 font-semibold">
        The Company processes personal information for the following purposes:
      </p>
      <BracketOl>
        <li className="mb-2">
          Service Delivery: We process personal information for identity verification, registration
          intent confirmation, service provision, issuance of plagiarism check results, and for the
          development of our services.
        </li>
        <li className="mb-2">
          Handling Inquiries: We handle personal information for verifying inquiries such as access
          to personal information, corrections/deletions, and suspension requests, and for
          contacting and notifying regarding the investigation and its outcomes.
        </li>
        <li className="mb-2">
          Marketing and Advertising: We use personal information to deliver customized
          advertisements, provide information on events and promotional activities, and offer
          participation opportunities.
        </li>
        <li className="mb-2">
          Service Improvement and Development: Personal information is used to enhance existing
          services and develop new, tailored services.
        </li>
        <li className="mb-2">
          Provision of Paid Services: We process personal information for payment and settlement
          purposes related to the use of paid services.
        </li>
      </BracketOl>
      {/* 약관 2 */}
      <h2 className="text-3xl font-medium mt-10 mb-6">
        2. Personal Information Collection and Methods
      </h2>
      <p className="mb-4 font-semibold">
        To offer and enhance our services, we collect personal information as follows:
      </p>
      <table className="min-w-full border-collapse mb-4">
        <thead>
          <tr>
            <TableCell isHeader>Data Collected</TableCell>
            <TableCell isHeader>Purpose of Use</TableCell>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableCell>Email, Nickname, Name(Essential)</TableCell>
            <TableCell>For identity verification and membership management</TableCell>
          </tr>
          <tr>
            <TableCell>Service Content: Uploaded files, Links</TableCell>
            <TableCell>For service provision and development</TableCell>
          </tr>
          <tr>
            <TableCell>Contactable Email Address, Name, Mobile Phone Number(Optional)</TableCell>
            <TableCell>For marketing purposes like event notifications and newsletters</TableCell>
          </tr>
          <tr>
            <TableCell>
              IP Address, Cookies, Access Logs, Visit Time, Service Usage Records
            </TableCell>
            <TableCell>For service provision</TableCell>
          </tr>
          <tr>
            <TableCell>
              Payment Info: Card Issuer Name, Card Number, Email, Date of Birth, Business
              Registration Number, Account Holder's Name, Account Number, Bank Name, Mobile Phone
              Number, and Carrier Information
            </TableCell>
            <TableCell>For processing payments</TableCell>
          </tr>
        </tbody>
      </table>
      <p className="mb-4 font-semibold">The collection occurs through:</p>
      <p className="mb-2">
        We ensure to inform users and obtain their consent before collecting personal information.
      </p>
      <DiskOl>
        <li className="mb-2">
          Direct input of information by users during registration and service use.
        </li>
        <li className="mb-2">Interactions with our customer service via email or phone.</li>
        <li className="mb-2">
          Participation in events or activities, both online and offline, where we collect
          information with separate consent for marketing purposes.
        </li>
      </DiskOl>
      {/* 약관 3 */}
      <h2 className="text-3xl font-medium mt-10 mb-6">
        3. Personal Information Processing and Retention Period
      </h2>
      <DiskOl>
        <li className="mb-2">
          The Company processes and retains personal information within the period specified by law
          or agreed upon by the user.
        </li>
        <li className="mb-2">
          Personal information is promptly destroyed once its purpose is fulfilled. This includes
          automatic destruction upon a member's service withdrawal or loss of eligibility, without
          needing a separate request.
        </li>
      </DiskOl>
      <BracketOl>
        <li className="mb-2">
          If there are ongoing investigations due to legal violations, the information is retained
          until the end of those investigations.
        </li>
        <li className="mb-2">
          Information related to unresolved financial obligations from service use is retained until
          these obligations are settled.
        </li>
        <li className="mb-2">
          Information may be retained to prevent fraudulent re-registration and misuse of services,
          according to the terms of service.
        </li>
        <li className="mb-2">
          Certain information must be retained for a period specified by laws such as commercial law
          and consumer protection in e-commerce laws.
        </li>
      </BracketOl>
      <p className="mb-2 ml-6">
        4-1 Information related to service use (log records) is retained for 3 months as per the
        "Protection Of Communications Secrets Act".
      </p>
      <p className="mb-2 ml-6">
        4-2 Records related to contracts or subscription withdrawals, and supply of goods are
        retained for 5 years as per the "Act on the Consumer Protection in Electronic Commerce".
      </p>
      <p className="mb-2 ml-6">
        4-3 Records on consumer complaints or dispute resolution are retained for 3 years as per the
        "Act on Consumer Protection in Electronic Commerce".
      </p>
      <p className="mb-2 ml-6">
        4-4 Records on advertising display are kept for 6 months under the "Act on Consumer
        Protection in Electronic Commerce".
      </p>
      <p className="mb-2 ml-6">
        4-5 All transaction records and supporting documents as required by tax law are retained for
        5 years in accordance with the "The Basic Law for National Taxes".
      </p>
      {/* 약관 4 */}
      <h2 className="text-3xl font-medium mt-10 mb-6">4. Disclosure of Personal Information</h2>
      <p className="mb-2">
        The Company uses members' personal information within the scope disclosed at the time of
        collection and does not exceed this scope without prior consent from the member.
      </p>
      <DiskOl>
        <li className="mb-2">
          Principally, we do not disclose personal information to external parties unless required
          by law. An exception is made when legal authorities request information for investigative
          purposes, following the procedures and methods defined by law.
        </li>
      </DiskOl>
      {/* 약관 5 */}
      <h2 className="text-3xl font-medium mt-10 mb-6">
        5. Entrusting the Processing of Personal Information
      </h2>
      <p className="mb-2">
        The Company entrusts personal information for service improvement and big data analysis.
        This includes:
      </p>
      <DiskOl>
        <li className="mb-2">Google Analytics and Amplitude for big data insights.</li>
      </DiskOl>
      {/* 약관 6 */}
      <h2 className="text-3xl font-medium mt-10 mb-6">6. Destruction of Personal Information</h2>
      <p className="mb-2">
        When the purpose for collecting and using personal information has been achieved, it is
        promptly destroyed. The process and method are as follows:
      </p>
      <BracketOl>
        <li className="mb-2">
          Destruction Process: The Company selects the personal information due for destruction and
          proceeds with deletion after approval from the personal information protection officer. If
          personal information must be retained due to other legal requirements despite the expiry
          of the consented retention period or achievement of the processing purpose, it is
          transferred to a separate database (DB) or stored differently.
        </li>
        <li className="mb-2">
          Destruction Method: Electronic records are destroyed using methods that prevent data
          recovery. Physical records are shredded or incinerated.
        </li>
      </BracketOl>
      {/* 약관 7 */}
      <h2 className="text-3xl font-medium mt-10 mb-6">
        7. Rights and Duties of the Data Subject and Legal Representative
      </h2>
      <BracketOl>
        <li className="mb-2">
          Data subjects have the right to exercise the following personal information protection
          rights at any time:
          <p className="ml-4">1-1) Request to view personal information</p>
          <p className="ml-4">1-2) Request correction in case of errors</p>
          <p className="ml-4">1-3) Request deletion</p>
          <p className="ml-4">1-4) Request to stop processing</p>
        </li>
        <li className="mb-2">
          The exercise of rights mentioned in 1) can be done through written documents, phone calls,
          emails, FAX, etc., and the Company will take immediate action.
        </li>
        <li className="mb-2">
          The rights mentioned in 1) can be exercised through a legal representative or an agent
          authorized by the data subject. In such cases, a power of attorney must be submitted to
          verify the agent's authority.
        </li>
        <li className="mb-2">
          Data subjects must not violate personal information protection laws or any other related
          laws by infringing on their own or others' personal information and privacy.
        </li>
      </BracketOl>
      {/* 약관 8 */}
      <h2 className="text-3xl font-medium mt-10 mb-6">
        8. Measures to Ensure the Security of Personal Information
      </h2>
      <p className="mb-2">
        The Company implements appropriate technical, administrative, and physical measures to
        secure personal information against loss, theft, alteration, or damage, in accordance with
        Article 29 of the “Personal Information Protection Act.” These include:
      </p>
      <BracketOl>
        <li className="mb-2">
          Administrative measures: Establishing and executing internal management plans, regular
          employee training, etc.
        </li>
        <li className="mb-2">
          Technical measures: Implementing technological solutions to prevent hacking, encrypting
          personal information, and safeguarding access records to prevent tampering.
        </li>
        <li className="mb-2">
          Physical measures: Controlling access to server rooms and data storage areas to prevent
          unauthorized access.
        </li>
      </BracketOl>
      {/* 약관 9 */}
      <h2 className="text-3xl font-medium mt-10 mb-6">
        9. Personal Information Protection Officer
      </h2>
      <p className="mb-2">
        The Company is responsible for overseeing all activities related to the processing of
        personal information and has designated a Personal Information Protection Officer (PIPO) for
        handling user complaints and damage relief related to personal information processing. The
        details of the PIPO are as follows:
      </p>
      <BracketOl>
        <li className="mb-2">The details of the PIPO are as follows:</li>
      </BracketOl>
      <p>
        Name: Oh Chan-ho
        <br />
        Position: CEO
        <br />
        Email: mippcomp@gmail.com
      </p>
      <p>
        <br />
        For reports of personal information breaches or consultations, you can contact the following
        organizations:
        <BracketOl>
          <li>Personal Information Infringement Report Center (privacy.kisa.or.kr)</li>
          <li>Supreme Prosecutors' Office Cyber Investigation Department (spo.go.kr)</li>
          <li>National Police Agency Cyber Security Bureau (cyberbureau.police.go.kr)</li>
        </BracketOl>
        <br />
      </p>
      <p>
        This privacy policy becomes effective as noted in the service documentation.
        <br />
        The revision date of the privacy policy is 2024.02.22.
      </p>
    </React.Fragment>
  );
};

export default PolicyEN;
