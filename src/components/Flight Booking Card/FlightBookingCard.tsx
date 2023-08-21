import React from "react";
import flightlogo from "../../assets/images/flights/game-icons_royal-love.png";
import curve from "../../assets/images/flights/line_curve.png";
import straightPlane from "../../assets/images/flights/plane_straight.png";
import Button from "../Buttons/Buttons";
import "./flightbookingcard.scss";

const FlightBookingForm: React.FC = () => {

 
  return (
    <div>
      <div className="card">
        <div className="card-flight">
          <div className="card__flight-name">
            <img src={flightlogo} alt="" />
            <p>Royal Air Maroc</p>
          </div>
          <div className="card__departure">
            <p className="card__departure__time">22:10</p>
            <p className="card__departure__hours">LHR</p>
          </div>
        </div>
        <div className="card__flight-type">
          {/* <img src={curve} alt="" className="card__flight-type__curve"/> */}
          <p className="card__flight-type__time">8h 30m</p>
          <img
            src={straightPlane}
            alt=""
            className="card__flight-type__plane"
          />
          <p className="card__flight-type__non-stop">nonstop</p>
        </div>
        <div className="card-flight">
          <div className="card__departure">
            <p className="card__departure__time">20:30</p>
            <p className="card__departure__hours">LGW</p>
          </div>
          <div className="card__final-price">
            <p>$4,129</p>
            <Button>Booking now </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightBookingForm;
