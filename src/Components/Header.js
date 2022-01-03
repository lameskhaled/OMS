import { Component } from "react";
import styled from "styled-components";
import Searchbar from "/Users/lameskhaled/OMS/oms/src/Components/Searchbar.js"

import {ReactComponent as Logo } from "/Users/lameskhaled/OMS/oms/src/Images/background.svg";
const Header = () => {
    return ( 
        <StyledHeader classname="Header-Component">
            <ul>
                <li> <Logo/></li>
                <li>Shop</li>
                <li>About Us</li>
                <li>Calculator</li>
            </ul>
            <Searchbar/>
        </StyledHeader>
     );
}

const StyledHeader = styled.div`


background:#1261DE;
width: 100%;
height :6.597222222vw;
font-style: Effra;
weight: normal;
display: flex;
 align-items:center;
 
justify-content: flex-start;
svg{
    width: 11.04166667vw;
}
ul{
    color:#FFFFFF;
   
    display: flex;
    align-items:center;
  justify-content: flex-start;
}
li{
  
list-style-type:none;
font-family: Effra ;
font-style: normal;
font-weight: normal;
font-size: 1.111111111vw;

text-transform: capitalize;
margin: 0vw 0.7vw;
}

`
 
export default Header;