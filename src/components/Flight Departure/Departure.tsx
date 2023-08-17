import React, { useState } from "react";
import Button from "../Buttons/Buttons";

import plane from "../../assets/images/flights/plane_icon.png";
import addIcon from "../../assets/images/flights/add.png";
import DatePicker from "../DatePicker/DatePicker";
import "./departure.scss";

const Departure = () => {
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);

  const handleStartDateChange = (date: Date | null) => {
    setSelectedStartDate(date);
  };

  const handleEndDateChange = (date: Date | null) => {
    setSelectedEndDate(date);
  };

  return (
    <div className="departure-details">
      <div className="departure">
        <img src={plane} alt="" className="plane" />
        <input placeholder="From?" className="de" />
        <img src={addIcon} alt="" />
      </div>
      <div className="departure">
        <img src={plane} alt="" className="plane" />
        <input placeholder="To?" className="de" />
        <img src={addIcon} alt="" />
      </div>
      <DatePicker
        selectedStartDate={selectedStartDate}
        selectedEndDate={selectedEndDate}
        onSelectStartDate={handleStartDateChange}
        onSelectEndDate={handleEndDateChange}
      />
      <div className="btn-small">
        <Button type="submit">Search </Button>
      </div>
      <div className="btn-lg">
        <Button type="submit" block>
          Search
        </Button>
      </div>
    </div>
  );
};

export default Departure;
