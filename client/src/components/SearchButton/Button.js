import React from 'react'
import { Button } from 'react-bootstrap'


function SearchButton (props) {

    return(
        
        <Button className="btn" 
            type="button"
            value="Submit"
            {...props}>Search
            
        </Button>
        
    )
}

export default SearchButton;