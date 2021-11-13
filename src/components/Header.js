import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
  return (
    <div className="ui inverted segment">
      <div className="ui inverted secondary menu">
        <div className="active item">
          <Link to="/">Home</Link>
        </div>
        <div className="item">
          <Link to="/rows/new">New</Link>
        </div>        
        <div className="right item">
          <div className="item">
            <GoogleAuth />
          </div>
        </div>        
      </div>
    </div>
  );
};

export default Header;