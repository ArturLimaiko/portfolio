import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {SectionText} from "../../../components/SectionText";
import {ContactsInfo} from "./ContactInfo";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {S} from "./Contacts_Styles";

export const Contact: React.FC = () => {
    return (
        <S.Contacts>
            <Container>
                <SectionTitle>Get in touch</SectionTitle>
                <SectionText>For any questions please mail me:</SectionText>
                <S.FormContainer>
                    <S.Form>
                        <S.WrapperInput>
                            <S.Label> First name
                                <S.Field placeholder={"Name"} aria-placeholder={"Name"}/>
                            </S.Label>
                            <S.Label> Your email
                                <S.Field placeholder={"Email"} type={"email"} aria-placeholder={"Email"}/>
                            </S.Label>
                        </S.WrapperInput>
                        <S.Label> Subject
                            <S.Field placeholder={"Subject"} aria-placeholder={"Subject"}/>
                        </S.Label>
                        <S.FieldTextArea as={"textarea"} placeholder={"Your message"}
                                         aria-placeholder={"Your message"}/>
                        <Button type={"submit"}>Send message</Button>
                    </S.Form>
                    <ContactsInfo/>
                </S.FormContainer>
            </Container>
        </S.Contacts>
    );
};
