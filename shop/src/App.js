import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import data from './data.js';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';
import Detail from './routes/Detail.js';
import axios from 'axios';



function App() {

  let [shoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">


      
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">내맘대로</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail') }}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        
            <Link to = "/">홈</Link>
            <Link to = "/detail">상세페이지</Link>

      <Routes>
        <Route path = "/" element = {<div className='main-bg'style={{backgroundColor : "gray" }}></div>
        }></Route>
        <Route path = "/detail/:id" element = {<Detail shoes = {shoes}/>} ></Route>


        <Route path = "/about/member" element = {<About/>}></Route>
        <Route path = "/about/location" element = {<About/>}></Route>
      </Routes>

      <Routes>
        <Route path = "/event" element = {<EventPage/>}>
          <Route path = "one" element = {<p>첫 주문 시 양배추즙 서비스</p>}></Route>
          <Route path = "two" element = {<p>생일기념 쿠폰받기</p>}></Route>
        </Route>
      </Routes>
      
    <button onClick={() => {
      axios.get('https://codingapple1.github.io/shop/data2.json')
      .then((결과) => {
        console.log(결과.data)
      })
      .catch(() => {
        console.log("실패함")
      })
    }}>버튼</button>

    
    </div>

    
  );
}

  function About() {
    return(
      <div>
        <h4>회사정보임</h4>
      </div>
    )
  }

  function EventPage() {
    return(
      <div>
        <h4>오늘의 이벤트</h4>
        <Outlet></Outlet>
      </div>
    )
  }

       

function Card(props){
  return(
    <Col className=''>
        <img src = {'https://codingapple1.github.io/shop/shoes'+ props.i + '.jpg'} width= "80%"/>
        <h4>{[props.shoes.title]}</h4>
        <p>{[props.shoes.price]}</p>
        </Col>

  );
}



export default App;
