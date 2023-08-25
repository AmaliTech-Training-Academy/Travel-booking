import React from 'react';
import "./items.css";
import TextHeading from '../TextHeading/TextHeading';
import { Link } from 'react-router-dom';
import AccomodationGallery from '../Gallery/AccomodationGallery';



const AccomodationProduct: React.FC = () => {
  return (
    <>
    <div className='accomodationInfo'>
     <div>
     <TextHeading h1Text='Boutique At Grand Central' pText='New York- America' />
     <Link to="">Show map</Link>
     </div>
     <div>
      <AccomodationGallery />
     </div>
    </div>
    </>
  );
};

export default AccomodationProduct;

  
export {}; 