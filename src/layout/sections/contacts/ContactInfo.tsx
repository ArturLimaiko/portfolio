import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";

export const ContactsInfo = () => {
    return (
        <ContactInfo>
            <Img/>
            <ul>
                <li>
                    <ContactLink>
                        <Icon iconId={"phone"} viewBox={"0 0 41.167 41.167"} fill={"#000"} width={"80"} height={"80"}/>
                        +1 000 992 2222
                    </ContactLink>
                </li>
                <li>
                    <ContactLink>
                        <Icon iconId={"mail"} viewBox={"0 0 512 512"} fill={"#000"} width={"80"} height={"80"}/>
                        info@domainname.com
                    </ContactLink>
                </li>
                <li>
                    <ContactLink> <Icon iconId={"location"} viewBox={"0 0 64 64"} fill="#000" width={"80"} height={"80"}/>
                        New-York Sity
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
`

const ContactLink = styled.a`
  color: #cccccc;
  cursor: pointer;
  
  &:hover {
    color: #00c0fd;

    &:hover svg {
      fill: #00c0fd;;
    }
  }
  

`
