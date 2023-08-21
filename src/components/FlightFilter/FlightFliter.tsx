import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Button from "../Buttons/Buttons";
import plane from "../../assets/images/flights/plane_icon.png";
import addIcon from "../../assets/images/flights/add.png";
import FlightDropdown from "../../components/Dropdown/FlightDropdown";
import DatePicker from "../DatePicker/DatePicker";
import "./flightfilter.scss";

const Departure = () => {
  const [tripType, setTripType] = useState<string>("Return");
  const [passenger, setPassenger] = useState<string>("1 adult");
  const [flightType, setFlightType] = useState<string>("Economy");
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const handleStartDateChange = (date: Date | null) => {
    setSelectedStartDate(date);
  };

  const handleEndDateChange = (date: Date | null) => {
    setSelectedEndDate(date);
  };

  return (
    <div>
      <div className="type-of-flight">
        <FlightDropdown
          options={["One way", "Return", "Multi-City"]}
          value={tripType}
          onSelect={(option: string) => setTripType(option)}
        />
        <FlightDropdown
          options={["Adult 18+", "Students over 18", "Multi-City"]}
          value={passenger}
          onSelect={(option: string) => setPassenger(option)}
        />
        <FlightDropdown
          options={[
            "Economy",
            "Premium Economy",
            "Youth 12-17",
            "Children 2-11",
          ]}
          value={flightType}
          onSelect={(option: string) => setFlightType(option)}
        />
      </div>
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
        {/* <div className="btn-small">
          <Button type="submit">Search </Button>
        </div> */}
        <div className="btn-lg">
        <Button type="submit" block>
          Search
        </Button>
      </div>
      </div>
    </div>
  );
};

export default Departure;
