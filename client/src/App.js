import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Organization from "./pages/Organization";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer"
// import ResultsPage from "./pages/ResultsPage";
import Signup from "./pages/Signup"
import OrgProfile from "./pages/OrgProfile"



function App() {

    
  return (
    <Router>
      <div className="wrapper">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route exact path={["/api/charity/:acceptedItem", 
                                "/api/charity/:causes",
                                "/api/charity/",
                                "/api/charity/:name",
                                "/api/charity/:zipcode",
                                "/api/charity/:city", */
                                /* "/api/charity/:q"]} component={Home} /> */}
            <Route exact path={["/api/charity/id/:id", "/api/charity/:id"]} component={Organization} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/Profile/:id" component={OrgProfile} />
            <Route component={NoMatch} />
          </Switch>
          <Footer />
      </div>
    </Router>
  );
}

export default App;