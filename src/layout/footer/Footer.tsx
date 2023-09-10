import React from 'react';
import styled from "styled-components";
import instagram from '../../assets/images/instagram.svg'
import telegram from '../../assets/images/telegram.svg'
import linkedin from '../../assets/images/linkedin.svg'
import {Container} from "../../components/Container";
import {Theme} from "../../styles/Theme";


export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FooterWrapper>
                    <SocialWrapper>
                        <SocialList>
                            <li><a href="#"><img src={instagram} width={"40"} height={"40"} alt="icon instagram"/></a>
                            </li>
                            <li><a href="#"><img src={telegram} width={"40"} height={"40"} alt="icon telegram"/></a>
                            </li>
                            <li><a href="#"><img src={linkedin} width={"40"} height={"40"} alt="icon linkedin"/></a>
                            </li>
                        </SocialList>
                        <Copyright>©2023 Designed and built by <Span>Limaiko A.A </Span></Copyright>
                    </SocialWrapper>
                </FooterWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
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