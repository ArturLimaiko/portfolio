import React from 'react';
import styled from 'styled-components';
import photo from '../../../assets/images/photo.webp'
import {FlexWrapper} from '../../../components/FlexWrapper'

export const Main = () => {
    return (
        <StyledMain>

            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <Welcome>Hello</Welcome>
                    <Name>My name is Artur Limaiko</Name>
                    <MainTitle>A am web developer</MainTitle>
                </div>

                <Photo src={photo}/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.div`
  min-height: 100vh;
  background-color: #191919;
`

const Photo = styled.img`
  width: 350px;
  height: 350px;
  object-fit: cover;
`

const MainTitle = styled.h1`
  color: #D9D9D9;
  text-shadow: 6px 0 5px #ffffff;
`

const Name = styled.h2 `
  background: linear-gradient(270deg, rgba(231,15,170,1) 15%, rgba(0,192,253,1) 35%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 30px;
`

const Welcome = styled.span `
  color: #D9D9D9;
  font-size: 30px;
  font-weight: bold;
  text-shadow: 6px 0 5px #ffffff;
`