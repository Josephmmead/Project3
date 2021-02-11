import React, { useEffect, useState } from 'react';
import { Col, Row, Container} from "../components/Grid/Grid"
import SearchBar from "../components/SearchBar/SearchBar"
import SearchButton from "../components/SearchButton/Button"

import { List, ListItem } from "../components/List/List"
import API from '../utils/API';
import './css/HomePage.css';


 function Home() {

    const [Charities, setCharities] = useState({})
    const [formObject, setFormObject] = useState("")
    const [randomCharity, setRandomCharity] = useState([])

    const loadRandomCharity = () =>{
        API.getRandom()
        .then(res => setRandomCharity(res.data))
        .catch(err => console.log(err))

    }

    useEffect(loadRandomCharity, [])

    const handleInputChange = event => {
        // Destructure the name and value properties off of event.target
        // Update the appropriate state
        const { value } = event.target;
        setFormObject(value);
        console.log(randomCharity)
        
      };

    const handleFormSubmit = event => {
        // When the form is submitted, prevent its default behavior, 
        
        event.preventDefault();
        API.getCharitiesBySearch(formObject)
          .then(res => {
              setCharities(res.data)
            })  
          .catch(err => console.log(err))
      };

    
        return(
            <>
                <div id="section1">
                <Container  className="jumbotron">
                    <Row>
                        <Col size="md-1 sm-0"/>
                        <Col size="md-4 sm-12 align-self-center" >
                             <div className="headerText">
                             <h1 id="title">GIVING</h1> 
                             <h6 className="text-muted">Find a place to GIVE</h6>
                         <Row>
                            <Col size="md-auto" id="search">
                             <SearchBar   
                                 id="searchBar"                            
                                 onChange={handleInputChange}
                                 value={formObject}
                                 onKeyDown={event => {
                                    if (event.keyCode === 13) {
                                        event.preventDefault();
                                        document.getElementById("searchBtn").click();

                                    }
                                 }} 
                                 name="Search"
                             />
                            </Col>
                            <Col size="md-auto">
                                <SearchButton 
                                 value="Submit"
                                 id="searchBtn"
                                 onClick={ handleFormSubmit }
                                 />
                             </Col>
                         </Row>
                         <br/>
                         <br/>
                         <br/>
                         </div>
                        </Col>
                         
                        <Col  size="md-7 sm-12 ">
                         <img className="jumbotronImage" src="https://blush.design/api/download?shareUri=DxHCwHij_&s=0.1%7E57331f-0.2%7Eeac7a8&f=7ec0ff%7E0%7E%7E0.37&w=800&h=800&fm=png" alt="Two women talking" />
                        </Col>
                    </Row>
                </Container>
             </div>
             
             <Row id="resultsList">
                
                <Col size="md-12 sm-12" className="results">
                    
                        {Charities.length ? (

                    <Row>
                        <Col size="md-1 sm-0"/>
                        <Col size="md-10 sm-10">
                    
                        <List>
                            {Charities.map(data => (
                                <ListItem key={data._id}>  
                                <a className="charityLink" href={"/api/charity/" + data._id}>
                                    <Row>
                                        <Col size="md-2">
                                            <div id="imageAlign">
                                                <img  className="img-fluid " src={data.thumbnail} alt=""></img> 
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
                                    </a>
                                </ListItem>
                            ))}
                        </List>
                        </Col>
                        <Col size="md-1 sm-0"/>
                    </Row>  
                    ) : (
                       <div>
                        <div id="section2">
                                 <Container fluid>
                 
                                    <Row >
                                        <Col size="md-6 sm-12">
                                         <Container>
                                             <img className="aboutUs" src="https://www.sageworld.com/blog/wp-content/uploads/2019/09/social-responsilbility_2-700x380.jpg" alt=""/>
                                         </Container>
                                        </Col>
                                        <Col size="md-6 sm-12">
                                        <Container >
                        
                                                <h1 id="headerTitle">Why choose Giving?</h1>
                                                    <hr/>
                                                    <p className="aboutText"> Here at Giving, we strive to build connections between local nonprofits and our communities. Giving provides the platform for local charities to shine with customizable profiles, making it easy for users to connect. Building a better world starts in your own neighborhood. Use Giving to find organizations that need your help, and get involved today.   </p>

                                                    <h4>For Donors:</h4>
                                                    <p className="aboutText">Ready to let go of things you don’t need? Giving makes it easy to find local non-profits in need of your donations. Search by item to connect with organizations accepting your items. Search by zip code to find nearby non-profits that serve your community. Or search by cause to find organizations serving the causes and communities you support.</p>

                                                    <h4>For Charitable Organizations:</h4>
                                                    <p className="aboutText">Is your organization accepting material donations? Create a profile on Giving to link the needs of your organization to donors in your community.  Tell us your mission so that donors may give you their support. Effortlessly update your profile to provide donors with the most up-to-date information about the needs of your organization.</p>
                                        </Container>
                                    </Col>  
                                    </Row> 
                                </Container>
                            </div>
                    <div id="section3">
                         <Container >
                            <Row>
                                <Col size="md-12">
                                    <h4 id="section3-Title">Where Charities and Communities Join Forces</h4>
                                    <h5 id="section3-find">Check out one of our handpicked charities:</h5>
                                </Col>
                             </Row>
                             <Row>
                                 <Col size="md-12"> 
                                 {randomCharity.map(info => (
                                 <List id ="random">
                                <ListItem key={info._id}>  
                                <a className="charityLink" href={"/api/charity/" + info._id}>
                                    <Row>
                                        <Col size="md-2">
                                            <div id="imageAlign">
                                                <img  className="img-fluid " src={info.thumbnail} alt=""></img> 
                                            </div>
                                        </Col>
                                        <Col size="md-8">
                                            <h3 id="charityName">{info.name} </h3>
                                            <h5>{info.mainCause}</h5>                                                                     
                                            <p id="charityMission"> {info.mission}</p>
                                        </Col>
                                        <Col size= "md-2">
                                            <p> {info.address}</p>
                                            <p> {info.city}, {info.state}</p>
                                            <p> {info.phone}</p>
                                        </Col>
                                    </Row> 
                                    </a>                                                          
                                </ListItem>
                                </List>
                                 ))}
                                 </Col>
                             </Row>
                         </Container>
                         
                    </div>
                    </div> 
                    
                    )}
                </Col>
             </Row>
            
        </>
            
                
        )
    }

export default Home; 



                    