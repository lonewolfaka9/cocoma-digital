import { Container, Row } from "react-bootstrap";
import { isMobile } from "react-device-detect";

const term_conditions = {
  title: "Privacy Policy",
  sub_title:
    "At Cocoma Digital, we are committed to protecting the privacy and confidentiality of the personal information of our website visitors and users. This Privacy Policy outlines how we collect, use, store, and disclose the information we gather through our website www.cocomadigital.com. By accessing or using our site, you agree to the terms of this Privacy Policy.",
  list: [
    {
      title: "Information We Collect",
      details: `We may collect various types of information from our website visitors and users, including: \n
a. Personal Information: When you visit our site, register for an account, subscribe to our newsletter, fill out a form, or engage in certain activities on our site, we may collect personal information such as your name, email address, phone number, company name, and job title. \n
b. Non-Personal Information: We may also collect non-personal information about your interactions with our site. This may include demographic information, IP addresses, browser type, referring/exit pages, and other similar information.`,
    },
    {
      title: "How we use Collected Information",
      details: `We may use the collected information for the following purposes: \n
a. Personalization: To personalize your experience on our site and deliver relevant content and marketing messages based on your interests and preferences.\n
b. Communication: To respond to your inquiries, provide customer support, and communicate with you about our products, services, promotions, and updates.\n
c. Analytics: To analyze and improve the performance of our website, services, and marketing efforts.\n
d. Marketing: To send you marketing communications, newsletters, and updates about our services or those of our partners, provided you have given us your consent to do so.`,
    },

    {
      title: "Information Security",
      details:
        "We take appropriate measures to protect the security of your personal information and prevent unauthorized access, disclosure, or alteration. However, please be aware that no data transmission over the internet or method of electronic storage is completely secure. Therefore, while we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.",
    },
    {
      title: "Third Party Discloser",
      details: `We may disclose your personal information to third parties under the following circumstances:

a. Service Providers: We may engage trusted third-party service providers to assist us in operating our business and providing our services. These service providers may have access to your personal information only to perform specific tasks on our behalf and are obligated not to disclose or use it for any other purpose.

b. Legal Compliance: We may disclose your personal information if required by law or in response to valid legal requests by public authorities, such as to comply with a subpoena or similar legal process.

c. Business Transfers: In the event of a merger, acquisition, or sale of all or a portion of our assets, your personal information may be transferred as part of the transaction.`,
    },
    {
      title: "Third Party Links",
      details:
        "You have the right to access, update, correct, or delete your personal information. You can also opt-out of receiving marketing communications from us by following the unsubscribe instructions provided in the emails we send you. Please note that even if you opt-out of marketing communications, we may still send you non-promotional messages related to your use of our services..",
    },
    {
      title: "Your Rights and Choices",
      details:
        "Our site may contain links to third-party websites that are not owned or controlled by Cocoma Digital. We do not endorse or assume any responsibility for the content, privacy policies, or practices of these third-party websites. You access such websites at your own risk, and we encourage you to review their terms and conditions and privacy policies.",
    },
    {
      title: "Children's Privacy",
      details:
        "Our site is not intended for individuals under the age of 13. We do not knowingly collect personal information from children. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us, and we will take appropriate steps to remove such information from our records.",
    },
    {
      title: "Changes to This Privacy Policy",
      details:
        "We reserve the right to update or modify this Privacy Policy at any time. We will notify you of any changes by posting the updated policy on our website with a revised Last Updated date. We encourage you to review this Privacy Policy periodically for any changes.",
    },
    {
      title: "Contact Us",
      isEmail: true,
      emailLink: "hello@cocomadigital.com",
      details:
        "If you have any questions or concerns about our Privacy Policy or our handling of your personal information, please contact us at ",
    },
  ],
};
const PrivacyPolicy = () => {
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
export default PrivacyPolicy;
