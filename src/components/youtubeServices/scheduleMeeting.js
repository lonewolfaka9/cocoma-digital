import { Button, Col, Container, Image, ListGroup, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import AppImages from "../../utils/images";
import AvailableHrs from "./AvailableHrs";

function ScheduleMeeting() {
  const { t } = useTranslation();
  const { state } = useLocation();
  const [startDate, setStartDate] = useState(new Date());
  const [selectedSkus, setSelectedSkus] = useState([]);
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
  console.log("Added Services-SKUS", selectedSkus);
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
