import React from 'react';
import SearchBar from '../SearchBar/SearchBar.js';


function Jumbotron() {
    return(
        <div
      style={{ height: 560, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron">
       <h1>Charities-R-Us</h1> 
       <h6>Search for a Charity</h6>
       <SearchBar />
    </div>
    )
}

export default Jumbotron;