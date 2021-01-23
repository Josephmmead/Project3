import React from 'react';

  function charityCard (props) {
     return(
        <div className= 'card-container'>
            <img src= {props.Charity.thumbnail} alt= {props.Charity.causes}/>
            <h2>{props.Charity.name}</h2>
            <p>{props.Charity.href}</p>
            <p>{props.Charity.acceptedItems}</p>
        </div>
    )
  } 

export default charityCard; 