import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <div className="main">
          <p>
            Information Security Division, Security Incident Response Department
          </p>
          <br />
          <div id="one">
            <p>
              <b>
                S<i>i</i>RT
              </b>
              Security Incident Response Tracker
            </p>
            <p id="right">
              Welcome,Claudio Francis James F.. Have a great day!
            </p>
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Company</th>
              <th>Incident no.</th>
              <th>incident type</th>
              <th>Handled By</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <select name="company" id="company">
                  <option value="">PSBank</option>
                </select>
              </td>
              <td>
                <input type="text" name="" id="" />
              </td>
              <td>
                <select name="incidentType" id="incidentType">
                  <option value=""></option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                </select>
              </td>
              <td>
                <select name="handledby" id="handledby">
                  <option value=""></option>
                  <option value="">Francis Claudio</option>
                </select>
                <button className="btn btn-primary">SAVE</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default Header;
