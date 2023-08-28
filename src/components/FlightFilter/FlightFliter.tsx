import React from "react";
import { useSearchParams } from "react-router-dom";
import Button from "../Buttons/Buttons";
import plane from "../../assets/images/flights/plane_icon.png";
import addIcon from "../../assets/images/flights/add.png";
import FlightDropdown from "../../components/Dropdown/FlightDropdown";
import DatePicker from "../DatePicker/DatePicker";
import "./flightfilter.scss";

interface ParamTypes {
  trip_type: string;
  passenger: string;
  flight_type: string;
  departure_date: Date | null;
  arrival_date: Date | null;
}

interface FlightFilterProps {
  onSearch: () => void;
}

const FlightFilter: React.FC<FlightFilterProps> = ({ onSearch }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const setRouteQuery = (key: string, value: any) => {
    const params: any = {
      trip_type: searchParams.get("trip_type") || "Return",
      passenger: searchParams.get("passenger") || "Adult",
      flight_type: searchParams.get("flight_type") || "",
      departure_date: searchParams.get("departure_date") || "",
      arrival_date: searchParams.get("arrival_date") || "",
    };
    params[key] = value;
    setSearchParams(params);
  };

  return (
    <div>
      <div className="type-of-flight">
        <FlightDropdown
          options={["One way", "Return", "Multi-City"]}
          value={searchParams.get("trip_type") || "Return"}
          onSelect={(option: string) => setRouteQuery("trip_type", option)}
        />
        <FlightDropdown
          options={[
            "Adult 18+",
            "Students over 18",
            "Youths 12-17",
            "Children 2-11",
          ]}
          value={searchParams.get("passenger") || "Adult"}
          onSelect={(option: string) => setRouteQuery("passenger", option)}
        />
        <FlightDropdown
          options={["Economy", "Premium Economy", "Business", "First"]}
          value={searchParams.get("flight_type") || "Economy"}
          onSelect={(option: string) => setRouteQuery("flight_type", option)}
        />
      </div>
      <div className="departure-details">
        <div className="departure">
          <img src={plane} alt="" className="plane" />
          <input placeholder="From?" className="departure" />
          <img src={addIcon} alt="" />
        </div>
        <div className="departure">
          <img src={plane} alt="" className="plane" />
          <input placeholder="To?" className="departure" />
          <img src={addIcon} alt="" />
        </div>
        <DatePicker
          selectedStartDate={searchParams.get("departure_date") || ""}
          selectedEndDate={searchParams.get("arrival_date") || ""}
          onSelectStartDate={(date) =>
            setRouteQuery("departure_date", `${date}`)
          }
          onSelectEndDate={(date) => setRouteQuery("arrival_date", `${date}`)}
        />

        <div className="btn-lg">
          <Button type="submit" block onClick={onSearch}>
            Search
          </Button>
        </div>
      </div>
      <div className="flight-pricing">
        <div
          className="flight-pricing__range"
          onClick={() => setRouteQuery("sort", "price")}
        >
          <h4>Cheapest</h4>
          <p>$1,456</p>
        </div>
        <div className="line"></div>
        <div
          className="flight-pricing__range"
          onClick={() => setRouteQuery("sort", "best")}
        >
          <h4>Best</h4>
          <p>$1,675</p>
        </div>
        <div className="line"></div>

        <div
          className="flight-pricing__range"
          onClick={() => setRouteQuery("sort", "time")}
        >
          <h4>Quickest</h4>
          <p>$1,456</p>
        </div>
      </div>
    </div>
  );
};

export default FlightFilter;
