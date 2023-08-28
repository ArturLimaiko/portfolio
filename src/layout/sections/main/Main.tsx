import React from 'react';
import styled from 'styled-components';
import photo from '../../../assets/images/photo.webp'
import abstract from '../../../assets/images/abstract.png'
import {FlexWrapper} from '../../../components/FlexWrapper'
import {Container} from '../../../components/Container';


export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"}>
                    <div>
                        <Welcome>Hello👋,</Welcome>
                        <Name>My name is <br/>Artur Limaiko</Name>
                        <MainTitle>A web developer</MainTitle>
                    </div>
                    <Frame>
                        <Photo src={photo} alt="photo developer"/>
                    </Frame>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.div`
  min-height: 100vh;
  background-color: #191919;
  display: flex;
`


const Frame = styled.div`
  position: relative;
  z-index: 0;

  &::before {
    content: "";
    position: absolute;
    width: 360px;
    height: 360px;
    background: linear-gradient(180deg, rgba(231, 15, 170, 1) 30%, rgba(0, 192, 253, 1) 70%);
    border-radius: 50%;
    top: -10px;
    right: -10px;
    z-index: -1;
  }

  &::after {
    content: "";
    position: absolute;
    display: inline-block;
    background-image: url(${abstract});
    width: 621px;
    height: 621px;
    bottom: -120px;
    right: -133px;
    z-index: 3;
  }
`

const Photo = styled.img`
  width: 340px;
  height: 340px;
  object-fit: cover;
  border-radius: 50%;
`


const MainTitle = styled.h1`
  color: #D9D9D9;
  font-weight: bold;
  font-family: "Poppins", "sans-serif";
  font-size: 58px;
  line-height: 70px;
  letter-spacing: -1px;
`

const Name = styled.h2`
  background: linear-gradient(270deg, rgba(231, 15, 170, 1) 39%, rgba(0, 192, 253, 1) 70%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
  font-family: "Poppins", "sans-serif";
  font-size: 58px;
  line-height: 70px;
  letter-spacing: -1px;
  margin: 10px 0;
`

const Welcome = styled.span`
  color: #D9D9D9;
  font-weight: bold;
  font-family: "Poppins", "sans-serif";
  font-size: 58px;
  line-height: 70px;
  letter-spacing: -1px;
`