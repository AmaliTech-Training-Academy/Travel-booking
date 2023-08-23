import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer} from 'react-toastify';
import Home from "./routes/Home";
import Login from "./pages/Login";
import CustomerSignup from "./pages/CustomerSignup";
import BusinessSignup from "./pages/BusinessSignup";
import Accomodation from "./routes/Accomodation";
import Hotels from "./routes/Hotels";
import CarRentals from "./routes/CarRentals";
import FlightBooking from "./pages/FlightBooking";
import Dashboard from "./routes/Dashboard";
import Cart from "./routes/Cart";
import ForgotPassword from "./pages/ForgotPassword";
import SetNewPassword from "./pages/SetNewPassword";
import Welcome from "./pages/CustomerWelcome";
import CheckEmail from "./pages/CheckEmail";
import 'react-toastify/dist/ReactToastify.css';
import BookNow from "./pages/BookNow";
import RemoveCart from "./pages/RemoveCart";


function App(): JSX.Element {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/customer-signup" element={<CustomerSignup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:id/:token" element={<SetNewPassword />} />
        <Route path="/check-email" element={<CheckEmail />} />
        <Route path="/business-signup" element={<BusinessSignup />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/accomodation" element={<Accomodation />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/car-rentals" element={<CarRentals />} />
        <Route path="/flight-booking" element={<FlightBooking />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/book-now" element={<BookNow />} />
        <Route path="/remove-cart" element={<RemoveCart />} />
      </Routes>
        <ToastContainer/>
    </div>
  );
}

export default App;