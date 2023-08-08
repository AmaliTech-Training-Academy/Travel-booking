import React, { useState } from "react";
import { Link } from "react-router-dom";
import mainLogo from "../assets/icons/mainLogo.png";
import signupimage from "../assets/images/login-img.png";
import visibility from "../assets/icons/visibility-icon-13.jpg";
import visibilityOff from "../assets/icons/visibility_off.svg";

import Button from "../components/Buttons/Buttons";
import "../assets/css/auth.scss";
import { postRequest } from "../api/request";

interface PasswordFormData {
  newPassword: string;
  confirmPassword: string;
}

const SetNewPassword: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState<PasswordFormData>({
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //  password validation and submission
    if (formData.newPassword !== formData.confirmPassword) {
      alert("Passwords do not match. Please try again.");
    } else if (!isPasswordValid(formData.newPassword)) {
      // Handle password validity error
      alert(
        "Password must be at least 8 characters with upper and lower case characters, and 1 or more numbers."
      );
    } else {
      // API call here
      alert("Password set successfully!");
    }
  };

  const isPasswordValid = (password: string): boolean => {
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[a-zA-Z0-9!@#$%^&*()_+]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="wrapper">
      <div className="form">
        <div className="form__inner">
          <img src={mainLogo} alt="logo" />
          <h2 className="form__title">Set new password</h2>
          <p className="terms">
            Your new password must be different to previously used passwords.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="form__input">
              <label htmlFor="password" className="label">
                Password
              </label>
              <div className="form__input__box">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Type password"
                  value={formData.confirmPassword}
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
            <div className="form__input">
              <label htmlFor="password" className="label">
                Confirm password{" "}
              </label>
              <div className="form__input__box">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Confirm password "
                  value={formData.confirmPassword}
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
              Reset Password
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

export default SetNewPassword;