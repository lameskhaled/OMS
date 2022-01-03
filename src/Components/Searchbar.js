
import { Component } from "react";
import styled from "styled-components";


import {ReactComponent as Searchimg} from "/Users/lameskhaled/OMS/oms/src/Images/Group.svg";
const Searchbar = () => {
    return (

       <StyleSearchbar>
          
          <Searchimg/>
        <input placeholder=" "/>
       </StyleSearchbar>
      );
}
const StyleSearchbar = styled.div`
display: flex;
 
 justify-content: flex-start;
 margin-left: 6.180555556vw;
 align-items: flex-start;
input {

font-family: Effra;
font-size: 0.972222222vw;
width: 32.84722222vw;
height: 3.125vw;
background: #FFFFFF;

border-radius: 6.944444444vw;
}
svg {
    display: flex;
    
  
 


}
}


`
 
export default Searchbar;