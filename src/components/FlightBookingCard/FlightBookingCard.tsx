import React from "react";
import flightlogo from "../../assets/images/flights/game-icons_royal-love.png";
import curve from "../../assets/images/flights/line_curve1.svg";
import straightPlane from "../../assets/images/flights/plane_straight.png";
import Button from "../Buttons/Buttons";
import "./flightbookingcard.scss";
import { FlightFilterProduct } from "../FlightFilterProducts/FlightFilterProducts";
import { useNavigate } from "react-router-dom";

interface FlightBookingCardProps {
  flight: {
    id: number;
    flightType: string;
    departureDate: Date | null;
    arrivalDate: Date | null;
    departureCity: string;
    arrivalCity: string;
    classType: string;
    priceCategory: string;
    passengerType: string;
    flightName: string;
    flightLogo: string;
    departureTime: string;
    arrivalTime: string;
    flightPrice: number;
  };
}

const FlightBookingForm: React.FC<FlightBookingCardProps> = ({ flight }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleBookingNow = () => {
    // Handle booking logic here
    // For now, let's navigate to a booking page with the selected flight details
    navigate(`/flight-booking/${flight.id}/book`);
  };
  return (
    <div>
      <div className="card">
        <div className="card-flight">
          <div className="card__flight-name">
            <img src={flightlogo} alt="" />
            <p>{flight.flightName}</p>
          </div>
          <div className="card__departure">
            <p className="card__departure__time">{flight.departureTime}</p>
            <p className="card__departure__hours">{flight.departureCity}</p>
          </div>
        </div>
        <div className="card__flight-type">
          <img src={curve} alt="" className="card__flight-type__curve" />
          <div className="card__flight-type__set">
            <p className="card__flight-type__set__time">8h 30m</p>
            <img
              src={straightPlane}
              alt=""
              className="card__flight-type__set__plane"
            />
            <p className="card__flight-type__set__non-stop">nonstop</p>
          </div>
        </div>
        <div className="card-flight">
          <div className="card__departure">
            <p className="card__departure__time">{flight.arrivalTime}</p>
            <p className="card__departure__hours">{flight.arrivalCity}</p>
          </div>
          <div className="card__final-price">
            <p>${flight.flightPrice}</p>
            <Button onClick={handleBookingNow}>Booking now </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightBookingForm;
