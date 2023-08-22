// Flights.tsx
import React, { useState, useEffect } from "react";
import HomeNav from "../components/Navbar/HomeNav";
import Footer from "../components/Footer/Footer";
import Flight from "../components/Flight/FlightHero";
import FlightFilter from "../components/FlightFilter/FlightFliter";
import FlightPricing from "../components/Flight Pricing/FlightPricing";
import { getRequest } from "../api/request";
import { toast } from "react-toastify";
import FlightBookingCard from "../components/FlightBookingCard/FlightBookingCard";
import { FlightFilterProducts } from "../components/FlightFilterProducts/FlightFilterProducts";
import "../assets/css/flightbooking.scss";

const FlightBooking: React.FC = () => {
  const [flights, setFlights] = useState<any>([]);

  useEffect(() => {
    getRequest("/api/flights").then((response: { message: string }) => {
      return toast(response.message, { type: "success" });
    });
  }, []);

  return (
    <div>
      <HomeNav />
      <Flight />
      <div className="flight-booking">
        <h5 className="flight-booking__title">Where do you want to go?</h5>

        <FlightFilter onFilter={function (tripType: string, passenger: string, flightType: string, selectedStartDate: Date | null, selectedEndDate: Date | null): void {
          throw new Error("Function not implemented.");
        } } />
        {/* <FlightPricing /> */}
        <FlightBookingCard />
        <FlightBookingCard />
        <FlightBookingCard />
      </div>
      <Footer />
    </div>
  );
};

export default FlightBooking;