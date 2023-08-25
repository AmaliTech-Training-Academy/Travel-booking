import React from "react";
import paypal from "../assets/images/flights/paypal.png";
import visa from "../assets/images/flights/visa.png";
import mastercard from "../assets/images/flights/mastercard.png";
import lock from "../assets/images/flights/lock.png";
import SelectedCard from "../components/SelectedCard/SelectedCard";
import HomeNav from "../components/Navbar/HomeNav";
import CompletionProgress from "../components/CompletionProgress/CompletionProgress";
import Footer from "../components/Footer/Footer";
import "../assets/css/paymentdetails.scss";
import Button from "../components/Buttons/Buttons";

const PaymentDetails = () => {
  return (
    <div>
      <HomeNav />
      <div className="payment-details">
        <CompletionProgress />
        <SelectedCard />
        <div className="payment-details__content">
          <h5>Payment Details</h5>
          <div className="payment-details__content__forms">
            <div className="payment-details__content__forms__card">
              <div className="card-details">
                <div className="card-type">
                  <label htmlFor="Card number">Card number</label>
                  <div className="card-logos">
                    <img src={visa} alt="" />
                    <img src={mastercard} alt="" />
                    <img src={paypal} alt="" />
                  </div>
                </div>
                <input type="number" />
              </div>
              <div className="card-details">
                <label htmlFor="Cardholder Name">Cardholder Name</label>
                <input type="text" />
              </div>
            </div>
            <div className="payment-details__content__forms__card">
              <div className="card-details">
                <label htmlFor="Start Date">Start Date (mm/yy)</label>
                <input type="date" />
              </div>
              <div className="card-details">
                <label htmlFor="End Date">End Date (mm/yy)</label>
                <input type="date" />
              </div>
            </div>
            <div className="payment-details__content__forms__card">
              <div className="card-details">
                <label htmlFor="Card number">Card number</label>
                <input type="number" />
              </div>
              <div className="card-details">
                <label htmlFor="Issue Number">Issue Number</label>
                <input type="number" />
              </div>
            </div>
            <div className="encryption">
              <div className="encryption__content">
                <img src={lock} alt="" />
                <p>Your transaction is secured with SSL encryption.</p>
              </div>
              <Button>Save</Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PaymentDetails;
