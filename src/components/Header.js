import React from "react";
import { Link } from "react-router-dom";
import RowEdit from "./rows/RowEdit";
import RowList from "./rows/RowList";

const Header = () => {
  return (
    <div class="ui inverted segment">
      <div class="ui inverted secondary menu">
        <a class="active item">
          <Link to="/">Home</Link>
        </a>
        <a class="item">
          <Link to="/rows/edit">Edit</Link>
        </a>
        <div class="right item">
          <a class="item">
            Login
          </a>
        </div>        
      </div>
    </div>
  );
};

export default Header;