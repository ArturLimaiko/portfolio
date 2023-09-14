import styled from "styled-components";
import {Theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

const Main = styled.div`
  background-color: #191919;
  display: flex;
  margin-top: 250px;
  position: relative;
`

const MainWrapper = styled.div`
  margin: 120px 15px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap:20px;

  @media ${Theme.media.tablet} {
    justify-content: center;
    grid-template-columns: 1fr;
  }
`

const Frame = styled.div`
  justify-self: center;
  position: relative;
  z-index: 0;

  &::before {
    content: "";
    position: absolute;
    width: 410px;
    height: 410px;
    background: linear-gradient(180deg, rgba(231, 15, 170, 1) 30%, rgba(0, 192, 253, 1) 70%);
    border-radius: 50%;
    top: -10px;
    right: -10px;
    z-index: -1;

    @media ${Theme.media.tablet} {
      width: 370px;
      height: 370px;
    }

    @media ${Theme.media.mobile} {
      width: 310px;
      height: 310px;
      top: -5px;
      right: -5px;
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
  width: 390px;
  height: 390px;
  object-fit: cover;
  border-radius: 50%;

  @media ${Theme.media.tablet} {
    width: 350px;
    height: 350px;
  }

  @media ${Theme.media.mobile} {
    width: 300px;
    height: 300px;
  }
`

const MainTitle = styled.h1`
  color: #D9D9D9;

  ${font({family: '"Poppins", "sans-serif"', weight: 700, Fmax: 47, Fmin: 23})}
  
  p {
    display: none;
  }

  @media ${Theme.media.tablet} {
    font-size: 30px;
    font-weight:600;
  }

  @media ${Theme.media.tablet} {
    font-size: 25px;
  }
`

const Name = styled.h2`
  ${font({family: '"Poppins", "sans-serif"', weight: 700, Fmax: 50, Fmin: 36})}
  background: linear-gradient(270deg, rgba(231, 15, 170, 1) 50%, rgba(0, 192, 253, 1) 85%);
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
    Main,
    MainWrapper,
    Frame,
    WelcomeWrapper,
    Photo,
    MainTitle,
    Name,
    Welcome
}