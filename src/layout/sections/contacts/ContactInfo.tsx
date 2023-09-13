import React from 'react';
import {Icon} from "../../../components/icon/Icon";
import {S} from "./Contacts_Styles";

export const ContactsInfo = () => {
    return (
        <S.ContactInfo>
            <S.Img alt="photo"/>
            <ul>
                <li>
                    <S.ContactLink>
                        <Icon iconId={"phone"} viewBox={"0 0 41.167 41.167"} fill={"#000"} width={"80"} height={"80"}/>
                        <S.Description>
                            <h3>phone</h3>
                            <p>+1 000 992 2222</p>
                        </S.Description>
                    </S.ContactLink>
                </li>
                <li>
                    <S.ContactLink>
                        <Icon iconId={"mail"} viewBox={"0 0 512 512"} fill={"#000"} width={"80"} height={"80"}/>
                        <S.Description>
                            <h3>mail</h3>
                            <p>+1 000 992 2222</p>
                        </S.Description>
                    </S.ContactLink>
                </li>
                <li>
                    <S.ContactLink>
                        <Icon iconId={"location"} viewBox={"0 0 64 64"} fill="#000" width={"80"} height={"80"}/>
                        <S.Description>
                            <h3>location</h3>
                            <p>New-York Sity</p>
                        </S.Description>
                    </S.ContactLink>
                </li>
            </ul>
        </S.ContactInfo>
    );
};

