import React from "react";
import logoSpotfy from "../assets/logo/spotify-logo.png";
import { Link } from "react-router-dom";

const header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={logoSpotfy} alt="Spotfy" />
      </Link>
      <h1>
        <Link className="header__link" to="/">
          Spotfy
        </Link>
      </h1>
    </div>
  );
};

export default header;
