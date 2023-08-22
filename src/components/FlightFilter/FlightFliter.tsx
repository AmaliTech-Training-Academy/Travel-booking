import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Button from "../Buttons/Buttons";
import plane from "../../assets/images/flights/plane_icon.png";
import addIcon from "../../assets/images/flights/add.png";
import FlightDropdown from "../../components/Dropdown/FlightDropdown";
import DatePicker from "../DatePicker/DatePicker";
import FlightPricing from "../Flight Pricing/FlightPricing";
import "./flightfilter.scss";
import { FlightFilterProducts } from "../FlightFilterProducts/FlightFilterProducts";
import { FlightFilterProduct } from "../FlightFilterProducts/FlightFilterProducts";

interface FlightFilterProps {
  onFilter: (
    tripType: string,
    passenger: string,
    flightType: string,
    selectedStartDate: Date | null,
    selectedEndDate: Date | null,
    country: string | null,
  ) => void;
}

const FlightFilter: React.FC<FlightFilterProps> = ({ onFilter }) => {
  const [tripType, setTripType] = useState<string>("Return");
  const [passenger, setPassenger] = useState<string>("1 adult");
  const [flightType, setFlightType] = useState<string>("Economy");
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);
  const [search, setSearch] = useState<string>("");

  const [searchParams, setSearchParams] = useSearchParams();

  const handleStartDateChange = (date: Date | null) => {
    setSelectedStartDate(date);
  };

  const handleEndDateChange = (date: Date | null) => {
    setSelectedEndDate(date);
  };

  // const handleSearch = () => {
  //   onFilter(
  //     tripType,
  //     passenger,
  //     flightType,
  //     selectedStartDate,
  //     selectedEndDate
  //   );
  //   onFilter(filterCriteria);

  // };
  const getFilteredCountries = (): FlightFilterProduct[] => {
    return FlightFilterProducts.filter(
      (country) =>
        country
        // .includes(country) &&
        // country.toLowerCase().includes(search)
    );
  };

  const handleSearch = () => {
    const filterCriteria = {
      tripType,
      passenger,
      flightType,
      selectedStartDate,
      selectedEndDate,
    };

    // onFilter(
    //   tripType,
    //   passenger,
    //   flightType,
    //   selectedStartDate,
    //   selectedEndDate
    // );
    // Filtering and looping through FlightFilterProducts
    const filteredFlights = FlightFilterProducts.filter((flight) => {
      const departureDateMatches =
        !selectedStartDate || flight.departureDate === selectedStartDate;
      const flightTypeMatches = flight.flightType === tripType;
      // Add more criteria checks as needed

      return departureDateMatches && flightTypeMatches;
    });

    filteredFlights.forEach((filteredFlight) => {
      console.log(
        `Flight ID ${filteredFlight.id} matches the selected criteria.`
      );
    });
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
          <input
            placeholder="From?"
            className="departure"
            onChange={(e) => setSearch(e.target.value)}
          />
          <img src={addIcon} alt="" />
        </div>
        <div className="departure">
          <img src={plane} alt="" className="plane" />
          <input
            placeholder="To?"
            className="departure"
            onChange={(e) => setSearch(e.target.value)}
          />
          <img src={addIcon} alt="" />
        </div>
        <DatePicker
          selectedStartDate={selectedStartDate}
          selectedEndDate={selectedEndDate}
          onSelectStartDate={handleStartDateChange}
          onSelectEndDate={handleEndDateChange}
        />

        <div className="btn-lg">
          <Button type="submit" block onClick={handleSearch}>
            Search
          </Button>
        </div>
      </div>
      <FlightPricing />
    </div>
  );
};

export default FlightFilter;
