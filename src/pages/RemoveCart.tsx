import React from "react";
import HomeNav from "../components/Navbar/HomeNav";
import Footer from "../components/Footer/Footer";
import Flight from "../components/Flight/FlightHero";
import FlightBookingForm from "../components/FlightBookingCard/FlightBookingCard";
import Button from "../components/Buttons/Buttons";
import "../assets/css/removecart.scss";
import PayNow from "../components/PayNow/PayNow";
const BookNow = () => {
  return (
    <div>
      <HomeNav />
      <Flight />
      <div className="booking">
        <PayNow />
        <div>
          <h3>Your Booking</h3>
          <div className="booking-amount">
            <div className="booking-amount__various-prices">
              <p>Passenger 1: adult</p>
              <p>$587.00</p>
            </div>
            <div className="booking-amount__various-prices">
              <p>Base fare</p>
              <p> $187.00</p>
            </div>
            <div className="booking-amount__various-prices">
              <p>Taxes, fees and charge</p>
              <p> $278.00 </p>
            </div>
            <div className="booking-amount__various-prices">
              <p> Booking fee </p>
              <p>$5.99 </p>
            </div>
            <div className="booking-amount__various-prices special">
              <p> Special Discount </p>
              <p>-$45.00 </p>
            </div>

            <p className="booking-amount__special">
              <span> </span>
            </p>
            <Button>Total $1,234.99</Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookNow;
