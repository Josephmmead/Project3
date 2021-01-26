import React from 'react';
import './SearchBar.css'


function SearchBar({placeholder, handleChange}) {
    return(
        <input
        className= 'search'
        type= 'search'
        placeholder= {placeholder}
        onChange= {handleChange}/>
    )
    
};

export default SearchBar;
