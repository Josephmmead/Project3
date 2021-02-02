import React, { useState, useEffect,  } from 'react';
import { Container, Row, Col} from "../components/Grid/Grid";
import API from "../utils/API";
import { useParams } from "react-router-dom";
import './css/Organization.css'





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
                <Row fluid>  
                    <Col  size="md-12" >                       
                            {Charity.map(data => (
                                <div key={data._id}>  
                                
                                        <Col size="md-auto">
                                            <div >
                                                <img  className="img-fluid " src={data.thumbnail} alt=""></img> 
                                            </div>
                                        </Col>
                                        <Col size="md-auto">
                                            <h3 id="charityName">{data.name} </h3>
                                            <h5>{data.mainCause}</h5>                                                                     
                                            <p id="charityMission"> {data.mission}</p>
                                        </Col>
                                        <Col size= "md-auto">
                                            <p> {data.address}</p>
                                            <p> {data.city}, {data.state}</p>
                                            <p> {data.phone}</p>
                                            <p> {data.contactEmail}</p>
                                            <p> EIN#: {data.EIN}</p>
                                            <a href={data.href}> {data.href}</a>
                                        <Col size= "md-auto">
                                            <p>{data.donationMethod}</p>
                                        </Col>
                                        <Col size="md-auto">
                                            <ul>
                                            {data.acceptedItems.map(data => (
                                                <li>{data}</li>
                                            ))}
                                            </ul>
                                        </Col>
                                        </Col>
                                </div>
                            ))}
                        
                        </Col>                   
                </Row>
                
            </Container>
        </div>                
        )
    }

export default Organization; 