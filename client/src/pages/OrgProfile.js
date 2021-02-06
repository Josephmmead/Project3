import React, { useState, useEffect,  } from 'react';
import { Container, Row, Col} from "../components/Grid/Grid";
import API from "../utils/API";
import { useParams } from "react-router-dom";
import './css/Organization.css';
import { Card, Button } from 'react-bootstrap'


  function Organization()  {

    const [Charity, setCharity] = useState([]);
    const { id } = useParams()

    useEffect(() => {
        API.getCharityById(id)
            .then(res => setCharity(res.data))
            .catch(err => console.log(err))
    }, []);

        return(

        <div className="orgPage">
            <Container fluid>
                <Row className="row">
                    <Col size="md-12 sm-12">
                        {Charity.map(data => (
                        <div key={data._id}>
                            <Row >
                                <Col size="md-1"></Col>
                                <Col size="md-3">
                                    <Card id="charCard">
                                        <Card.Img variant="top" src={data.thumbnail} alt="" />
                                        <Card.Body>
                                            <Card.Text>
                                                <p>Address:</p>
                                                <p>{data.address}</p>
                                                <p>City and State:</p>
                                                <p> {data.city}, {data.state}</p>
                                                <p>Phone#:</p>
                                                <p> {data.phone}</p>
                                                <p>Contact Email:</p>
                                                <p> {data.contactEmail}</p>
                                                <p>EIN#:</p>
                                                <p>{data.EIN}</p>
                                            </Card.Text>
                                            {/* make imput field for website  */}
                                            <Button id="linkBtn" variant="dark" href={data.href}>Visit {data.name}</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>    
                                <Col size="md-1"></Col>
                                <Col size="md-6">
                                    <h1 id="charityName">{data.name} </h1>
                                    <hr></hr>
                                    <h3>{data.mainCause}</h3>                                                                     
                                    <p id="charityMission"> {data.mission}</p>
                                    <h3>How to Donate</h3>
                                    <p>{data.donationMethod}</p>
                                    <h3>Currently Accepting the Following:</h3>
                                    <hr></hr>
                                    <Row >
                                        <ul>
                                            {data.acceptedItems.map(data => (
                                            <li>{data}</li>
                                            ))}
                                        </ul>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    ))}            
                    </Col>
                </Row>
            </Container>
        </div>                
        )
    }
export default Organization;