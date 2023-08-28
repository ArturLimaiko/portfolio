import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {SectionText} from "../../../components/SectionText";
import {ContactsInfo} from "./ContactInfo";
import {Button} from "../../../components/Button";


export const Contact = () => {
    return (
        <StyledContacts>
            <SectionTitle>Get in touch</SectionTitle>
            <SectionText>For any questions please mail me:</SectionText>
            <FormContainer>
                <StyledForm>
                    <Label> First name
                        <Field placeholder={"Name"} type={"text"}/>
                    </Label>
                    <Label> Your email
                        <Field placeholder={"Email"} type={"email"}/>
                    </Label>
                    <Label> Subject
                        <Field placeholder={"Subject"} type={"text"}/>
                    </Label>
                    <Field as={"textarea"} placeholder={"Your message"}/>
                    <Button type={"submit"}>Send message</Button>
                </StyledForm>
                <ContactsInfo></ContactsInfo>
            </FormContainer>

        </StyledContacts>
    );
};

const StyledContacts = styled.section`
  min-height: 50vh;
  background-color: #191919;

  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`

const StyledForm = styled.form`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 0 auto;
`

const FormContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 1100px;
  width: 100%;
  justify-items: center;
  margin: 0 auto;
  gap: 50px;
`

const Field = styled.input`

`
const Label = styled.label`
  color: #cccccc;
`
