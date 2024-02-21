import { useEffect, useState } from "react";
import styled from 'styled-components';


// css 없이도 꾸밀 수 있는 styled components
let YellowBtn = styled.button`
background : ${props => props.bg};
color : black;
padding : 10px;
`

function Detail(props) {
  let [a, aa] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      aa(false)
    }, 2000);
  }, [])

  /*
  useEffect(() => { })      - 재렌더링마다 코드 실행하고 싶으면

  useEffect(() => { }, [] ) - mount시 1회 코드 실행하고 싶으면

  useEffect(() => {         - unmount시 1회 코드 실행하고 싶으면
    return() => {

    }
  }, [])
  
  
  */


  return(
  <div className="container">
    
    {
      a == true ? <div><YellowBtn bg="blue">버튼</YellowBtn></div> : null

    }
    <div className="row">
      <div className="col-md-6">
        <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
      </div>
      <div className="col-md-6">
        <h4 className="pt-5">{props.shoes[0].title}</h4>
        <p>{props.shoes[0].content}</p>
        <p>{props.shoes[0].price}</p>
        <button className="btn btn-danger">주문하기</button>
      </div>
    </div>
  </div>

  )
}

export default Detail;