import { useState } from "react";
import { Dropdown } from "react-bootstrap";

// List of languages for selection
const langData = ["english", "french", "german", "italian", "spanish", "dutch"];

function LangOverlay() {
  const [show, setShow] = useState(false);
  const [selectedLang, setSelectedLang] = useState(
    sessionStorage.getItem("selectedLang") || "english"
  );

  // Toggles the dropdown visibility
  const handleClick = () => setShow(!show);

  // Handle the selection of a language
  const listItemClicked = (language) => {
    setSelectedLang(language);
    sessionStorage.setItem("selectedLang", language); // Store the language in sessionStorage
    setShow(false); // Close the dropdown after selection
  };

  return (
    <div>
      <Dropdown show={show} onToggle={handleClick} drop="start">
        {" "}
        {/* Use drop="start" to open menu to the left */}
        <Dropdown.Toggle variant="dark" id="dropdown-menu-align-responsive-2">
          {selectedLang.substring(0, 2).toUpperCase()}{" "}
          {/* Display the first two letters of the language */}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {langData.map((language) => (
            <Dropdown.Item
              key={language}
              as="li"
              onClick={() => listItemClicked(language)}
              active={language === selectedLang}
            >
              {language.charAt(0).toUpperCase() + language.slice(1)}{" "}
              {/* Capitalize the first letter */}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default LangOverlay;
