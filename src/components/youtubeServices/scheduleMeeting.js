import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeftCircle } from "react-bootstrap-icons";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import AppImages from "../../utils/images";
const availableHrs = [
  {
    start: "08:00 AM",
    end: "09:00 AM",
  },
  {
    start: "09:00 AM",
    end: "10:00 AM",
  },
  {
    start: "10:00 AM",
    end: "11:00 AM",
  },
  {
    start: "11:00 AM",
    end: "12:00 AM",
  },
  {
    start: "12:00 PM",
    end: "01:00 PM",
  },
  {
    start: "01:00 PM",
    end: "02:00 PM",
  },
  {
    start: "02:00 PM",
    end: "03:00 PM",
  },
  {
    start: "03:00 PM",
    end: "04:00 PM",
  },
  {
    start: "04:00 PM",
    end: "05:00 PM",
  },
  {
    start: "05:00 PM",
    end: "06:00 PM",
  },
  {
    start: "06:00 PM",
    end: "07:00 PM",
  },
  {
    start: "07:00 PM",
    end: "08:00 PM",
  },
  {
    start: "08:00 PM",
    end: "09:00 PM",
  },
];
const AvailableHrs = () => {
  return (
    <Row className="timer-row">
      {availableHrs.map((item, idx) => {
        return (
          <Col sm={2} className="timer-section" key={`timer-section-${idx}`}>
            <Row>
              <Image src={AppImages.timer} />
              <span>{item.start}</span>
              <p>{item.end}</p>
            </Row>
          </Col>
        );
      })}
    </Row>
  );
};

function ScheduleMeeting() {
  const { t } = useTranslation();
  const { state } = useLocation();
  const [startDate, setStartDate] = useState(new Date());
  console.log("Added Services", state, startDate);
  let handleColor = (time) => {
    return time.getHours() > 12 ? "text-success" : "text-error";
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
              <Col>
                {/* https://reactdatepicker.com/ */}
                <DatePicker
                  showTimeSelect
                  timeIntervals={15}
                  //timeClassName={handleColor}
                  // formatWeekDay={(nameOfDay) => nameOfDay.substr(0, 3)}
                  minDate={new Date()}
                  monthsShown={2}
                  // maxDate={addMonths(new Date(), 5)}
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  inline
                />
              </Col>
            </Row>
            <AvailableHrs />
            <Button
              variant="dark"
              style={{
                marginBottom: 20,
                width: 200,
              }}
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
