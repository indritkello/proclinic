import React from 'react';
import MetaTags from 'react-meta-tags';
import './App.css';
import styled from "styled-components";
import tw from "twin.macro"
import {HomePage} from "./app/containers/HomePage"

const AppContainer = styled.div`
${tw`
w-full 
h-full 
flex 
flex-col 
`}
`;

function App() {
  return (
    <AppContainer>
    <MetaTags>
      <meta name="author" content="Indrit Kello"/>
      <meta id="meta-description" name="description" content="ProClinic, pro clinic, proclinic, medical software, clinic system, healthcare software, healthtech" />
    </MetaTags>
    <HomePage/>
    </AppContainer>
    );
}

export default App;
