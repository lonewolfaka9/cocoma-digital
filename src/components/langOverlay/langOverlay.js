import { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";
import AppImages from "../../utils/images";
import { Image, ListGroup } from "react-bootstrap";
import { useTranslation } from "react-i18next";
const langData = ["english", "french", "german", "italian", "spanish", "dutch"];

function LangOverlay() {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);
  const { t } = useTranslation();
  const storeLanguage = sessionStorage.getItem("selectedLang");
  const [selectedLang, setSelectedLang] = useState(storeLanguage || "english");

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };
  const listItemClicked = (data) => {
    setSelectedLang(data);
    sessionStorage.setItem("selectedLang", data);
    setShow(!show);
  };
  return (
    <div ref={ref}>
      <Button variant="light" onClick={handleClick}>
        <Image src={AppImages.lang_icon}></Image>
      </Button>

      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref}
        containerPadding={0}
      >
        <Popover id="popover-contained">
          <Popover.Body
            style={{
              width: 150,
            }}
          >
            <ListGroup
              as="ul"
              style={{
                borderRadius: 0,
              }}
            >
              {langData.map((data) => {
                return (
                  <ListGroup.Item
                    key={data}
                    as="li"
                    onClick={() => {
                      listItemClicked(data);
                    }}
                    active={data === selectedLang}
                  >
                    {t(data)}
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
  );
}

export default LangOverlay;
