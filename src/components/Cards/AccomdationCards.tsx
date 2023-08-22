import React, { useState } from "react";
import "./card.css";
import { Heart } from "react-feather";
import { accomodationList } from "./products";
import image1 from "../../assets/images/accomodation/accomodation.png";
import image2 from "../../assets/images/accomodation/accomodation1.png";
import image3 from "../../assets/images/accomodation/accomodation2.png";
import image4 from "../../assets/images/accomodation/accomodation3.png";
import image5 from "../../assets/images/accomodation/accomodation5.png";
import image6 from "../../assets/images/accomodation/accomodation4.jpg";
import image7 from "../../assets/images/accomodation/accomodation6.png";
import image8 from "../../assets/images/accomodation/accomodation7.png";
import image9 from "../../assets/images/accomodation/accomodation8.png";
import image10 from "../../assets/images/accomodation/accomodation9.png";
import image11 from "../../assets/images/accomodation/accomodation10.png";
import image12 from "../../assets/images/accomodation/accomodation11.png";
import image13 from "../../assets/images/accomodation/accomodation12.png";
import image14 from "../../assets/images/accomodation/accomodation13.png";
import image15 from "../../assets/images/accomodation/accomodation14.png";
import image16 from "../../assets/images/accomodation/accomodation15.png";
import image17 from "../../assets/images/accomodation/accomodation16.png";
import image18 from "../../assets/images/accomodation/accomodation17.png";
import image19 from "../../assets/images/accomodation/accomodation18.png";
import image20 from "../../assets/images/accomodation/accomodation19.png";
import { Link } from "react-router-dom";


const imageArray = [image1, image2, image3, image4, image5,
  image6, image7, image8, image9, image10,
  image11, image12, image13, image14, image15,
  image16, image17, image18, image19, image20
]; 

const AccomodationCards: React.FC<{ page: number; perPage: number }> = ({ page, perPage }) => {
  // Calculate the index range for items on the current page
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const [heartStates, setHeartStates] = useState(new Array(accomodationList.length).fill(false));

  const toggleHeartFill = (index: number) => {
    const newHeartStates = [...heartStates];
    newHeartStates[index] = !newHeartStates[index];
    setHeartStates(newHeartStates);
  };

  return (
    <>
      <div className="cardContainer">
        {accomodationList.slice(startIndex, endIndex).map((accomodation, index) => (
          <div className="accomodationCard" key={accomodation.id}>
            <div className="imageArea">
              <div>
                <img src={imageArray[index]} alt="" />
                <Heart
                  className="heart-icon"
                  color="#B75C76"
                  fill={heartStates[index] ? "#B75C76" : "none"}
                  size={34}
                  onClick={() => toggleHeartFill(index)}
                />
              </div>
            </div>
            {/* Rest of the code */}
            <div className="infoArea">
              <h3>{accomodation.title}</h3>
              <div className="cardLinks">
                <span>{accomodation.locationName}</span>
                <a target="_blank" rel="noreferrer" href={accomodation.locationUrl}>Show on map</a>
              </div>
              <p>{accomodation.description}</p>
            </div>
            <div className="priceArea">
              <div>
                <Link className="availableButton" to={"/singleproduct"}>
                  See Availability
                </Link>
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




   // useEffect(() => {
  //   // Fetch the data from an API endpoint or JSON file
  //   fetch("/path/to/accomodations.json")
  //     .then((response) => response.json())
  //     .then((data) => setAccomodationData(data));
  // }, [])