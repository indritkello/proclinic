import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Navbar } from "../../components/navbar"
import { TopSection } from "./topSection";
import { Marginer } from "../../components/marginer";
import { Footer } from "../../components/footer"
import { Features } from './features';
import { AboutUs } from './aboutUs';

const PageContainer = styled.div`
 ${tw`
   flex
   flex-col
   w-full
   h-full 
   items-center 
   overflow-x-hidden  
 `}
`;

export function HomePage(){
    return(
    <PageContainer>
        <Navbar/>
        <TopSection/>
        <Marginer direction="vertical" margin="4em"/>
        <Features/>
        <Marginer direction="vertical" margin="4em"/>
        <AboutUs/>
        <Marginer direction="vertical" margin="4em"/>
        <Footer />
    </PageContainer>
    )
}