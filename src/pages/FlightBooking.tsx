// Flights.tsx
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Flight from "../components/Flight/FlightHero";
import FlightFilter from "../components/FlightFilter/FlightFliter";
import FlightPricing from "../components/Flight Pricing/FlightPricing";
import { getRequest } from "../api/request";
import { toast } from "react-toastify";
import "../assets/css/flightbooking.scss";
import FlightBookingCard from "../components/Flight Booking Card/FlightBookingCard";

const FlightBooking: React.FC = () => {
  const [flights, setFlights] = useState<any>([]);

  useEffect(() => {
    getRequest("/api/flights").then((response: { message: string }) => {
      return toast(response.message, { type: "success" });
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Flight />
      <div className="flight-booking">
        <h5 className="flight-booking__title">Where do you want to go?</h5>

        <FlightFilter />
        {/* <FlightPricing /> */}
        <FlightBookingCard />
      </div>
      <Footer />
    </div>
  );
};

export default FlightBooking;
