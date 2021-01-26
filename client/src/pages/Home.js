import React, { useState, useEffect } from 'react';
import { Col, Row, Container} from "../components/Grid/Grid"
import { List, ListItem } from "../components/List/List"
import Jumbotron from '../components/Jumbotron/Jumbotron'
import API from '../utils/API'



 function Home() {

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
            <>
             <Jumbotron />
             <Container fluid>
            <Row>
                <Col size="md-12 sm-12">
                    {charities.length ? (
                        <List>
                            {charities.map(data => (
                                <ListItem key={data.id}>
                                    <strong>
                                            {data.name} 
                                    </strong>
                                    <p> {data.phone}</p>
                                    <p> {data.mission}</p>
                                </ListItem>
                            ))}
                        </List>
                    ) : (
                        <h3>No Results to Display</h3>
                    )}
                </Col>
            </Row>
            </Container>
            </>
            
                
        )
    }

export default Home; 