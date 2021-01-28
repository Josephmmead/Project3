import React, { useState, useEffect } from 'react';
import { Col, Row, Container} from "../components/Grid/Grid"
import { List, ListItem } from "../components/List/List"
import API from '../utils/API'
import './css/ResultsPage.css';




  function ResultsPage () {

    const [charities, setCharities] = useState([])

    useEffect(() => {
       const loadCharities = () => {
        API.getCharities()
        .then(res =>setCharities(res.data))
        .catch(err => console.log(err));
       };

       loadCharities();
       console.log(charities)
    },[])

   
        return(
            <Container fluid>
              <Row>
                <Col size="md-2 sm-0" />
                <Col size="md-10 sm-12">
                {charities.length ? (
                        <List>
                            {charities.map(data => (
                                <ListItem key={data.id}>  
                                    <Row>
                                        <Col size="md-2">
                                            <div id="imageAlign">
                                                <img  className="img-fluid " src={data.thumbnail} alt="No Image Found"></img> 
                                            </div>
                                        </Col>
                                        <Col size="md-8">
                                            <h3 id="charityName">{data.name} </h3>
                                            <h5>{data.mainCause}</h5>                                                                     
                                            <p id="charityMission"> {data.mission}</p>
                                        </Col>
                                        <Col size= "md-2">
                                            <p> {data.address}</p>
                                            <p> {data.city}, {data.state}</p>
                                            <p> {data.phone}</p>
                                        </Col>
                                    </Row> 
                                </ListItem>
                            ))}
                        </List>
                    ) : (
                        <h3>No Results to Display</h3>
                    )}
                </Col>
             </Row> 
            </Container>
  
        )
    }

export default ResultsPage; 