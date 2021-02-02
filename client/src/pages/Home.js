import React, { useState } from 'react';
import { Col, Row, Container} from "../components/Grid/Grid"
import SearchBar from "../components/SearchBar/SearchBar"
import SearchButton from "../components/SearchButton/Button"
import { List, ListItem } from "../components/List/List"
import API from '../utils/API';
import './css/HomePage.css';


 function Home() {

    const [Charities, setCharities] = useState({})
    const [formObject, setFormObject] = useState("")

    const handleInputChange = event => {
        // Destructure the name and value properties off of event.target
        // Update the appropriate state
        const { value } = event.target;
        setFormObject(value);
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
                        <Col size="md-4 sm-12 align-self-center" >
                             <div className="headerText">
                             <h1 id="title">GIVING</h1> 
                             <h6 className="text-muted">Find a place to GIVE</h6>
                         <Row>
                            <Col size="md-7" id="search">
                             <SearchBar                                
                                 onChange={handleInputChange}
                                 value={formObject}
                                 name="Search"
                             />
                            </Col>
                            <Col size="md-2">
                                <SearchButton 
                                 onClick={handleFormSubmit}
                                 />
                             </Col>
                         </Row>
                         </div>
                        </Col>
                        <Col size="md-1 sm-0" />
                        <Col  size="md-7 sm-12 align-self-center">
                         <img className="jumbotronImage" src="https://blush.design/api/download?shareUri=DxHCwHij_&s=0.1%7E57331f-0.2%7Eeac7a8&f=7ec0ff%7E0%7E%7E0.37&w=800&h=800&fm=png" alt="Two women talking" />
                        </Col>
                    </Row>
                </Container>
             </div>
             
             <Row>
                
                <Col size="md-12 sm-12">
                    
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
                                 <Container fluid >
                 
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
                                                    <p>About us stuff...
                                                         ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                                                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                                                     </p>
                        
                                        </Container>
                                    </Col>  
                                    </Row>
                                </Container>
                            </div>
                    <div id="section3">
                         <Container fluid>
                            <Row>
                                <Col size="md-12">
                                    <h4 id="section3-Title">Chairities and Communitees Join Forces</h4>
                        
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



                    