import React from "react";
import aeroplane from "../../assets/images/flights/aeroplane.png";
import "./flighthero.scss";

const flight = () => {
  return (
    <div className="flight-hero">
      <div className="flight-hero__main">
        <img
          src={aeroplane}
          alt="A plane taking off"
          className="flight-hero__main__aeroplane"
        />
        <div className="flight-hero__main__content">
          <h3 className="flight-hero__main__content__title">
            Ready to take off?
          </h3>
          <p className="flight-hero__main__content__description">
            Lorem ipsum dolor sit amet consectetur. Amet dignissim et enim id
            ipsum leo amet. Pellentesque l obortis ultrices molestie imperdiet
            lectus at. Turpis morbi adipiscing quis pulvinar. Ullamcorper
            pellentesque sc elerisque quis porttitor ipsum eget consectetur.
            Arcu tincidunt facilisi orci nulla turpis egestas tellus pulvinar
            elit. Vel iaculis ed vivamus dignissim et cras.
          </p>
        </div>
      </div>
    </div>
  );
};

export default flight;