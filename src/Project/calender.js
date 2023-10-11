import React, { useState } from "react";
import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css"; // Import calendar styles
// import './Calender.css'; // Import custom calendar styles

function Calender() {
  // Create a state variable to store the selected date
  const [date, setDate] = useState(new Date());

  // Define a function to handle date changes
  const onChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className="calendar-container">
      <h2>My Calendar</h2>
      <Calendar onChange={onChange} value={date} />
    </div>
  );
}

export default Calender;
