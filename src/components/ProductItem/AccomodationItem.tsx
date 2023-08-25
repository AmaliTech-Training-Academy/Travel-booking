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
     <div>
     <TextHeading h1Text='Boutique At Grand Central' pText='New York- America' />
     <Link to="">Show map</Link>
     </div>
     <div className='coverbutton'>
        <button>
        Reserve your apartment
        </button>
      </div>
     </div>
     <div>
      <AccomodationGallery />
      <p className='itemDescription'>Lorem ipsum dolor sit amet consectetur. Ullamcorper odio sed pretium nisl habitant sed. Lacus et turpis et massa dolor. Etiam porttitor maecenas sed eget felis nulla dis. Blandit mauris tristique est cursus etiam varius. Venenatis pulvinar massa sed sagittis. Dui non mauris lacus faucibus.
Lacus magna facilisis elit quis id pharetra viverra. Euismod scelerisque duis viverra est non dui sed parturient nec. Id quis sed vitae tincidunt lacus dictum. Mus cras erat cras sagittis. Aliquet scelerisque vestibulum nunc vehicula elit congue enim volutpat. Vel dignissim et eget enim tempor maecenas scelerisque.
Quis orci fermentum nunc sed. Vitae a elementum ut in integer sit est duis cursus. Amet purus eget ut ac. Pulvinar orci cras nulla sem vel volutpat felis urna. Interdum dolor dignissim pretium feugiat.</p>
      <TextHeading h1Text='Hotel and Apartments has been welcome Travelcity.com guest since 29 May 2023' pText='Distance in property description is calculated using OpenStreetMap' />
     </div>
    </div>
    </>
  );
};

export default AccomodationProduct;

  
export {}; 