import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Organization from "./pages/Organization";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer"
// import ResultsPage from "./pages/ResultsPage";
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"


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
            <Route exact path="/a" component={Organization} />
            <Route exact path="/signUp" component={SignUp} />
            <Route exact path="/SignIn" component={SignIn} />
            <Route component={NoMatch} />
          </Switch>
          <Footer />
      </div>
    </Router>
  );
}

export default App;