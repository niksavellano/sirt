import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class MidTabNav extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <NavLink className="nav-link" exact to="/identification">
              Identification
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" exact to="/containment">
              Containment
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" exact to="/investigation-analysis">
              Investigation/ <br /> Recovery
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" exact to="/remediation-recovery">
              Remediation/ <br /> Recovery
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" exact to="/post-analysis">
              Post Analysis
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" exact to="/chain-of-custody">
              Chain Of <br /> Custody
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" exact to="/follow-up">
              Follow-up
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" exact to="/incident-summary">
              Incident <br /> Summary
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
export default MidTabNav;
