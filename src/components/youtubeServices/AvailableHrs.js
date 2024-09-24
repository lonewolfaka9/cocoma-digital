import { Col, Container, Image, ListGroup, Row } from "react-bootstrap";

import { useEffect, useState } from "react";
import AppImages from "../../utils/images";

const createTimerArray = () => {
  var hours, minutes, ampm;
  var time = [];
  // 495 means starting from 8:15 AM to 11:30 PM
  for (var i = 480; i <= 1420; i += 15) {
    hours = Math.floor(i / 60);
    minutes = i % 60;
    if (minutes < 10) {
      minutes = "0" + minutes; // adding leading zero
    }
    ampm = hours % 24 < 12 ? "AM" : "PM";
    hours = hours % 12;
    if (hours === 0) {
      hours = 12;
    }
    time.push(hours + ":" + minutes + " " + ampm);
  }
  return time;
};
const prepareAvailableHrs = () => {
  const items = createTimerArray();
  const objArray = [];
  for (let i = 0; i < items.length - 1; i++) {
    objArray.push({
      start: items[i],
      end: items[i + 1],
      isActive: false,
    });
  }
  return objArray;
};

const AvailableHrs = ({ selectedItem }) => {
  const availableHrs = prepareAvailableHrs();
  const [hrsArray, setHrsArray] = useState([]);

  useEffect(() => {
    setHrsArray(availableHrs);
  }, []);
  const selectedTime = (id) => {
    const currentHrs = [...hrsArray];
    const updateHrs = currentHrs.map((h) => {
      return {
        ...h,
        isActive: false,
      };
    });

    const selected = updateHrs[id];
    selected.isActive = true;
    selectedItem(selected);
    setHrsArray([...updateHrs]);
  };
  return (
    <ListGroup className="timer-row" horizontal>
      {hrsArray.map((item, idx) => {
        return (
          <Col
            className={` timer-section ${item.isActive ? "active-timer" : ""}`}
            key={`timer-section-${idx}`}
            onClick={() => {
              selectedTime(idx);
            }}
          >
            <Row>
              <Image src={AppImages.timer} />
              <Container>
                <span>{item.start}</span>
                <p>{item.end}</p>
              </Container>
            </Row>
          </Col>
        );
      })}
    </ListGroup>
  );
};

export default AvailableHrs;
