import React from 'react';
import { Navbar, Button } from 'react-bootstrap';
import './NavBar.css'


function Nav() {

  return(
    // 
    
    <Navbar className="navbar   main-navigation justify-content-between ">
      <Navbar.Brand className="logo" href="/">Giving</Navbar.Brand>
      <Button className="login-btn" variant="outline-primary" href="SignIn" size="sm">Log In</Button>
    </Navbar>
    
  );
}

export default Nav;