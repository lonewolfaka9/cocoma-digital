import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import AppImages from "../../utils/images";
import AvailableHrs from "./AvailableHrs";
import ApplicationFrom from "./applicationForm";
import CustomAlert from "../common/customAlert";
import { setDateTimeForUTC } from "../../utils/utility";

const goTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

function ScheduleMeeting() {
  const { t } = useTranslation();
  const { state } = useLocation();
  const [startDate, setStartDate] = useState(new Date());
  const [selectedSkus, setSelectedSkus] = useState([]);
  const [companyName, setCompanyName] = useState();
  const [description, setDescription] = useState();
  const [showAlerts, setShowAlerts] = useState(false);
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
    setShowAlerts(false);
  }, [state]);
  const onSelectedItem = (data) => {
    setSelectedTime(data);
  };
  const onSchedulerClick = () => {
    if (selectedTime?.startTime === "") {
      setShowAlerts(true);
      goTop();
      return;
    }
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
        appointmentDate: setDateTimeForUTC(startDate, selectedTime.start),
        endDateTime: setDateTimeForUTC(startDate, selectedTime.end),
        serviceItems: selectedSkus,
        actualDate: startDate,
        startTime: selectedTime.start,
        endTime: selectedTime.end,
      },
    };
    console.log(data);
    console.log("onSelectedItem", selectedTime);
    sessionStorage.setItem("content_id", state.id);
  };
  console.log("Added handleCompanyNameChangeServices-SKUS", selectedSkus);
  const handleCompanyNameChange = (e) => {
    setCompanyName(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const onAlertClose = () => {
    setShowAlerts(false);
  };
  return (
    <section id="cart-services" className="cart-services">
      <CustomAlert
        onClose={onAlertClose}
        show={showAlerts}
        title={t("warning")}
        message={t("please_select_available_time_slots")}
      />

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
                  dateFormat="dd/MM/yyyy"
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
                <AvailableHrs onSelectedItem={onSelectedItem} />
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
