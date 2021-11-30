import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";
import logo from "./images/logo.png";

const Header = () => {
  return (
    <div className="ui stackable borderless menu">
      <div className="item">
        <img src={logo} />
      </div>
      <div className="item">
      <Link to="/"><h2 style={{color: "black"}}>Garden Plotter</h2></Link>
      </div>
      <div className="right item">
        <GoogleAuth />
      </div>
    </div>  
  );
};

export default Header;