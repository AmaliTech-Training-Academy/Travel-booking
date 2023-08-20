import React from "react";
import calender from "../../assets/images/flights/zondicons_calendar.png";
import expand from "../../assets/images/flights/expand.png";
import DatePicker from "react-datepicker";
import { DateRangePicker } from "react-date-range";

import "react-datepicker/dist/react-datepicker.css";
import "./datepicker.scss"; // Add your own styling here

interface CustomDatePickerProps {
  selectedStartDate: Date | null;
  selectedEndDate: Date | null;
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
          selected={selectedStartDate}
          onChange={(date) => onSelectStartDate(date)}
          dateFormat={customDateFormat}
          className="custom-datepicker"
        />
        <img src={expand} alt="" />
      </div>
      <div className="division"></div>
      <div className="calender__start-date">
        <img src={calender} alt="calender" />
        <DatePicker
          selected={selectedEndDate}
          onChange={(date) => onSelectEndDate(date)}
          dateFormat={customDateFormat}
          className="custom-datepicker"
        />
        <img src={expand} alt="" />
      </div>
    </div>
  );
};

export default CustomDatePicker;
