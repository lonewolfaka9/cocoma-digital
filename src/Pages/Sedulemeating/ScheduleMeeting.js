import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import { useNavigate } from "react-router-dom";
import "react-calendar/dist/Calendar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ScheduleMeeting.css"; // Add your custom CSS for additional styling
import { useLocation } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import dayjs from "dayjs";
import TextField from "@mui/material/TextField";

const ScheduleMeeting = () => {
  const [selectedDate, setSelectedDate] = useState(new Date()); // Default to current date
  const [selectedTime, setSelectedTime] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [timezone, setTimezone] = useState("");

  const { cartItems = [] } = location.state || {}; // Retrieve the payload passed from the cart page

  console.log(cartItems);

  useEffect(() => {
    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setTimezone(userTimezone); // Set the user's time zone (e.g., "Asia/Kolkata" or "America/New_York")
  }, []);

  console.log(timezone);

  const handleScheduleMeeting = () => {
    if (selectedDate && selectedTime) {
      console.log(selectedTime.format("h:mm A"));

      navigate("/schedule-meeting", {
        state: {
          date: selectedDate,
          time: selectedTime.format("h:mm A"),
          timeZone: timezone,
          cartItems: cartItems,
        },
      });
    } else {
      alert("Please select both a date and a time slot to proceed.");
    }
  };

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
          <div>
            <button className=" btn btn-block btn-light text-muted  w-100">
              15 Mins
            </button>
          </div>
          {selectedDate && (
            <div className="mb-3 mt-3">
              <p>
                <strong>Select a Time:</strong> <br />
                Showing Time for{" "}
                <span className="text-primary">
                  {selectedDate.toDateString()}
                </span>
              </p>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <MobileTimePicker
                  label={
                    selectedTime ? " Selected Time" : "Please Select  Time"
                  }
                  value={selectedTime || null} // Pass `null`  if no time is selected
                  onChange={(newTime) => setSelectedTime(newTime)}
                  minutesStep={15}
                  className=" btn-warning TimePicker-input-feild"
                  renderInput={(params) => (
                    <TextField type="text" {...params} />
                  )}
                />
              </LocalizationProvider>
            </div>
          )}

          <button
            onClick={handleScheduleMeeting}
            className="btn btn-warning w-100 mt-4"
          >
            Schedule Meeting →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScheduleMeeting;
