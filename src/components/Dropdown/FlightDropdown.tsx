import React, { useState, useRef, useEffect } from "react";
import arrow from "../../assets/images/flights/arrow_down.png";
import "./flightdropdown.scss";

const FlightDropdown: React.FC = () => {
  const [showReturnDropdown, setShowReturnDropdown] = useState<boolean>(false);
  const [showAdultDropdown, setShowAdultDropdown] = useState<boolean>(false);
  const [showEconomyDropdown, setShowEconomyDropdown] =
    useState<boolean>(false);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleReturnDropdown = () => {
    setShowReturnDropdown((prevState) => !prevState);
    setShowAdultDropdown(false);
    setShowEconomyDropdown(false);
  };

  const toggleAdultDropdown = () => {
    setShowAdultDropdown((prevState) => !prevState);
    setShowReturnDropdown(false);
    setShowEconomyDropdown(false);
  };

  const toggleEconomyDropdown = () => {
    setShowEconomyDropdown((prevState) => !prevState);
    setShowReturnDropdown(false);
    setShowAdultDropdown(false);
  };

  const closeDropdowns = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      setShowReturnDropdown(false);
      setShowAdultDropdown(false);
      setShowEconomyDropdown(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", closeDropdowns);

    return () => {
      window.removeEventListener("click", closeDropdowns);
    };
  }, []);

  return (
    <div className="type-of-flight" ref={dropdownRef}>
      <div className="type-of-flight__drop-down">
        <div className="type-of-flight__drop-down__drop-btn">
          <button>Return</button>
          <img src={arrow} alt="" onClick={toggleReturnDropdown} />
        </div>
        {showReturnDropdown && (
          <ul className="type-of-flight__drop-down__drop-content">
            <li>One-way</li>
            <li>Return</li>
            <li>Multi-city</li>
          </ul>
        )}
      </div>
      <div className="type-of-flight__drop-down">
        <div className="type-of-flight__drop-down__drop-btn">
          <button>1 adult</button>
          <img src={arrow} alt="" onClick={toggleAdultDropdown} />
        </div>
        {showAdultDropdown && (
          <ul className="type-of-flight__drop-down__drop-content pupil">
            <li>Adults 18+</li>
            <li>Students over 18</li>
            <li>Youths 12-17</li>
            <li>Children 2-11</li>
          </ul>
        )}
      </div>
      <div className="type-of-flight__drop-down">
        <div className="type-of-flight__drop-down__drop-btn">
          <button>Economy</button>
          <img src={arrow} alt="" onClick={toggleEconomyDropdown} />
        </div>
        {showEconomyDropdown && (
          <ul className="type-of-flight__drop-down__drop-content economy">
            <li>Economy</li>
            <li>Premium economy</li>
            <li>Business</li>
            <li>First</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default FlightDropdown;
