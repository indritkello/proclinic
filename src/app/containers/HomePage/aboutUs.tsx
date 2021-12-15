import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../../components/responsive";

import ToolImg from "../../../assets/images/tool.png";

const AboutUsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    items-center
    justify-center
    pt-4
    pb-4
    pr-7
    pl-7
    md:pl-0
    md:pr-0
    bg-white
  `};
`;

const ImageContainer = styled.div`
  width: auto;
  height: 15em;
  margin-left: -50px;

  img {
    width: auto;
    height: 100%;
  }

  @media (min-width: ${SCREENS.md}) {
    height: 28em;
  }

  @media (min-width: ${SCREENS.lg}) {
    height: 30em;
  }

  @media (min-width: ${SCREENS["2xl"]}) {
    height: 35em;
    margin-left: 0;
  }
`;

const InfoContainer = styled.div`
  ${tw`
    md:w-1/2
    flex
    flex-col
    md:ml-6
    2xl:ml-16
  `};
`;

const Title = styled.h1`
  ${tw`
    text-black
    text-2xl
    md:text-5xl
    font-extrabold
    md:font-black
    md:leading-normal
  `};
`;

const InfoText = styled.p`
  ${tw`
    md:max-w-2xl
    text-sm
    md:text-base
    text-gray-500
    font-normal
    mt-4
  `};
`;

export function AboutUs() {
  return (
    <AboutUsContainer id="about">
      <ImageContainer>
        <img src={ToolImg} alt="Assistance HealthTech" />
      </ImageContainer>
      <InfoContainer>
        <Title>Experienced in HealthTech </Title>
        <InfoText>
          The idea for ProClinic started back in 2020. From a research we made it turned out that many clinics in Tirana 
          were still using Excel or even hard printed copy to store medical records. 
          The calendar solutions were not that easy to use, especially for many employees.

          So we built the perfect assistant for you and your clinic. 
          Based on our experience in healthcare systems abroad we give you a set of useful tools to manage your clinic.
          Please contact us for further information.
        </InfoText>
      </InfoContainer>
    </AboutUsContainer>
  );
}
