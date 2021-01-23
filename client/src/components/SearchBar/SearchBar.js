import React from 'react';
import './SearchBar.css'

    function SearchBar ({placeholder, handleChange}) {
        return(
            <input
                className= 'search'
                type= 'search'
                placeholder= "Search"
                // onChange= {handleChange}
                />
        )
    } 
    
export default SearchBar;