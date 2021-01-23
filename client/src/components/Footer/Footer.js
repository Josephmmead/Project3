import React from 'react';
import './Footer.css'




function Footer(){
    return(
        <footer className="footer">
        <div className="container ">
            <span className="text-muted">
                <div className="row">
                    <div className="col-md-12" className="text-center">
                        <div className="row">
                            <div className="col-md-12 ">
                                <h5>Connect With Us On:</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <a href="https://www.facebook.com/joseph.m.mead" target="_blank"
                                    className="fa fa-facebook"></a>
                                <a href="https://www.instagram.com/josephmmead/?hl=en" target="_blank"
                                    className="fa fa-instagram"></a>
                            </div>
                        </div>
                        <div id="createdBy">
                            <div className="col-md-12 ">Copyright © 2020 Charities-R-us All Rights Reserved</div>
                        </div>
                    </div> 
                </div>
            </span>
        </div>
    </footer>
    )
}

export default Footer;

