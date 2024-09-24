import { Col, Form, Row } from "react-bootstrap";

const ApplicationFrom = ({
  userData,
  handleDescriptionChange,
  handleCompanyNameChange,
}) => {
  return (
    <Form className="appointment-form">
      <Row>
        <Col sm={6}>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextFirstName"
          >
            <Form.Label column sm="4">
              First Name
            </Form.Label>
            <Col sm="8">
              <Form.Control
                // plaintext
                readOnly
                defaultValue={userData.firstName}
              />
            </Col>
          </Form.Group>
        </Col>
        <Col sm={6}>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextLastName"
          >
            <Form.Label column sm="4">
              Last Name
            </Form.Label>
            <Col sm="8">
              <Form.Control
                // plaintext
                readOnly
                defaultValue={userData.lastName}
              />
            </Col>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col sm={6}>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="4">
              Email
            </Form.Label>
            <Col sm="8">
              <Form.Control
                // plaintext
                readOnly
                defaultValue={userData.email}
              />
            </Col>
          </Form.Group>
        </Col>
        <Col sm={6}>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextMobile">
            <Form.Label column sm="4">
              Mobile
            </Form.Label>
            <Col sm="8">
              <Form.Control
                // plaintext
                readOnly
                defaultValue={userData.mobile}
              />
            </Col>
          </Form.Group>
        </Col>
      </Row>

      <Form.Group
        as={Row}
        className="mb-3"
        controlId="formPlaintextCompanyName"
      >
        <Form.Label column sm="2">
          Company Name
        </Form.Label>
        <Col sm="10">
          <Form.Control
            type="text"
            placeholder="Please enter company name"
            autoFocus
            onChange={handleCompanyNameChange}
          />
        </Col>
      </Form.Group>
      <Form.Group
        as={Row}
        className="mb-3"
        controlId="formPlaintextCompanyName"
      >
        <Form.Label column sm="2">
          Description
        </Form.Label>
        <Col sm="10">
          <Form.Control
            as="textArea"
            rows={3}
            placeholder="Please enter meeting description"
            onChange={handleDescriptionChange}
          />
        </Col>
      </Form.Group>
    </Form>
  );
};

export default ApplicationFrom;
