import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";

type ContactsInfoPropsType = {
    contactIcon: string
}

export const ContactsInfo = (props: ContactsInfoPropsType) => {
    return (
        <ContactInfo>
            <Img/>
            <ul>
                <li>
                    <Icon width={"50px"} height={"50px"} iconId={'phone'} fill={"white"}/>
                    <ContactTitle>phone</ContactTitle>
                    <ContactText>+1 000 992 2222</ContactText>
                </li>
                <li>
                    <Icon width={"50px"} height={"50px"} iconId={'mail'} fill={"white"}/>
                    <ContactTitle>email</ContactTitle>
                    <ContactText>info@domainname.com</ContactText>
                </li>
                <li>
                    <Icon width={"50px"} height={"50px"} iconId={'marker'} fill={"white"}/>
                    <ContactTitle>adress</ContactTitle>
                    <ContactText> New-York Sity</ContactText>
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

const ContactTitle = styled.h4`
color:#cccccc;
`

const ContactText = styled.p`
  color:#cccccc;
`