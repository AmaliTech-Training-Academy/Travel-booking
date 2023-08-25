import React from "react";
import ewallet from "../assets/images/flights/e-wallet.png";
import HomeNav from "../components/Navbar/HomeNav";
import Footer from "../components/Footer/Footer";
import Button from "../components/Buttons/Buttons";
import check from "../assets/images/flights/check-mark.png";
import "../assets/css/flightpayment.scss";
import SelectedCard from "../components/SelectedCard/SelectedCard";
import CompletionProgress from "../components/CompletionProgress/CompletionProgress";

const FlightPayment = () => {
  return (
    <>
      <HomeNav />
      <div className="flight-payment">
        <CompletionProgress />

        <SelectedCard />

        <div className="passenger-info">
          <h4 className="passenger-info__title">Passenger information</h4>
          <p className="passenger-info__content">
            Please entre each passenger’s information exactly as it appears on
            the passport issued photo ID that the passenger presents at the
            airport. Name change are not permitted after booking.
          </p>
          <h6 className="passenger-info__sub-title">Passenger 1</h6>
          <div className="passenger-info__bio">
            <div className="gender">
              <h6>Gender:</h6>
              <input type="radio" id="male" name="male" value="Male" />
              <label htmlFor="male">Male</label>
              <input type="radio" id="female" name="female" value="Female" />
              <label htmlFor="female">Female</label>
            </div>
            <div className="name">
              <div className="firstname ">
                <label htmlFor="firstname required">FirstName</label>
                <input type="text" required />
              </div>
              <div className="firstname">
                <label htmlFor="lastname">LastName</label>
                <input type="text" required />
              </div>
            </div>
            <div className="name">
              <div className="firstname">
                <label htmlFor="date of birth">Date of Birth</label>
                <input type="date" />
              </div>
              <div className="firstname">
                <label htmlFor="city">City </label>
                <input type="text" required />
              </div>
            </div>
          </div>
        </div>
        <div className="passenger-info-b">
          <h4 className="passenger-info__title">Contact information</h4>

          <div className="passenger-info__bio">
            <div className="name">
              <div className="firstname">
                <label htmlFor="firstname">Email address</label>
                <input type="text" />
              </div>
              <div className="firstname">
                <label htmlFor="lastname">Confirm email</label>
                <input type="text" />
              </div>
            </div>
            <div className="name">
              <div className="firstname">
                <label htmlFor="date of birth">Phone number</label>
                <input type="number" />
              </div>
              <div className="firstname">
                <label htmlFor="city *">Confirm phone number </label>
                <input type="text" />
              </div>
            </div>
          </div>
        </div>
        <p className="cancellation">Free cancellation at any time</p>
        <Button>continue</Button>
        <div className="price-assurance">
          <div className="ewallet">
            <img src={ewallet} alt="" />
          </div>
          <div className="content">
            <p>Price Drop Assurance</p>
            <h6>Get your money back if the price drops!</h6>
            <div className="points">
              <img src={check} alt="" />
              <p>
                We will automatically check for price drops for 24 hours after
                your book.
              </p>
            </div>
            <div className="points">
              <img src={check} alt="" />
              <p>If price drops, get your savings back!</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FlightPayment;
