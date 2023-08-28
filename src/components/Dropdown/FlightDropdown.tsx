import React, { useState, useRef, useEffect } from "react";
import arrow from "../../assets/images/flights/arrow_down.png";
import map from "../../assets/images/flights/map-desktop.png";
import "./flightdropdown.scss";

interface DropdownProps {
  options: string[];
  onSelect: (option: string) => void;
  value: string;
}

const FlightDropdown: React.FC<DropdownProps> = ({
  options,
  onSelect,
  value,
}) => {
  const [show, setShow] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>(value);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setShow((prevState) => !prevState);
  };

  const setSelectedOption = (option: string) => {
    setSelected(option);
    onSelect(option);
    setShow(false);
  };

  const closeDropdowns = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", closeDropdowns);

    return () => {
      window.removeEventListener("click", closeDropdowns);
    };
  }, []);

  return (
    <>
      <div className="drop-map">
        <div className="type-of-flight__drop-down" ref={dropdownRef}>
          <div className="type-of-flight__drop-down__drop-btn">
            <button>{selected || "Return"}</button>
            <img src={arrow} alt="" onClick={toggleDropdown} />
          </div>
          {show && (
            <ul className="type-of-flight__drop-down__drop-content">
              {options.map((option, index) => (
                <li key={index} onClick={() => setSelectedOption(option)}>
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div>
          {/* <img src={map} alt="" /> */}
        </div>
      </div>
    </>
  );
};

export default FlightDropdown;
