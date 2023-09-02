import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {SectionText} from "../../../components/SectionText";
import {ContactsInfo} from "./ContactInfo";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {Theme} from "../../../styles/Theme";


export const Contact = () => {
    return (
        <StyledContacts>
            <Container>
                <SectionTitle>Get in touch</SectionTitle>
                <SectionText>For any questions please mail me:</SectionText>
                <FormContainer>
                    <StyledForm>
                        <WrapperInput>
                            <Label> First name
                                <Field placeholder={"Name"} aria-placeholder={"Name"}/>
                            </Label>
                            <Label> Your email
                                <Field placeholder={"Email"} type={"email"} aria-placeholder={"Email"}/>
                            </Label>
                        </WrapperInput>
                        <Label> Subject
                            <Field placeholder={"Subject"} aria-placeholder={"Subject"}/>
                        </Label>
                        <FieldTextArea as={"textarea"} placeholder={"Your message"} aria-placeholder={"Your message"}/>
                        <Button type={"submit"}>Send message</Button>
                    </StyledForm>
                    <ContactsInfo/>
                </FormContainer>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`

  ul {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
`

const StyledForm = styled.form`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
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

const Field = styled.input.attrs(({type, placeholder}) => ({
    type: type || "text",
    placeholder: placeholder || "placeholder",
}))`
  width: 100%;
  padding: 10px 20px;
  background-color: ${Theme.colors.projectBg};
  border: 1px solid #000;
  color: ${Theme.colors.font};
  font-weight: normal;
  font-family: "Poppins", "sans-serif";
  font-size: 19px;
  line-height: 26px;
  letter-spacing: 3px;
  box-shadow: 8px 8px 0 #000;
  text-shadow: 3px 3px 3px #000;
  
  &::placeholder {
    color: ${Theme.colors.fontDark};
  }

  &:hover {
    background: #a7a7a7;
    color: #000;
    cursor: pointer;
    box-shadow: 8px 8px 0 #363636;
    text-shadow: 3px 3px 3px #363636;

    &::placeholder {
      color: #000;
      text-shadow: 3px 3px 3px #363636;
    }
  }

  &:focus-visible {
    outline: 1px solid #000;
  }
`

const FieldTextArea = styled.textarea`
  resize: vertical;
  height: 170px;
  background-color: ${Theme.colors.projectBg};
  box-shadow: 8px 8px 0 #000;
  padding: 10px 20px;
  color: ${Theme.colors.font};
  font-family: "Poppins", "sans-serif";
  font-size: 17px;
  line-height: 26px;
  letter-spacing: 2px;
  border: 1px solid #000;
  text-shadow: 3px 3px 3px #000;

  &::placeholder {
    color: ${Theme.colors.fontDark};
  }

  &:hover {
    background: #a7a7a7;
    color: #000;
    cursor: pointer;
    box-shadow: 8px 8px 0 #363636;
    text-shadow: 3px 3px 3px #363636;
    
    &::placeholder {
    color: #000;
  }

  &:focus-visible{
    outline: 1px solid #000;
  }
`

const Label = styled.label`
  color: #cccccc;
  font-family: "Poppins", "sans-serif";
  font-size: 18px;
  line-height: 35px;
  font-weight: normal;
  letter-spacing: 2px;
`

const WrapperInput = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`