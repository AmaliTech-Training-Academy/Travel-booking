import React, { useState } from "react";
import mainLogo from "../assets/icons/mainLogo.png";
import signupimage from "../assets/images/login-img.png";
import visibility from "../assets/icons/visibility-icon-13.jpg";
import visibilityOff from "../assets/icons/visibility_off.svg";
import Button from "../components/Buttons/Buttons";
import "../assets/css/auth.scss";
import { postRequest } from "../api/request";
import { toast } from "react-toastify";

interface FormData {
  businessName: string;
  businessEmail: string;
  businessAddress: string;
  businessPhone: string;
  businessCategory: string;
  businessWebsite: string;
  businessDescription: string;
  password: string;
}

const BusinessSignup: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    businessName: "",
    businessEmail: "",
    businessAddress: "",
    businessPhone: "",
    businessCategory: "",
    businessWebsite: "",
    businessDescription: "",
    password: "",
  });

  const validatePassword = (password: string): string | null => {
    if (password.length < 8) {
      return "Password must be at least 8 characters long.";
    }

    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasSpecialChars = /[!@#$%^&*()_+]/.test(password);
    const hasNumbers = /\d/.test(password);

    if (!(hasUppercase && hasLowercase && hasSpecialChars && hasNumbers)) {
      return "Password must contain at least one uppercase letter, one lowercase letter, one special character, and one number.";
    }

    return null;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    if (name === "password") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const passwordError = validatePassword(formData.password) || "";
    if (passwordError) {
      return toast(passwordError, {
        type: "error",
      });
    }
    postRequest("/business-auth/signup", formData).then(
      (response: { message: string }) => {
        return toast(response.message, { type: "success" });
      }
    );
  };

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="wrapper">
      <div className="form">
        <div className="form__inner">
          <img className="form__logo" src={mainLogo} alt="logo" />
          <h2 className="form__title business">Business Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="form__input sm">
              <label htmlFor="fullname " className="label required">
                Business Name
              </label>
              <input
                type="text"
                id="businessName"
                name="businessName"
                placeholder="Type business name"
                value={formData.businessName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form__input sm">
              <label htmlFor="email" className="label required">
                Business Email
              </label>
              <input
                type="email"
                id="businessEmail"
                name="businessEmail"
                placeholder="Type business email"
                value={formData.businessEmail}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form__input sm">
              <label htmlFor="businessAddress" className="label required">
                Business Address
              </label>
              <input
                type="text"
                name="businessAddress"
                placeholder="Type business address"
                value={formData.businessAddress}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form__input sm">
              <label htmlFor="businessPhone" className="label required">
                Business Phone Number
              </label>
              <input
                type="tel"
                id="businessPhone"
                name="businessPhone"
                placeholder="Type business phone number"
                value={formData.businessPhone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form__input sm">
              <label htmlFor="businessCategory" className="label">
                Business Category
              </label>
              <select
                name="businessCategory"
                id="businessCategory"
                className="form__input category"
                onChange={handleChange}
                value={formData.businessCategory}
              >
                <option value="" disabled selected hidden>
                  Choose business category
                </option>
                <option value="Agriculture">Agriculture</option>
                <option value="Finance">Finance</option>
                <option value="Non-Profit">Non-Profit</option>
              </select>
            </div>
            <div className="form__input sm">
              <label htmlFor="businessWebsite" className="label required">
                Business Website
              </label>
              <input
                type="text"
                id="businessWebsite"
                name="businessWebsite"
                placeholder="Type business website"
                value={formData.businessWebsite}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form__input sm">
              <label htmlFor="businessDescription" className="label">
                Business Description (optional)
              </label>
              <textarea
                className="descriptionTextarea"
                name="businessDescription"
                id="businessDescription"
                placeholder="Type business description"
                value={formData.businessDescription}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="form__input sm">
              <label htmlFor="password" className="label required">
                Password
              </label>
              <div className="form__input__box">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Type password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="form__input__box__password"
                />
                {showPassword ? (
                  <img
                    src={visibility}
                    alt="show password"
                    onClick={handleTogglePassword}
                    className="toggle-icon"
                  />
                ) : (
                  <img
                    src={visibilityOff}
                    alt="hide password"
                    onClick={handleTogglePassword}
                    className="toggle-icon"
                  />
                )}
              </div>
            </div>
            <Button type="submit" block>
              Sign up
            </Button>
          </form>
        </div>
      </div>
      <div className="image-wrapper">
        <img src={signupimage} alt="img" />
      </div>
    </div>
  );
};

export default BusinessSignup;
