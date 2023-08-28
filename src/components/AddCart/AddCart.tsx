import React from "react";
import flightlogo from "../../assets/images/flights/game-icons_royal-love.png";
import plane from "../../assets/images/flights/plane_straight.png";
import curve from "../../assets/images/flights/line_curve1.svg";
import FlightBookingForm from "../FlightBookingCard/FlightBookingCard";
import Button from "../Buttons/Buttons";
import "./addcart.scss";
import SelectedCard from "../SelectedCard/SelectedCard";

const AddCart = () => {
  return (
    <div>
      <div className="booking-ticket-main">
        <h3>Your Flight</h3>
        <div className="cart-content">
          <div className="booking-ticket">
            <div className="booking-ticket__flight-name">
              <div className="flight-name">
                <img src={flightlogo} alt="" />
                <p>Royal Air Maroc</p>
              </div>
              <div className="time">
                <h3>21:00</h3>
                <p>ACC Accra</p>
              </div>
            </div>
            <div className="flight__time">
              <img src={curve} alt="" />
              <div className="flight__time__time">
                <p>16h 30m</p>
                <img src={plane} alt="" />
                <p>1 Stop</p>
              </div>
            </div>
            <div className="booking-ticket__flight-name">
              <div className="time">
                <h3>11:00</h3>
                <p>ACC Accra</p>
              </div>
              <div className="baggage">
                <p>Baggage included 2 34kg</p>
              </div>
            </div>
          </div>
          <Button>ADD TO CART</Button>
        </div>
      </div>
    </div>
  );
};

export default AddCart;
