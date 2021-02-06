import React from 'react';
import './Footer.css'
import { Container, Row, Col } from '../Grid/Grid';




function Footer(){
    return(
        <footer className="footer">
        <Container>
            <span className="text-muted">
                <Row>          
                    <Col size="md-12" >
                        <h5>G I V I N G</h5>
                        <div id="createdBy">
                            Copyright © 2020 GIVING All Rights Reserved
                        </div>
                    </Col>       
                </Row>
            </span>
        </Container>
    </footer>
    )
}

export default Footer;

