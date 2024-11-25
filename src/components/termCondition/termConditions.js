import { Container, Row } from "react-bootstrap";
import { isMobile } from "react-device-detect";

const term_conditions = {
  title: "Terms and Conditions",
  sub_title:
    "Please read these Terms and Conditions carefully before using our website www.cocomadigital.com operated by Cocoma Digital. These Terms and Conditions govern your access to and use of the site. By accessing or using the site, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please refrain from using the site.",
  list: [
    {
      title: "Intellectual Property",
      details:
        "All content on the site, including but not limited to text, graphics, logos, images, videos, audio clips, digital downloads, and software, is the property of Cocoma Digital or its licensors and is protected by copyright and other intellectual property laws. You may not use, reproduce, modify, distribute, or display any content from the site without our prior written consent.",
    },
    {
      title: "Use of the Site",
      details:
        "a. Eligibility: By using the site, you represent and warrant that you are at least 18 years old or have reached the age of majority in your jurisdiction. \n\n b. Prohibited Conduct: You agree not to engage in any conduct that violates these Terms and Conditions or any applicable laws or regulations. This includes, but is not limited to, unauthorized access to the site, interfering with its functionality, using the site for any illegal or harmful purposes, and transmitting any unlawful, offensive, or harmful content. \n\n c. User Accounts: If you create an account on our site, you are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to provide accurate and complete information when creating an account and to promptly update any changes.",
    },
    {
      title: "Disclaimer of Warranties",
      details:
        "The site and its content are provided on an as-is and as available basis without any warranties, expressed or implied. We do not warrant that the site will be error-free, uninterrupted, or free of viruses or other harmful components. We disclaim all warranties, including but not limited to the accuracy, reliability, completeness, fitness for a particular purpose, and non-infringement of intellectual property rights.",
    },
    {
      title: "Limitation of Liability",
      details:
        "To the maximum extent permitted by applicable law, we shall not be liable for any direct, indirect, incidental, consequential, special, or punitive damages arising out of or in connection with your use of the site or the content on the site. This includes, but is not limited to, damages for loss of profits, data, or goodwill, even if we have been advised of the possibility of such damages.",
    },
    {
      title: "Indemnification",
      details:
        "You agree to indemnify, defend, and hold harmless Cocoma Digital and its officers, directors, employees, agents, and affiliates from and against any claims, liabilities, damages, losses, costs, or expenses, including reasonable attorneys' fees, arising out of or in connection with your use of the site, your violation of these Terms and Conditions, or your violation of any rights of any third party.",
    },
    {
      title: "Links to Third Party Websites",
      details:
        "Our site may contain links to third-party websites that are not owned or controlled by Cocoma Digital. We do not endorse or assume any responsibility for the content, privacy policies, or practices of these third-party websites. You access such websites at your own risk, and we encourage you to review their terms and conditions and privacy policies.",
    },
    {
      title: "Changes to These Terms and Conditions",
      details:
        "We reserve the right to modify or replace these Terms and Conditions at any time without prior notice. Any changes will be effective immediately upon posting the revised Terms and Conditions on the site. Your continued use of the site after the posting of any changes constitutes your acceptance of the revised Terms and Conditions.",
    },
    {
      title: "Contact Us",
      isEmail: true,
      emailLink: "hello@cocomadigital.com",
      details:
        "If you have any questions or concerns about these Terms and Conditions, please contact us at ",
    },
  ],
};
const TermCondition = () => {
  return (
    <Container className="block works-block latest-stories latest-work-from term-condition">
      <Row
        style={{
          marginTop: isMobile ? 120 : 30,
          paddingBottom: 30,
        }}
      >
        <h2 className="title">{term_conditions.title}</h2>
      </Row>
      <span>{term_conditions.sub_title}</span>
      {term_conditions.list.map((term, i) => {
        return (
          <Row>
            <h2 className="sub-title">{term.title}</h2>
            {term.isEmail ? (
              <span className="sub-details">
                {term.details}
                <a
                  href="mailto:"
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  {term.emailLink}
                </a>
                .
              </span>
            ) : (
              <span className="sub-details">{term.details}</span>
            )}
          </Row>
        );
      })}
    </Container>
  );
};
export default TermCondition;
