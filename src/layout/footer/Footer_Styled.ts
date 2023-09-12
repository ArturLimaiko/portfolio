import styled from "styled-components";
import {Theme} from "../../styles/Theme";



const Footer = styled.footer`
`

const FooterWrapper = styled.div `

`

const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 30px 0;
  
  @media ${Theme.media.tablet} {
    flex-direction: column;
    gap: 15px;
    align-items: center;
    margin: 30px 15px;
  }

  @media ${Theme.media.mobile} {
    margin: 40px 15px;
    justify-content: space-between;
    gap: 30px;
  }
`

const SocialList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 50px;

  a:hover {
    filter: drop-shadow(0px 10px 42px #fff);
  }

  li a::before {
    content: none;
  }
`

const Copyright = styled.small`
  font-weight: normal;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: 0;
  color: ${Theme.colors.fontDark};
`

const Span = styled.span`
  background: linear-gradient(270deg, rgba(231, 15, 170, 1) 39%, rgba(0, 192, 253, 1) 70%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const S = {
    Footer,
    FooterWrapper,
    SocialWrapper,
    SocialList,
    Copyright,
    Span,
}