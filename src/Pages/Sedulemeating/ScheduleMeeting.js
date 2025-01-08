import React, { useState } from "react";
import Calendar from "react-calendar";
import { useNavigate } from "react-router-dom";
import "react-calendar/dist/Calendar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ScheduleMeeting.css"; // Add your custom CSS for additional styling
import { useLocation } from "react-router-dom";

const ScheduleMeeting = () => {
  const [selectedDate, setSelectedDate] = useState(new Date()); // Set default to current date
  const [selectedTime, setSelectedTime] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Default cartItems to an empty array if it's not available
  const { cartItems = [] } = location.state || {}; // Retrieve the payload passed from the cart page

  console.log(cartItems);

  const timeSlots = ["7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM", "11:00 PM"];

  const handleScheduleMeeting = () => {
    if (selectedDate && selectedTime) {
      navigate("/schedule-meeting", {
        state: { date: selectedDate, time: selectedTime, cartItems: cartItems },
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
          <h3 className="mb-3">Meeting Duration</h3>
          <div>
            <button className=" btn btn-block btn-light text-muted  w-100">
              15 Mins
            </button>
          </div>

          {selectedDate && (
            <div className="mb-3 mt-3">
              <p>
                <strong>What Time Works Best?</strong> <br />
                Showing Time For{" "}
                <span className="text-primary">
                  {selectedDate.toDateString()}
                </span>
              </p>
              <div className="d-flex flex-column">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    onClick={() => setSelectedTime(slot)}
                    className={`btn btn-block mb-2 ${
                      selectedTime === slot ? "btn-warning" : "btn-light"
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          )}

          <button
            onClick={handleScheduleMeeting}
            className="btn btn-warning w-100"
          >
            Schedule Meeting →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScheduleMeeting;
