import React, { Component } from "react";

import { Route, Switch } from "react-router-dom";

import inProgress from "./LeftTab/inProgress";
import forApproval from "./LeftTab/forApproval";
import closed from "./LeftTab/closed";
import riskAssess from "./LeftTab/riskAssess";
import search from "./LeftTab/search";

import LeftTabNav from "./LeftTab/leftTabNav";

class LeftTab extends Component {
  render() {
    return (
      <div className="jumbotron">
        <LeftTabNav />
        <Switch>
          <Route exact path="/" component={inProgress}></Route>
          <Route path="/forApproval" component={forApproval}></Route>
          <Route path="/closed" component={closed}></Route>
          <Route path="/riskAssess" component={riskAssess}></Route>
          <Route path="/search" component={search}></Route>
        </Switch>
      </div>
    );
  }
}
export default LeftTab;
