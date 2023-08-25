import React from 'react';
import "./items.css";
import TextHeading from '../TextHeading/TextHeading';
import { Link } from 'react-router-dom';
import AccomodationGallery from '../Gallery/AccomodationGallery';




const AccomodationProduct: React.FC = () => {
  return (
    <>
    <div className='accomodationInfo'>
     <div className='accomodationInfoText'>
     
     <TextHeading h1Text='Boutique At Grand Central' pText='New York- America' />
     <Link to="">Show map</Link>
    
     <div className='coverbutton'>
        <button>
        Reserve your apartment
        </button>
      </div>
     </div>     
      <AccomodationGallery />
      <div>
      <p className='itemDescription'>Lorem ipsum dolor sit amet consectetur. Ullamcorper odio sed pretium nisl habitant sed. Lacus et turpis et massa dolor. Etiam porttitor maecenas sed eget felis nulla dis. Blandit mauris tristique est cursus etiam varius. Venenatis pulvinar massa sed sagittis. Dui non mauris lacus faucibus.
         Lacus magna facilisis elit quis id pharetra viverra. Euismod scelerisque duis viverra est non dui sed parturient nec. Id quis sed vitae tincidunt lacus dictum. Mus cras erat cras sagittis. Aliquet scelerisque vestibulum nunc vehicula elit congue enim volutpat. Vel dignissim et eget enim tempor maecenas scelerisque.
         Quis orci fermentum nunc sed. Vitae a elementum ut in integer sit est duis cursus. Amet purus eget ut ac. Pulvinar orci cras nulla sem vel volutpat felis urna. Interdum dolor dignissim pretium feugiat.</p>
      <TextHeading h1Text='Hotel and Apartments has been welcome Travelcity.com guest since 29 May 2023' pText='Distance in property description is calculated using OpenStreetMap' />
      {/*  */}
      <div className="destinations">
    <div className="destinationsContent">
    <h1>Most popular facilities</h1>
       <div className="destinationInfo">
        {/*  */}
        <div className="destination">
          <p>Bathroom</p>
          <span>Texas</span>
          <span>England</span>
          <span>Cornwall</span>
          <span>Germany</span>
        </div>
        {/*  */}
        <div className="destination">
          <p>Media & Technology</p>
          <span>Hawaii</span>
          <span>Lake District</span>
          <span>Ibiza</span>
          <span>Jersey</span>
        </div>
        {/*  */}
        <div className="destination">
          <p>Food & Drink</p>
          <span>Bora Bora</span>
          <span>Uttar Pradesh</span>
          <span>Bali</span>
          <span>Tenerife</span>
        </div>
        {/*  */}
       </div>
    </div>
     </div>
     {/* banner below */}
       <div className='itemBanner'>
           <TextHeading h1Text={'The best of Takoradi'} pText={'Click here to see more hotels and accommodation near popular landmarks in Accra'} />
       </div>
     </div>
    </div>
    </>
  );
};

export default AccomodationProduct;

  
export {}; 