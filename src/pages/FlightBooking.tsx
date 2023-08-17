// Flights.tsx
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Flight from "../components/Flight/FlightHero";
import FlightDropdown from "../components/Dropdown/FlightDropdown";
import Departure from "../components/Flight Departure/Departure";
import "../assets/css/flightbooking.scss";

const FlightBooking: React.FC = () => {
  // Your component logic here
  return (
    <div>
      <Navbar />
      <Flight />
      <div className="flight-booking">
        <h5 className="flight-booking__title">Where do you want to go?</h5>
      <FlightDropdown />
      <Departure/>
      </div>
      <Footer />
    </div>
  );
};

export default FlightBooking;

