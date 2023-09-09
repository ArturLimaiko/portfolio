import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import {Theme} from "../../../styles/Theme";

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
    font-size: 20px;
    line-height: 26px;
    font-weight: bold;
  }

  h4 {
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 18px;
    line-height: 22px;
    font-weight: normal;
    color: ${Theme.colors.fontDark}
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
  }
`
