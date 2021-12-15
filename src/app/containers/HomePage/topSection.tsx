import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import LaptopScreenImg from "../../../assets/images/laptop-screen-large.png";
import BlobImg from "../../../assets/images/blob.svg";
import { SCREENS } from "../../components/responsive";
import { Button } from "../../components/button";

const TopSectionContainer = styled.div`
  min-height: 400px;
  margin-top: 6em;
  ${tw`
    w-full
    max-w-screen-2xl
    flex
    justify-between
    pl-3
    pr-3
    lg:pl-12
    lg:pr-12
  `};
`;

const LeftContainer = styled.div`
  ${tw`
    w-1/2
    flex
    flex-col
  `};
`;

const RightContainer = styled.div`
  ${tw`
    w-1/2
    flex
    flex-col
    relative
    mt-20
  `};
`;

const Slogan = styled.h1`
  ${tw`
    font-bold
    text-2xl
    xl:text-6xl
    sm:text-3xl
    md:text-5xl
    lg:font-black
    md:font-extrabold
    text-black
    mb-4
    sm:leading-snug
    lg:leading-normal
    xl:leading-relaxed
  `};
`;

const Description = styled.p`
  ${tw`
    text-xs
    lg:text-sm
    xl:text-lg
    sm:max-h-full
    overflow-hidden
    max-h-12
    text-gray-800
  `};
`;

const BlobContainer = styled.div`
  width: 20em;
  height: 10em;
  position: absolute;
  right: -5em;
  top: -9em;
  z-index: -1;
  transform: rotate(-30deg);
  animation: leftside alternate linear 10s infinite;

  img {
    width: 100%;
    height: auto;
    max-height: max-content;
  }

  @keyframes leftside {
  from{transform:rotate(-45deg);}
  to{transform:rotate(-15deg);}
  }

  @media (min-width: ${SCREENS.sm}) {
    width: 40em;
    max-height: 10em;
    right: -9em;
    top: -16em;
    transform: rotate(-25deg);
  }

  @media (min-width: ${SCREENS.lg}) {
    width: 50em;
    max-height: 30em;
    right: -7em;
    top: -15em;
    transform: rotate(-30deg);
  }

  @media (min-width: ${SCREENS.xl}) {
    width: 70em;
    max-height: 30em;
    right: -15em;
    top: -25em;
    transform: rotate(-20deg);
  }
`;

const StandaloneProduct = styled.div`
  width: auto;
  height: 10em;
  right: -6em;
  top: -5em;
  position: absolute;

  img {
    width: auto;
    height: 100%;
    max-width: fit-content;
  }

  @media (min-width: ${SCREENS.sm}) {
    height: 16em;
    right: -6em;
    top: -6em;
  }

  @media (min-width: ${SCREENS.lg}) {
    height: 21em;
    right: -8em;
    top: -5em;
  }

  @media (min-width: ${SCREENS.xl}) {
    height: 30em;
    right: -13em;
    top: -9em;
  }
`;

const ButtonsContainer = styled.div`
  ${tw`
    flex
    flex-wrap
    mt-4
  `};
`;

export function TopSection() {
  const openNewWindow = (url : string):void=> {
    window.location.href=url;
  };
  return (
    <TopSectionContainer id="product">
      <LeftContainer>
        <Slogan>Get The Best System For Your Clinic </Slogan>
        <Description>
         100% web-based and complete medical record system - and much more that you and your clinic need. Everything gathered in one place.
        </Description>
        <ButtonsContainer>
            <Button text="Sign in" onClick={(event)=>{
              event.preventDefault();
              openNewWindow("https://proclinic.azurewebsites.net/")
            }}/>
            <Button theme="filled" text="Try out"  onClick={(event)=>{
              event.preventDefault();
              openNewWindow("https://proclinic.azurewebsites.net/Demo/DemoLogin?email=indrit_kello@hotmail.com&encryptedPassword=cmG%2FqVWJUe4krG9aniKR8Q%3D%3D")
            }}/>
        </ButtonsContainer>
      </LeftContainer>
      <RightContainer>
        <BlobContainer>
          <img src={BlobImg} alt="Animation" />
        </BlobContainer>
        <StandaloneProduct>
          <img src={LaptopScreenImg} alt="Product in devices" />
        </StandaloneProduct>
      </RightContainer>
    </TopSectionContainer>
  );
}
