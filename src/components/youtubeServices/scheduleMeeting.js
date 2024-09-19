import { Button, Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeftCircle } from "react-bootstrap-icons";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

function ScheduleMeeting() {
  const { t } = useTranslation();
  const { state } = useLocation();
  const [startDate, setStartDate] = useState(new Date());
  return (
    <section id="cart-services" className="cart-services">
      <Row>
        <Container className="heading-container">
          <div>
            <h2>{t("schedule_a_meeting")}</h2>
            <p>{t("choose_convenient_time_to_connect_with_us")}</p>
          </div>

          <Link to={"/services/youtube/cart"} state={state}>
            <ArrowLeftCircle
              size={30}
              style={{
                color: "#080808",
                marginRight: 10,
              }}
            />
          </Link>
        </Container>
        <Container>
          <Row className="justify-content-md-center">
            <Row className="calendar-row">
              <Col>
                {/* https://reactdatepicker.com/ */}
                <DatePicker
                  wrapperClassName="w-full"
                  popperClassName="w-full"
                  className="w-full bg-gray-800 text-white border-none p-2 rounded"
                  minDate={new Date()}
                  // monthsShown={2}
                  // maxDate={addMonths(new Date(), 5)}
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  inline
                  calendarClassName="bg-gray-800"
                  dayClassName={() => "text-gray-400"}
                  monthClassName={() => "text-white"}
                  timeClassName={() => "text-gray-400"}
                />
              </Col>
            </Row>
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
