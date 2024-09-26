import { useState, useRef } from "react";
import { Dropdown } from "react-bootstrap";
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
      <Dropdown>
        <Dropdown.Toggle variant="dark" id="dropdown-basic">
          {selectedLang.substring(0, 2).toLocaleUpperCase()}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {langData.map((data) => {
            return (
              <Dropdown.Item
                key={data}
                as="li"
                onClick={() => {
                  listItemClicked(data);
                }}
                active={data === selectedLang}
              >
                {" "}
                {t(data)}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default LangOverlay;
