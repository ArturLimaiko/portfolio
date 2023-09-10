import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import {Theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

export const ContactsInfo = () => {
    return (
        <ContactInfo>
            <Img/>
            <ul>
                <li>
                    <ContactLink>
                        <Icon iconId={"phone"} viewBox={"0 0 41.167 41.167"} fill={"#000"} width={"80"} height={"80"}/>
                        <Description>
                            <h4>phone</h4>
                            <p>+1 000 992 2222</p>
                        </Description>
                    </ContactLink>
                </li>
                <li>
                    <ContactLink>
                        <Icon iconId={"mail"} viewBox={"0 0 512 512"} fill={"#000"} width={"80"} height={"80"}/>
                        <Description>
                            <h4>mail</h4>
                            <p>+1 000 992 2222</p>
                        </Description>
                    </ContactLink>
                </li>
                <li>
                    <ContactLink>
                        <Icon iconId={"location"} viewBox={"0 0 64 64"} fill="#000" width={"80"} height={"80"}/>
                        <Description>
                            <h4>location</h4>
                            <p>New-York Sity</p>
                        </Description>
                    </ContactLink>
                </li>
            </ul>
        </ContactInfo>
    );
};


const Img = styled.img`
  width: 350px;
  height: 300px;

  @media ${Theme.media.mobile} {
    width: 330px;
  }
`

const ContactInfo = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media ${Theme.media.tablet} {
    align-items: center;
  }


  p {
    line-height: 26px;
    ${font({family: '"Poppins", "sans-serif"', weight: 700, Fmax: 20, Fmin: 14})}
  }

  h4 {
    text-transform: uppercase;
    letter-spacing: 2px;
    color: ${Theme.colors.fontDark} ${font({family: '"Poppins", "sans-serif"', weight: 400, Fmax: 18, Fmin: 14})}
  }
`

const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: center;
`

const ContactLink = styled.a`
  color: #cccccc;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  position: relative;



  &:hover {
    color: #00c0fd;

    &:hover svg {
      fill: #00c0fd;
      filter: drop-shadow(0 0px 12px #00c0fd);
    }
  }

  svg {
    margin-right: 30px;
    filter: drop-shadow(0 0px 12px #363636);
    
    @media ${Theme.media.tablet} {
      width: 60px;
      height:60px;
    }
    
    @media ${Theme.media.mobile} {
      width: 40px;
      height:40px;
    }
  }
`
