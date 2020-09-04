import React, { Component } from "react";
import "./css/MainPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import LeftTab from "./LeftTab";

class MainPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <LeftTab />
      </div>
    );
  }
}

export default MainPage;
