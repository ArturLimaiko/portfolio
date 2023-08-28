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
                        <Icon iconId={"#"}/>
                        +1 000 992 2222
                    </ContactLink>
                </li>
                <li>
                    <ContactLink>
                        <Icon iconId={"#"}/>
                        info@domainname.com
                    </ContactLink>
                </li>
                <li>
                    <ContactLink> <Icon iconId={"#"}/>
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
`
