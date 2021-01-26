import React from 'react';
import '.SearchBar.css'


export const SearchBar = ({placeholder, handleChange}) => (
    <input
    className= 'search'
    type= 'search'
    placeholder= {placeholder}
    onChange= {handleChange}/>
)

