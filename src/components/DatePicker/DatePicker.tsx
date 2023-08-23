import React from "react";
import calender from "../../assets/images/flights/zondicons_calendar.png";
import expand from "../../assets/images/flights/expand.png";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./datepicker.scss"; // Add your own styling here

interface CustomDatePickerProps {
  selectedStartDate: string;
  selectedEndDate: string;
  onSelectStartDate: (date: Date | null) => void;
  onSelectEndDate: (date: Date | null) => void;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  selectedStartDate,
  selectedEndDate,
  onSelectStartDate,
  onSelectEndDate,
}) => {
  const customDateFormat = "EEE d/MM";

  return (
    <div className="calender">
      <div className="calender__start-date">
        <img src={calender} alt="calender" />
        <DatePicker
          selected={selectedStartDate ? new Date(selectedStartDate) : null}
          onChange={(date) => onSelectStartDate(date)}
          dateFormat={customDateFormat}
          className="custom-datepicker"
        />
        {/* <img src={expand} alt="" /> */}
      </div>
      <div className="division"></div>
      <div className="calender__start-date">
        <img src={calender} alt="calender" />
        <DatePicker
          selected={selectedEndDate ? new Date(selectedEndDate) : null}
          onChange={(date) => onSelectEndDate(date)}
          dateFormat={customDateFormat}
          className="custom-datepicker"
        />
        {/* <img src={expand} alt="" /> */}
      </div>
    </div>
  );
};

export default CustomDatePicker;
