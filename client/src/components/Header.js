import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./HeaderStyle.css";

class Header extends Component {
  render() {
    return (
      <div className="header" style={{ marginBottom: "10px" }}>
        <Link to="/">Redux Auth</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/signin">Sign In</Link>
        <Link to="/signout">Sign Out</Link>
        <Link to="/feature">Feature</Link>
      </div>
    );
  }
}

export default Header;
