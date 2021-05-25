import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import "./Layout.scss";
import Toolbar from "@material-ui/core/Toolbar";
import TopBar from "../TopBar/TopBar";
import JobList from "../Jobs/JobList";
import JobDetails from "../Jobs/JobDetails";
import GetUpdates from "../Footer/GetUpdates";
import Footer from "../Footer/Footer";

export default function Layout() {
  return (
    <Router>
      <CssBaseline />
      <TopBar />
      <Toolbar />
      <Container id="main-section">
        <Switch>
          <Route path="/job/:id">
            <JobDetails />
          </Route>
          <Route path="/">
            <JobList />
          </Route>
        </Switch>
      </Container>
      <GetUpdates />
      <footer>
        <Footer />
      </footer>
    </Router>
  );
}
