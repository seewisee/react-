/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['역삼 라멘 맛집', '파이썬 독학', '강남 우동 맛집']);
  let [좋아요, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] =useState('');

  [1, 2, 3].map(function(a){
    return '123321'
  })
  



  return (
    <div className="App">
      <div className='black-nav'>
        <h4>ReactBlog</h4>
      </div>

      <button onClick={() => {
        let copy = [...글제목];
        copy.sort();
        글제목변경(copy);

      }}>가나다순정렬</button>



      <button onClick={() => {
        let copy = [...글제목];
        copy[0] = '여자코트 추천';
        글제목변경(copy);
      }}>
      글수정</button>

      {/* <div className='list'>
      <h4>{글제목[0]} <span onClick={() => {따봉변경(좋아요+1)}}>좋아요</span>{좋아요}</h4>
      <p>2월 17일 발행</p> 
      </div> 
      <div className='list'>
      <h4>{글제목[1]}</h4>
      <p>2월 17일 발행</p> 
      </div>    
      <div className='list'>
      <h4 onClick={() => {setModal(!modal)}}>{글제목[2]}</h4>
      <p>2월 17일 발행</p> 
      </div> */}

      {
        글제목.map(function(a, i){

          return(
            <div className='list' key = {i}>
            <h4 onClick={() => {setModal(true); setTitle(i)}}>
              {글제목[i]} 
            <span onClick={() => {
              
              let copy = [...좋아요];
              copy[i] = copy[i] + 1;
              따봉변경(copy)

              }}>좋아요</span>{좋아요[i]}
            
              
            </h4>
            <p>2월 17일 발행</p> 
            <button onClick={() => {
              let copy = [...글제목];
              copy.splice(i, 1);
              글제목변경(copy)
            }}>삭제</button>
            </div>    

            
          )
        })
      }

      <input onChange={(e) => {
        입력값변경(e.target.value)
        console.log(입력값)
      }}></input>
      <button onClick={() => {
      let copy = [...글제목];
      copy.unshift(입력값);
      글제목변경(copy)
      }}>글발행</button>


     

      {
        modal == true ? <Modal title = {title} 글제목변경 = {글제목변경} 글제목 = {글제목}/>: null
      }

    

    </div>
  );
}



function Modal(props){

  
    return(
      <div className='modal'>
        
          <h4>{props.글제목[props.title]}</h4>
          <p>날짜</p>
          <p>상세내용</p>
          <button onClick={() => {
            let copy = [...props.글제목];
            copy[0] = '여자 코트 추천';
            props.글제목변경(copy);
            }}>글수정</button>
      </div>
    )




}



export default App;
  
