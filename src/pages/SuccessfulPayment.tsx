import React from "react";
import rafiki from "../assets/images/flights/rafiki.png";
import HomeNav from "../components/Navbar/HomeNav";
import "../assets/css/successfulpayment.scss";
import Button from "../components/Buttons/Buttons";

const SuccessfulPayment = () => {
  return (
    <div>
      <HomeNav />
      <div className="successful-payment">
        <div className="successful-payment__content">
          <h2>Transaction Completed Successfully</h2>
          <p>We are delighted to inform you that we received your payment.</p>
          <div className="buttons">
            <Button>Back Home</Button>
            <Button>Close</Button>
          </div>
        </div>
        <img src={rafiki} alt="" />
      </div>
    </div>
  );
};

export default SuccessfulPayment;
