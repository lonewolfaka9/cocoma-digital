import {
  Button,
  Col,
  Container,
  Form,
  Image,
  ListGroup,
  Row,
} from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useRef, useState } from "react";
import AppImages from "../../utils/images";
import AvailableHrs from "./AvailableHrs";
import ApplicationFrom from "./applicationForm";

function ScheduleMeeting() {
  const { t } = useTranslation();
  const { state } = useLocation();
  const [startDate, setStartDate] = useState(new Date());
  const [selectedSkus, setSelectedSkus] = useState([]);
  const [companyName, setCompanyName] = useState();
  const [description, setDescription] = useState();
  const [selectedTime, setSelectedTime] = useState({
    startTime: "",
    endTime: "",
  });
  console.log("Added Services", state, startDate);

  useEffect(() => {
    const skus = [];
    if (state?.selectedSubServices) {
      state?.selectedSubServices.map((service) => {
        service.catagories?.map((category) => {
          if (!category.isDeleted) {
            skus.push({
              sku: category.sku,
              occurances: category.occurrence,
            });
          }
        });
      });
      setSelectedSkus(skus);
    }
  }, [state]);
  const selectedItem = (data) => {
    setSelectedTime(data);
  };
  const onSchedulerClick = () => {
    const data = {
      email: state.userInfo.email,
      firstNae: state.userInfo.firstName,
      lastName: state.userInfo.lastName,
      mobile: state.userInfo.mobile,
      startDate,
      appointment: {
        company: companyName,
        socialMediaLink: "https://www.youtube.com/",
        privacyAccepted: true,
        title: "youTube",
        description: description,
        startTime: "2022-01-01T00:00:00Z",
        endTime: "2022-01-01T01:00:00Z",
        serviceItems: selectedSkus,
      },
    };
    console.log(data);
  };
  console.log("Added handleCompanyNameChangeServices-SKUS", selectedSkus);
  const handleCompanyNameChange = (e) => {
    setCompanyName(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  return (
    <section id="cart-services" className="cart-services">
      <Row>
        <Container className="heading-container">
          <div>
            <h2>{t("schedule_a_meeting")}</h2>
            <p>{t("choose_convenient_time_to_connect_with_us")}</p>
          </div>

          <Link to={"/services/youtube/services"}>
            <Image src={AppImages.backBtn} />
          </Link>
        </Container>
        <Container>
          <Row className="justify-content-md-center">
            <Row className="calendar-row">
              <Col sm={4}>
                {/* https://reactdatepicker.com/ */}
                <DatePicker
                  //  showTimeSelect
                  // timeIntervals={15}
                  //timeClassName={handleColor}
                  // formatWeekDay={(nameOfDay) => nameOfDay.substr(0, 3)}
                  minDate={new Date()}
                  // monthsShown={2}
                  // maxDate={addMonths(new Date(), 5)}
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  inline
                />
              </Col>

              <Col
                sm={8}
                style={{
                  height: 450,
                  overflow: "hidden",
                  overflowY: "scroll",
                }}
              >
                <AvailableHrs selectedItem={selectedItem} />
              </Col>
            </Row>

            <ApplicationFrom
              userData={state.userInfo}
              handleCompanyNameChange={handleCompanyNameChange}
              handleDescriptionChange={handleDescriptionChange}
            />
            <Button
              variant="dark"
              style={{
                marginBottom: 20,
                width: 200,
              }}
              onClick={onSchedulerClick}
            >
              {t("schedule_meeting")}
            </Button>
          </Row>
        </Container>
      </Row>
    </section>
  );
}

export default ScheduleMeeting;
