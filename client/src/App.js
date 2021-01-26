import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Organization from "./pages/Organization";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer"
import ResultsPage from "./pages/ResultsPage";
import Signup from "./pages/Signup"

function App() {
  return (
    <Router>
      <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/api/charity/" component={Home} />
            <Route exact path="/api/charity/:id" component={Organization} />
            <Route exact path={["/api/charity/:acceptedItem", 
                                "/api/charity/:causes",
                                "/api/charity/:name",
                                "/api/charity/:zipcode",
                                "/api/charity/:city"]} component={ResultsPage} />
            <Route exact path="/signup" component={Signup} />
            <Route component={NoMatch} />
          </Switch>
          <Footer />
      </div>
    </Router>
  );
}

export default App;