import React, { useState } from "react";
import "./card.css";
import { Heart } from "react-feather";
import { accomodationList } from "./products"; // Import your accomodationList

const AccomodationCards: React.FC = () => {
  const [isHeartFilled, setIsHeartFilled] = useState(false);

  const toggleHeartFill = () => {
    setIsHeartFilled(!isHeartFilled);
  };

  return (
    <>
      <div className="cardContainer">
        {accomodationList.map((accomodation) => (
          <div className="accomodationCard" key={accomodation.id}>
            <div className="imageArea">
              <div>
                <img src={accomodation.imageUrl} alt="" />
                <Heart
                  className="heart-icon"
                  color={isHeartFilled ? "#B75C76" : "#B75C76"}
                  fill={isHeartFilled ? "#B75C76" : "none"}
                  size={34}
                  onClick={toggleHeartFill}
                />
              </div>
            </div>
            <div className="infoArea">
              <h3>{accomodation.title}</h3>
              <div className="cardLinks">
                <span>{accomodation.locationName}</span>
                <a href={accomodation.locationUrl}>Show on map</a>
              </div>
              <p>{accomodation.description}</p>
            </div>
            <div className="priceArea">
              <div>
                <button className="availableButton">
                  See Availability
                </button>
              </div>
              <div>
                <p>$<span>{accomodation.price}</span></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AccomodationCards;
