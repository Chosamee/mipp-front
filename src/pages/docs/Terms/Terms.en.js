import { Link } from "react-router-dom";
import { Content, Title } from "pages/docs/Terms/Style";
import React from "react";
import { getLangUrl } from "locales/utils";

const TermsEn = () => {
  return (
    <React.Fragment>
      <Title>1 Purpose</Title>
      <Content>
        These Terms and Conditions are established to clarify the basic matters such as rights,
        duties, and responsibilities between "Users" (hereafter referred to as 'Members') and MIPPIA
        Ltd. (hereafter referred to as "the Company") regarding the use of various services provided
        by the Company.
      </Content>
      <Title>2 Effectiveness and Amendment of the Terms</Title>
      <Content>
        2-1 These Terms become effective upon their announcement within the service or notification
        to Members via email or other means.
      </Content>
      <Content>
        2-2 The Company may amend these Terms within the bounds of applicable laws without prior
        notice when necessary.
      </Content>
      <Content>
        2-3 If you do not agree with the amended Terms, you may request to withdraw your membership.
        If you continue to use the service after the announcement of the amended Terms, you are
        deemed to have consented to the changes.
      </Content>
      <Title>3 Definition of Terms</Title>
      <Content>
        3-1 "Service": Refers to all services provided to Members through the &lt; MIPPIA &gt;
        platform operated by the Company.
      </Content>
      <Content>3-2 "Member": Refers to all users of the Company's services.</Content>
      <Content>
        3-3 "Original Music": Refers to the music files or data uploaded by Members for the use of
        the service.
      </Content>
      <Content>
        3-4 "Comparison Music": Refers to the music used as a standard for assessing the originality
        of the inspection sound source.
      </Content>
      <Content>
        3-5 "Music Plagiarism Test": The process by which the Company analyzes the similarities
        between the inspection sound source and the comparison sound source.
      </Content>
      <Content>
        3-6 "Plagiarism Rate": An indicator of the similarity between the inspection sound source
        and the comparison sound source. The final decision on plagiarism is the responsibility of
        the Member.
      </Content>
      <Title>4 Supplementary Rules</Title>
      <Content>
        4-1 Matters not specified in these Terms or interpretations thereof shall follow the
        Company's announcements, relevant laws, or customary practices.
      </Content>
      <Content>
        4-2 In case a Member enters into a separate contract with the Company, such a contract shall
        take precedence.
      </Content>
      <Title>5 Formation of the Use Agreement</Title>
      <Content>
        Clicking the "I agree" button during the registration process is considered as consenting to
        these Terms, and the use agreement is established upon the Company's approval.
      </Content>
      <Title>6 Changes and Interruption of Service</Title>
      <Content>
        6-1 For quality enhancement, operational or technical requirements, the Company may change,
        interrupt, or add to the whole or part of the services.
      </Content>
      <Title>7 Copyright of Posts</Title>
      <Content>
        7-1 The rights and responsibilities for the inspection sound sources uploaded to the MIPPIA
        service by Members belong to the Members. The Company will use them only to the extent
        necessary for service operation.
      </Content>
      <Content>
        7-2 Members grant the Company permission to use the inspection sound sources for service
        improvement. The Company respects the copyright of the content provided by Members.
      </Content>
      <Content>
        7-3 The Company is not liable for any civil or criminal responsibilities if a Member's
        inspection sound source infringes or has infringed upon someone else's copyright.
      </Content>
      <Title>8 Member's Duties</Title>
      <Content>
        8-1 Members must verify and secure the appropriate rights for the content before using the
        service, especially obtaining the necessary permissions under copyright law when required.
      </Content>
      <Content>
        8-2 Members are responsible for any copyright issues that may arise from using the service.
      </Content>
      <Content>
        8-3 Members must obtain the Company's prior approval for commercial use of the service.
      </Content>
      <Content>
        8-4 Members shall not use the information obtained from the service for commercial purposes
        or provide it to third parties without the Company's prior consent.
      </Content>
      <Content>
        8-5 Members must not interfere with the operation of the Company's services or infringe on
        the rights of third parties.
      </Content>
      <Title>9 Company's Duties</Title>
      <Content>9-1 The Company will do its best to provide stable and continuous service.</Content>
      <Content>
        9-2 The Company will strive to promptly resolve any inconveniences or complaints from
        Members.
      </Content>
      <Content>
        9-3 The Company is not liable for any service interruptions caused by force majeure, but
        will make every effort to resume normal service as soon as possible.
      </Content>
      <Content>
        9-4 The Company will do its utmost to protect and securely manage Members' personal
        information and will not provide it to third parties without the Members' consent.
      </Content>
      <Content>
        9-5 Data collected during the use of the service may be used for service improvement and
        development.
      </Content>
      <Content>
        9-6 The Company is not principally liable for any responsibilities, damages, lawsuits,
        harms, or compensations arising from the use of the service by Members.
      </Content>
      <Title>10 Protection of Personal Information</Title>
      <Content>
        10-1 The Company will strive to protect Members' personal information in accordance with
        relevant laws and ensure that it is not leaked. For more details, please refer to the&nbsp;
        <Link to={getLangUrl("/docs/policy")} className="text-nowrap text-blue-700 underline">
          Privacy Policy
        </Link>
        .
      </Content>

      <Title>11 Service Fees</Title>
      <Content>
        11-1 Members can use the service for free during the beta service period. The Company have
        to clearly announce any changes to the fee policy in advance.
      </Content>

      <Title>12 Miscellaneous</Title>
      <Content>
        12-1 These Terms are governed by the laws of the Republic of Korea, irrespective of the
        Member's place of residence.
      </Content>
      <Content>
        12-2 Even if any provision of these Terms is deemed invalid or unenforceable by a court or
        competent jurisdiction, the remaining provisions shall remain in effect and enforceable.
      </Content>
    </React.Fragment>
  );
};

export default TermsEn;
