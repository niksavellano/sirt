import React, { Component } from "react";

class inProgress extends Component {
  render() {
    return (
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Incident no.</th>
              <th>Subject</th>
              <th>TAT</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>569546144</td>
              <td>Virus</td>
              <td>NA</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default inProgress;
