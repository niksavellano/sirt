import React, { Component } from "react";
import "./identification.css"

class Identification extends Component {
  render() {
    return (
      <div>
      <div className="identification">
        <div>
          <label htmlFor="">Systems Affected: </label>
          <input type="text"/>
          <label htmlFor="">Source IP/URL: </label>
          <input type="text"/>
          <br/>
          <label htmlFor=""> Incident Vector: </label>
          <select name="incidentVector" id="">
            <option value=""></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <label htmlFor="">Detection Source: </label>
          <select name="incidentVector" id="">
            <option value=""></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <br/>
          <label htmlFor="">Reported By: </label>
          <input type="text"/>
          <label htmlFor="">TAT: </label>
          <input type="text"/>
          <label htmlFor="">Act. TAT: </label>
          <input type="text"/>
          <br/>
          <label htmlFor="">Probability: </label>
          <select name="incidentVector" id="">
            <option value=""></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <label htmlFor="">Impact Analysis: </label>
          <select name="incidentVector" id="">
            <option value=""></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div>
          <p>Incident Description</p>
           <label htmlFor="">Subject</label>
           <input type="text"/><br/>
           <textarea name="" id="" cols="50" rows="5"></textarea>
        </div>
        <div>
          <label htmlFor="">Date Reported: </label>
          <input type="date" name="" id=""/>
          <br/>
          <label htmlFor="">Start Reported: </label>
          <input type="date" name="" id=""/>
          <br/>
          <label htmlFor="">End Reported: </label>
          <input type="date" name="" id=""/>
          <br/>
          <label htmlFor="">Severity: </label>
          <input type="text" name="" id=""/>
          <br/>
          <label htmlFor="">Prob. Rating: </label>
          <input type="text" name="" id=""/>
          <br/>
          <label htmlFor="">Impact Level: </label>
          <input type="text" name="" id=""/>
          <br/>
          <label htmlFor="">Incident Loc: </label>
          <input type="text" name="" id=""/>
        </div>
        </div>
        <div className="identification2">
        <div>
          <p>Affected Machines</p>
          <table>
            <tr>
              <th>table1</th>
              <th>table2</th>
              <th>table3</th>
              <th>table4</th>
              <th>table5</th>
              <th>table6</th>
              <th>table7</th>
            </tr>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
            </tr>
          </table>
        </div>
        <div>
          <label htmlFor="">Target Dept: </label>
          <select name="" id="">
            <option value=""></option>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
          </select>
          <table>
          <tr><th>Target Departments</th></tr>
          <tr><td>PSBank</td></tr>
        </table>
        </div>
       
        </div>
      </div>
    );
  }
}
export default Identification;
