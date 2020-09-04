import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "../css/LeftTabNav.css";

class LeftTabNav extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <NavLink className="nav-link" exact to="/">
              In <br /> progress
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" exact to="/forApproval">
              For <br /> Approval
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" exact to="/closed">
              Closed
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" exact to="/riskAssess">
              Risk <br /> Assess
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" exact to="/search">
              Search
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
export default LeftTabNav;
