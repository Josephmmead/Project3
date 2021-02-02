import React from 'react';
import './SearchBar.css';
import { Form, FormControl } from 'react-bootstrap';




function SearchBar(props) {

  

    return(
        <Form inline>
          <FormControl className="mr-sm-2"
           type="text" 
           placeholder="Search"
           {...props}/>          
        </Form>
    )
    
};

export default SearchBar;
