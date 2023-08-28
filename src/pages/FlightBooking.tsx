// Flights.tsx
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import HomeNav from "../components/Navbar/HomeNav";
import Footer from "../components/Footer/Footer";
import Flight from "../components/Flight/FlightHero";
import FlightFilter from "../components/FlightFilter/FlightFliter";
import { getRequest } from "../api/request";
import { toast } from "react-toastify";
import FlightBookingCard from "../components/FlightBookingCard/FlightBookingCard";
import {
  FlightFilterProducts,
  FlightFilterProduct,
} from "../components/FlightFilterProducts/FlightFilterProducts";
import Pagination from "../components/pagination/Pagination";
import "../assets/css/flightbooking.scss";

interface ParamTypes {
  trip_type: string;
  passenger: string;
  flight_type: string;
  departure_date: string;
  arrival_date: String;
}

const FlightBooking: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [flights, setFlights] = useState<FlightFilterProduct[]>([]);
  const [searchParams] = useSearchParams();

  const flightsPerPage = 10;
  const indexOfLastFlight = currentPage * flightsPerPage;
  const indexOfFirstFlight = indexOfLastFlight - flightsPerPage;

  const totalPages = Math.ceil(FlightFilterProducts.length / flightsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleFilter = () => {
    const params: ParamTypes = {
      trip_type: searchParams.get("trip_type") || "Return",
      passenger: searchParams.get("passenger") || "Adult 18+",
      flight_type: searchParams.get("flight_type") || "",
      departure_date: searchParams.get("departure_date") || "",
      arrival_date: searchParams.get("arrival_date") || "",
    };

    const filteredFlight = FlightFilterProducts.filter(
      (item: FlightFilterProduct) =>
        item.flightType
          .toLowerCase()
          .includes(params.trip_type.toLowerCase()) &&
        item.classType
          .toLowerCase()
          .includes(params.flight_type.toLowerCase()) &&
        params.passenger
          .toLowerCase()
          .includes(item.passengerType.toLowerCase())
    );
    setFlights(filteredFlight);
  };

  const handleSort = () => {
    const sort = searchParams.get("sort");
    const tempFlights = [...flights];
    if (sort === "price") {
      const sortedFlights = tempFlights.sort(
        (a, b) => a.flightPrice - b.flightPrice
      );
      setFlights(sortedFlights);
    }
    if (sort === "time") {
      const flightsWithDuration = tempFlights.map((flight) => ({
        ...flight,
        duration:
          new Date(`${flight.arrivalDate} ${flight.arrivalTime}`)
      }));
      console.log(flightsWithDuration)
    }
  };

  useEffect(() => {
    // handleFilter();
    handleSort();
    // getRequest("/api/flights").then((response: { message: string }) => {
    //   return toast(response.message, { type: "success" });
    // });
  }, [searchParams]);

  return (
    <div>
      <HomeNav />
      <Flight />
      <div className="flight-booking">
        <h5 className="flight-booking__title">Where do you want to go?</h5>

        <FlightFilter onSearch={handleFilter} />
        {/* <FlightPricing /> */}
        {flights.slice(indexOfFirstFlight, indexOfLastFlight).map((flight) => (
          <FlightBookingCard
            key={flight.id}
            flight={flight} // flight={flight}
          />
        ))}
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
      <Footer />
    </div>
  );
};

export default FlightBooking;
