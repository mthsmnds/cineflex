import React from "react";
import styled from "styled-components";
import {createGlobalStyle} from "styled-components";
import NowOn from "./NowOn";
import Sessions from "./Sessions";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  return(
  <BrowserRouter>
  <GlobalStyle/>
      <Header to="/" key="home">
          <Logo src="../public/clapper.png" />
                  <h1>Cineflex</h1>
      </Header>

      <Title>Em Cartaz</Title>
      <Routes>
        <Route path="/" element ={<NowOn/>}/>
        <Route path="/sessoes/:movieId" element ={<Sessions/>}/>
        
      </Routes>
  </BrowserRouter>
  )
}


//--------------------------STYLES------------------------------------

    const GlobalStyle = createGlobalStyle`
      body{
        font-family: "Raleway", sans-serif;
        background-color: #212226;
        color: white;
      }
    `;

    const Header = styled(Link)`
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100vw;
      height: 70px;
      background-color: #EE897F;
      color: black;
      text-decoration: none;
      position: fixed;
      z-index: 1;
      
      h1{
        font-size: 34px;
        font-weight: 600;
        color: #FADBC5;
        margin-left: 10px;
        margin-top: 5px;
      }
    `;

    const Logo = styled.img`
      width: 40px;
    `;

    const Title = styled.div`
    font-family: "Sarala", sans-serif;
      display: flex;
      justify-content: center;
      padding-top: 90px;
      font-size: 24px ;
      font-weight: 500;
    `;

export default App;
