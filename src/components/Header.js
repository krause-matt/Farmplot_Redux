import React from "react";
import { Link } from "react-router-dom";
import RowEdit from "./rows/RowEdit";
import RowList from "./rows/RowList";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
  return (
    <div className="ui inverted segment">
      <div className="ui inverted secondary menu">
        <a className="active item">
          <Link to="/">Home</Link>
        </a>
        <a className="item">
          <Link to="/rows/new">New</Link>
        </a>
        <a className="item">
          <Link to="/rows/edit">Edit</Link>
        </a>        
        <div className="right item">
          <a className="item">
            <GoogleAuth />
          </a>
        </div>        
      </div>
    </div>
  );
};

export default Header;