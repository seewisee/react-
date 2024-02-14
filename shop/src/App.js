import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import {a,b} from './data.js';
import data from './data.js';

function App() {

  let [shoes] = useState(data);

  return (
    <div className="App">
      
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">내맘대로</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      <div className='main-bg'style={{backgroundColor : "gray" }}></div>
      
      {
        shoes.map(function(a,i){
          return(
      <Container>
      <Row>
        <Info1 shoes = {shoes}></Info1>
        <Info2 shoes = {shoes}></Info2>
        <Info3 shoes = {shoes}></Info3>
      </Row>
    </Container>

          );
        })

      }

      
    </div>
  );
}

function Info1(props, i){
  return(
    <Col className='' key = {i}>
        <img src = "https://codingapple1.github.io/shop/shoes1.jpg" width= "80%"/>
        <h4>{[props.shoes[0].title]}</h4>
        <p>{[props.shoes[0].price]}</p>
        </Col>

  );
}

function Info2(props){
  return(
    <Col className=''>
        <img src = "https://codingapple1.github.io/shop/shoes2.jpg" width= "80%"/>
        <h4>{[props.shoes[1].title]}</h4>
        <p>{[props.shoes[1].price]}</p>
        </Col>

  );
}

function Info3(props){
  return(
    <Col className=''>
        <img src = "https://codingapple1.github.io/shop/shoes3.jpg" width= "80%"/>
        <h4>{[props.shoes[2].title]}</h4>
        <p>{[props.shoes[2].price]}</p>
        </Col>

  );
}


export default App;
