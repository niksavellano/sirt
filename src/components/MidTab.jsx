import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import ChainOfCustody from "./MidTab/ChainOfCustody";
import Containment from "./MidTab/Containment";
import FollowUp from "./MidTab/FollowUp";
import Identification from "./MidTab/Identification";
import IncidentSummary from "./MidTab/IncidentSummary";
import InvestigationAnalysis from "./MidTab/InvestigationAnalysis";
import PostAnalysis from "./MidTab/PostAnalysis";
import RemediationRecovery from "./MidTab/RemediationRecovery";
import MidTabNav from "./MidTab/MidTabNav";

import "./css/LeftTabNav.css";

class MidTab extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron two">
          <MidTabNav />
          <Switch>
            <Route path="/identification" component={Identification}></Route>
            <Route path="/containment" component={Containment}></Route>
            <Route
              path="/investigation-analysis"
              component={InvestigationAnalysis}
            ></Route>
            <Route
              path="/remediation-analysis"
              component={RemediationRecovery}
            ></Route>
            <Route path="/post-analysis" component={PostAnalysis}></Route>
            <Route path="/chain-of-custody" component={ChainOfCustody}></Route>
            <Route path="/follow-up" component={FollowUp}></Route>
            <Route path="/incident-summary" component={IncidentSummary}></Route>
          </Switch>
        </div>
        <button type="button" class="bot btn btn-primary">
          Load Incident/ <br />
          Whitepaper
        </button>
        <button type="button" class="bot btn btn-primary">
          New Incident
        </button>
        <button type="button" class=" bot btn btn-primary">
          New Whitepaper
        </button>
        <button type="button" class="bot btn btn-primary">
          Cancel
        </button>
        <button type="button" class="bot btn btn-primary">
          Approval
        </button>
        <button type="button" class="bot btn btn-primary">
          Roadmap
        </button>
        <button type="button" class="bot btn btn-primary">
          Firewall <br /> Monitoring
        </button>
        <button type="button" class="bot btn btn-primary">
          Check-in
        </button>
        <button type="button" class="bot btn btn-danger">
          Exit
        </button>
      </div>
    );
  }
}
export default MidTab;
