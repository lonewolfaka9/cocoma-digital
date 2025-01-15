import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import { useNavigate } from "react-router-dom";
import "react-calendar/dist/Calendar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ScheduleMeeting.css"; // Add your custom CSS for additional styling
import { useLocation } from "react-router-dom";
import Select from "react-select"; // Import react-select

const ScheduleMeeting = () => {
  const [selectedDate, setSelectedDate] = useState(new Date()); // Default to current date
  const [selectedTime, setSelectedTime] = useState(""); // Keep as string for button selection
  const navigate = useNavigate();
  const location = useLocation();
  const [timezone, setTimezone] = useState("");
  const [timeSlots, setTimeSlots] = useState([]);

  const { cartItems = [] } = location.state || {}; // Retrieve the payload passed from the cart page

  useEffect(() => {
    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setTimezone(userTimezone); // Set the user's time zone (e.g., "Asia/Kolkata" or "America/New_York")
  }, []);

  useEffect(() => {
    generateTimeSlots();
  }, [selectedDate]);

  const generateTimeSlots = () => {
    const slots = [];
    const startOfDay = new Date(selectedDate);
    startOfDay.setHours(0, 0, 0, 0);

    const now = new Date();

    for (let i = 0; i < 24 * 4; i++) {
      const slot = new Date(startOfDay);
      slot.setMinutes(i * 15);

      // Only add slots that are not in the past for the current date
      if (selectedDate.toDateString() === now.toDateString()) {
        if (slot > now) {
          slots.push(slot);
        }
      } else {
        slots.push(slot);
      }
    }

    setTimeSlots(slots);
  };

  const handleScheduleMeeting = () => {
    if (selectedDate && selectedTime) {
      navigate("/schedule-meeting", {
        state: {
          date: selectedDate,
          time: selectedTime,
          timeZone: timezone,
          cartItems: cartItems,
        },
      });
    } else {
      alert("Please select both a date and a time slot to proceed.");
    }
  };

  // Format the time slots for react-select
  const timeSlotOptions = timeSlots.map((slot) => {
    const timeString = slot.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    return { value: timeString, label: timeString };
  });

  return (
    <div className="container py-5">
      <div className="row">
        {/* Calendar Section */}
        <div className="col-md-5 mb-4">
          <h2 className="mb-3">Schedule a Meeting</h2>
          <p className="text-muted">
            Choose a convenient time to connect with us.
          </p>
          <Calendar
            onChange={setSelectedDate}
            value={selectedDate} // Default to current date
            minDate={new Date()} // Restricts to today and future dates
            className="w-100"
          />
        </div>
        <div className="col-lg-1"></div>
        {/* Time Slot Section */}
        <div className="col-md-6">
          <h3 className="mb-3">Meeting Time</h3>
          <div className="mb-3">
            {" "}
            <button className=" btn btn-block btn-light text-muted  w-100">
              15 Mins
            </button>
          </div>
          <p>
            <strong>Select a Time:</strong> <br />
            Showing Time for{" "}
            <span className="text-primary">{selectedDate.toDateString()}</span>
          </p>

          {/* React-Select Dropdown */}
          <div className="mb-3">
            <Select
              options={timeSlotOptions}
              value={timeSlotOptions.find(
                (option) => option.value === selectedTime
              )}
              onChange={(selectedOption) =>
                setSelectedTime(selectedOption.value)
              }
              isSearchable={false}
              placeholder="Select a Time"
              getOptionLabel={(e) => (
                <div className="time-slot-button">{e.label}</div>
              )}
              styles={{
                menuList: (base) => ({
                  ...base,
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)", // 4 buttons per row
                  gap: "10px",
                }),
                option: (base) => ({
                  ...base,
                  padding: "0",
                  backgroundColor: "transparent",
                }),
                control: (base) => ({
                  ...base,
                  border: "1px solid #ccc",
                }),
              }}
            />
          </div>

          <button
            onClick={handleScheduleMeeting}
            className="btn btn-warning w-100 mt-4"
          >
            Schedule Meeting
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScheduleMeeting;
