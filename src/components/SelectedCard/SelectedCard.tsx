import flightlogo from "../../assets/images/flights/game-icons_royal-love.png";
import plane from "../../assets/images/flights/plane_straight.png";
import curve from "../../assets/images/flights/line_curve1.svg";
import "./selectedcard.scss";
import Button from "../Buttons/Buttons";
import React from "react";

const SelectedCard = () => {
  return (
    <div className="cards">
      <div className="selected-card">
        <div className="name-distination">
          <div className="selected-card__name">
            <img src={flightlogo} alt="" />
            <p>Royal Air Maroc</p>
          </div>
          <div className="selected-card__time">
            <h4>21:00</h4>
            <p>
              <span>ACC </span>Accra
            </p>
          </div>
        </div>
        <div className="selected-card__duration">
          <img src={curve} alt="" />
          <div className="stop">
            <p>16h 30m</p>
            <img src={plane} alt="" />
            <p>1 Stop</p>
          </div>
        </div>
        <div className="name-distination">
          <div className="selected-card__time">
            <h4>21:00</h4>
            <p>
              <span>ACC </span>Accra
            </p>
          </div>
          <p className="baggage">Baggage included 2 34kg</p>
        </div>
      </div>
      <div>
        <div className="summary">
          <h6> Price summary</h6>
          <div className="summary__prices">
            <p>Passenger 1: adult </p>
            <p> $587.00</p>
          </div>
          <div className="summary__prices">
            <p>Base fare </p>
            <p> $187.00</p>
          </div>
          <div className="summary__prices">
            <p>Taxes, fees and charge </p>
            <p> $278.00 </p>
          </div>
          <div className="summary__prices__discount">
            <p>Special Discount </p>
            <p> -$45.00 </p>
          </div>
          <div className="taxes">
            <p>
              Total inc. taxes and fees:
              <s className="original">$542.00 </s>
            </p>
            <p className="discounted">$423.00</p>
          </div>
          <p className="credit-card">
            Your credit card may be billed in multiple charge totaling the final
            price.{" "}
          </p>
        </div>
        <div className="cart-summary">
          <h3>CART SUMMARY</h3>
          <div className="sub-total">
            <div>Sub total</div>
            <div> $423.00</div>
          </div>
          <Button>CHECKOUT ($423.00)</Button>
        </div>
      </div>
    </div>
  );
};

export default SelectedCard;
