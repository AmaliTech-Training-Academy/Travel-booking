import React from "react";
import "../Flight Pricing/flightpricing.scss";

const FlightPricing = () => {
  return (
    <div className="flight-pricing">
      <div className="flight-pricing__range">
        <h4>Cheapest</h4>
        <p>$1,456</p>
      </div>
      <div className="line"></div>
      <div className="flight-pricing__range">
        <h4>Best</h4>
        <p>$1,675</p>
      </div>
      <div className="line"></div>

      <div className="flight-pricing__range">
        <h4>Quickest</h4>
        <p>$1,456</p>
      </div>
    </div>
  );
};

export default FlightPricing;
