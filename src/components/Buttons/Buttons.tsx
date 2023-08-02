import React from "react";
import { Link } from "react-router-dom";
import "./buttons.css" // Import Link component from React Router

const Button: React.FC<{ url: string }> = ({ url }) => {
  // Your component logic here
  return (
    
      <a className="basicBtn">
        <Link className="btnLink" to={url}>Log in</Link>
      </a>
    
  );
};

export default Button;
