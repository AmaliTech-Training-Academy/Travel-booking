import React from 'react';
import "./gallery.css";
import topimage1 from "../../assets/images/accomodation/products/single.png";
import topimage2 from "../../assets/images/accomodation/products/single1.png";
import topimage3 from "../../assets/images/accomodation/products/singlebig.png";
import bottomimage1 from "../../assets/images/accomodation/products/Rectangle1.png";
import bottomimage2 from "../../assets/images/accomodation/products/Rectangle2.png";
import bottomimage3 from "../../assets/images/accomodation/products/Rectangle3.png";
import bottomimage4 from "../../assets/images/accomodation/products/Rectangle4.png";


const AccomodationGallery: React.FC = () => {
  return (
    <>
    <div className='accomodationGallery'>
       <div className='topImages'>
        <div className='topleftImages'>
          <img src={topimage1} alt="" />
          <img src={topimage2} alt="" />
        </div>
        <div className='toprrightImages'>
          <img src={topimage3} alt="" />
        </div>
       </div>
       <div className='bottomImages'>
          <img src={bottomimage1} alt="" />
          <img src={bottomimage2} alt="" />
          <img src={bottomimage3} alt="" />
          <img src={bottomimage4} alt="" />
       </div>
    </div>
    </>
  );
};

export default AccomodationGallery;

  
export {}; 