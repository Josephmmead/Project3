import React, { useState, useEffect,  } from 'react';
import { Container, Row, Col} from "../components/Grid/Grid";
import API from "../utils/API";
import { useParams } from "react-router-dom";
import './css/OrgProfile.css';
import { Card } from 'react-bootstrap'


  function Organization()  {

    const [Charity, setCharity] = useState([]);
    const [UpdatedCharity, setUpdatedCharity] = useState([{
    name: "",
    thumbnail: "",
    href: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
    EIN: "",
    mainCause:"",
    causes: [""],
    mission: "",
    contactEmail: "",
    acceptedItems: [""],
    donationMethod: ""
    }])
   
    
    
    const { id } = useParams()

    useEffect(() => {
        API.getCharityById(id)
            .then(res => setCharity(res.data))
            .catch(err => console.log(err))
            
           
    }, []);

    const handleInputChange = event => {
        // Destructure the name and value properties off of event.target
        // Update the appropriate state
        const value = event.target.value
        setUpdatedCharity({
            ...UpdatedCharity,
            [event.target.name]: value
        });
        console.log(UpdatedCharity)

      };
    

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
                                        <Card.Body>
                                            <Card.Text>
                                                <h5>Logo URL:</h5>
                                                <input
                                                    onChange={handleInputChange}
                                                    value={UpdatedCharity.thumbnail}
                                                    name="thumbnail"
                                                    type="text"
                                                    placeholder={data.thumbnail}
                                               />
                                                <h5>Street Address:</h5>
                                                <input
                                                    onChange={handleInputChange}
                                                    value={UpdatedCharity.address}
                                                    name="address"
                                                    type="text"
                                                    placeholder={data.address}
                                               />
                                                <h5>City:</h5>
                                                <input
                                                    onChange={handleInputChange}
                                                    value={UpdatedCharity.city}
                                                    name="city"
                                                    type="text"
                                                    placeholder={data.city}
                                               />
                                               <h5>State:</h5>
                                                <input
                                                    onChange={handleInputChange}
                                                    value={UpdatedCharity.state}
                                                    name="state"
                                                    type="text"
                                                    placeholder={data.state}
                                               />
                                                <h5>Phone#:</h5>
                                                <input
                                                    onChange={handleInputChange}
                                                    value={UpdatedCharity.phone}
                                                    name="phone"
                                                    type="text"
                                                    placeholder={data.phone}
                                               />
                                                <h5>Contact Email:</h5>
                                                <input
                                                    onChange={handleInputChange}
                                                    value={UpdatedCharity.contactEmail}
                                                    name="email"
                                                    type="text"
                                                    placeholder={data.contactEmail}
                                               />
                                                <h5>EIN#:</h5>
                                                <input
                                                    onChange={handleInputChange}
                                                    value={UpdatedCharity.EIN}
                                                    name="EIN"
                                                    type="text"
                                                    placeholder={data.EIN}
                                               />
                                               <h5>Website:</h5>
                                               <input
                                                    onChange={handleInputChange}
                                                    value={UpdatedCharity.href}
                                                    name="href"
                                                    type="text"
                                                    placeholder={data.href}
                                               />
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>    
                                <Col size="md-1"></Col>
                                <Col size="md-6">
                                    <h4>Charity Name:</h4>
                                                 <input
                                                    onChange={handleInputChange}
                                                    value={UpdatedCharity.name}
                                                    name="name"
                                                    type="text"
                                                    placeholder={data.name}
                                               />
                                    <hr></hr>
                                    <h4>KeyWords for Cause or Community Served:</h4>
                                            <form>
                                                 <textarea
                                                    type="text"
                                                    cols={75}
                                                    rows={4}
                                                    onChange={handleInputChange}
                                                    value={UpdatedCharity.mainCause}
                                                    name="maincause"
                                                    placeholder={data.mainCause}
                                               />
                                            </form>
                                    <h4>Mission Statement:</h4>   
                                        <form>                                                            
                                                 <textarea
                                                    type="text"
                                                    cols={75}
                                                    rows={4}
                                                    onChange={handleInputChange}
                                                    value={UpdatedCharity.mission}
                                                    name="mission"                                                    
                                                    placeholder={data.mission}
                                               />
                                        </form>  
                                    <h4>How to Donate:</h4>
                                        <form>
                                                <textarea
                                                    type="text"
                                                    cols={75}
                                                    rows={4}
                                                    onChange={handleInputChange}
                                                    value={UpdatedCharity.donationMethod}
                                                    name="donationmethod"
                                                    placeholder={data.donationMethod}
                                               />
                                        </form>      
                                    <h4>Currently Accepting the Following:</h4>
                                    <hr></hr>                                                                                                            
                                            <form >
                                                <label>Please include commas between each item</label>
                                                    <textarea
                                                        type="text"
                                                        cols={75}
                                                        rows={5}
                                                        onChange={handleInputChange}
                                                        value={UpdatedCharity.acceptedItems}
                                                        name="acceptedItems"
                                                        placeholder={data.acceptedItems}>
                                                    </textarea>
                                            </form>                                                           
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