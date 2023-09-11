import styled from "styled-components";
import {Theme} from "../../../styles/Theme";
import abstract from "../../../assets/images/abstract.png";
import {font} from "../../../styles/Common";

const StyledMain = styled.div`
  background-color: #191919;
  display: flex;
  margin-top: 250px;
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
    
    @media ${Theme.media.tablet} {
      width: 340px;
      height: 340px;
    }
    
    @media ${Theme.media.mobile} {
      width: 310px;
      height: 310px;
      top: -5px;
      right: -5px;
    }
  }

  &::after {
    content: "";
    position: absolute;
    display: inline-block;
    background-image: url(${abstract});
    width: 628px;
    height: 628px;
    bottom: -120px;
    right: -133px;
    z-index: 3;
    @media ${Theme.media.tablet} {
      //bottom: -128px;
      //right: -127px;
      display: none;
    }

    @media ${Theme.media.mobile} {
      display: none;
    }
  }
`

const WelcomeWrapper = styled.div`
  @media ${Theme.media.tablet} {
    text-align: center;
    display: inline-block;
  }
`

const Photo = styled.img`
  width: 340px;
  height: 340px;
  object-fit: cover;
  border-radius: 50%;

  @media ${Theme.media.tablet} {
    width: 320px;
    height: 320px;
  }

  @media ${Theme.media.mobile} {
    width: 300px;
    height: 300px;
  }
`

const MainTitle = styled.h1`
  color: #D9D9D9;
  ${font({family: '"Poppins", "sans-serif"', weight: 700, Fmax: 58, Fmin: 30})}
`

const Name = styled.h2`
  ${font({family: '"Poppins", "sans-serif"', weight: 700, Fmax: 50, Fmin: 36})}
  background: linear-gradient(270deg, rgba(231, 15, 170, 1) 39%, rgba(0, 192, 253, 1) 70%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 10px 0;

  @media ${Theme.media.mobile} {
    margin: 15px 0;
  }
`

const Welcome = styled.span`
  color: #D9D9D9;
  ${font({family: '"Poppins", "sans-serif"', weight: 700, letterSpacing: -1, Fmax: 58, Fmin: 36})}
`

export const S = {
    StyledMain,
    Frame,
    WelcomeWrapper,
    Photo,
    MainTitle,
    Name,
    Welcome
}