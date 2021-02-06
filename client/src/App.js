import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Organization from "./pages/Organization";
import SignIn from "./pages/SignIn";
import OrgProfile from "./pages/OrgProfile"
import NoMatch from "./pages/NoMatch";
import Nav from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer"
import Signup from "./pages/Signup"




function App() {

    
  return (
    <Router>
      <div className="wrapper">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path={["/api/charity/id/:id", "/api/charity/:id"]} component={Organization} />
            <Route exact path={["/SignIn", "/api/charity/SignIn", "/profile/SignIn"]} component={SignIn} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/profile/:id" component={OrgProfile} />
            <Route component={NoMatch} />
          </Switch>
          <Footer />
      </div>
    </Router>
  );
}

export default App;