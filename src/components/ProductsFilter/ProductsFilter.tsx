import React, {useState} from "react";
import "./productsFilter.css";
import AccomodationCards from '../Cards/AccomdationCards';
import { ArrowLeft, ArrowRight } from "react-feather";



const ProductsFilter: React.FC = () => {
  const itemsPerPage = 5; // Number of items per page
  const totalItems = 20; // Total number of items
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <>
    <div className='filterContainer'>
     <div className='filters'>
      <div className='filtercontent'>
      Filter by:
      </div>
      {/*  */}
      <aside>
            <div className="filterArea">
                    <div className="productItems">
                        All Items: <span>214</span>
                    </div>
                    <div className="itemsCheck">
                        <div className="clothesChecked">
                            <h6>Popular filters</h6>                            
                        </div>
                        <li>
                          <label>
                          <input type="checkbox"/>
                           Hotels
                          </label>
                          <span>14</span>
                        </li>
                        <li>
                        <label>
                          <input type="checkbox"/>
                           Resorts
                          </label>
                          <span>5</span>
                        </li>
                        <li>
                        <label>
                          <input type="checkbox"/>
                           Swimming Pool
                          </label>
                          <span>3</span>
                        </li>
                        <li>
                        <label>
                          <input type="checkbox"/>
                           Centre of Accra
                          </label>
                          <span>7</span>
                        </li>
                    </div>
                    <div className="itemsCheck">
                        <div className="clothesChecked">
                            <h6>Fun things to do</h6>                            
                        </div>
                        <li>
                        <label>
                          <input type="checkbox"/>
                           Beach
                          </label>
                          <span>7</span>
                        </li>
                        <li>
                        <label>
                          <input type="checkbox"/>
                           Happy hour
                          </label>
                          <span>7</span>
                        </li>
                        <li>
                        <label>
                          <input type="checkbox"/>
                           Walking tours
                          </label>
                          <span>7</span>
                        </li>
                    </div>
                    <div className="itemsCheck">
                        <div className="clothesChecked">
                            <h6>Property type</h6>                            
                        </div>
                        <li>
                        <label>
                          <input type="checkbox"/>
                           Hotels
                          </label>
                          <span>7</span>
                        </li>
                        <li>
                        <label>
                          <input type="checkbox"/>
                           Apartments
                          </label>
                          <span>7</span>
                        </li>
                        <li>
                        <label>
                          <input type="checkbox"/>
                           Resort
                          </label>
                          <span>7</span>
                        </li>
                        <li>
                        <label>
                          <input type="checkbox"/>
                           Bed and Breakfast
                          </label>
                          <span>7</span>
                        </li>
                    </div>
                    <div className="itemsCheck">
                        <div className="clothesChecked">
                            <h6>Facilities</h6>                            
                        </div>
                        <li>
                          <label>
                          <input type="checkbox"/>
                           Cars
                          </label>
                          <span>14</span>
                        </li>
                        <li>
                        <label>
                          <input type="checkbox"/>
                           Room Service
                          </label>
                          <span>5</span>
                        </li>
                        <li>
                        <label>
                          <input type="checkbox"/>
                           Airport Shuttles
                          </label>
                          <span>3</span>
                        </li>
                        <li>
                        <label>
                          <input type="checkbox"/>
                           Family rooms
                          </label>
                          <span>7</span>
                        </li>
                        <li>
                        <label>
                          <input type="checkbox"/>
                           Swimming pool
                          </label>
                          <span>7</span>
                        </li>
                        <li>
                        <label>
                          <input type="checkbox"/>
                           Facilities guests
                          </label>
                          <span>7</span>
                        </li>
                        
                    </div>
                    {/*  */}
                    <div className="itemsCheck">
                        <div className="clothesChecked">
                            <h6>Room Facilities</h6>                            
                        </div>
                        <li>
                          <label>
                          <input type="checkbox"/>
                           Shower
                          </label>
                          <span>14</span>
                        </li>
                        <li>
                        <label>
                          <input type="checkbox"/>
                           Private pool
                          </label>
                          <span>5</span>
                        </li>
                        <li>
                        <label>
                          <input type="checkbox"/>
                          Private bathroom
                          </label>
                          <span>3</span>
                        </li>
                        <li>
                        <label>
                          <input type="checkbox"/>
                           Air Conditioning
                          </label>
                          <span>7</span>
                        </li>
                        <li>
                        <label>
                          <input type="checkbox"/>
                           Sofa
                          </label>
                          <span>7</span>
                        </li>
                        <li>
                        <label>
                          <input type="checkbox"/>
                           Coffee machine
                          </label>
                          <span>7</span>
                        </li>
                        <li>
                        <label>
                          <input type="checkbox"/>
                           Hairdryer
                          </label>
                          <span>7</span>
                        </li>
                        <li>
                        <label>
                          <input type="checkbox"/>
                           Flat-screen TV
                          </label>
                          <span>7</span>
                        </li>
                        <li>
                        <label>
                          <input type="checkbox"/>
                            Kitchen
                          </label>
                          <span>7</span>
                        </li>
                    </div>
            </div>
       </aside>      
     </div>
     <div className='products'>
        <AccomodationCards page={currentPage} perPage={itemsPerPage} />
      </div>
      {/* Pagination component */}
    </div>
    <div className="pagination">
        <button className="arrows" onClick={() => handlePageChange(currentPage - 1)}>
          <ArrowLeft size={20} />
        </button>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
        <button className="arrows" onClick={() => handlePageChange(currentPage + 1)}>
          <ArrowRight size={20} />
        </button>
      </div>
    </>
  );
};

export default ProductsFilter;

  
export {}; 