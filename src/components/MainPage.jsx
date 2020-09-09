import React, { Component } from "react";
import "./css/MainPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import LeftTab from "./LeftTab";
import MidTab from "./MidTab";

class MainPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="flexy">
          <LeftTab />
          <MidTab />
        </div>
      </div>
    );
  }
}

export default MainPage;
