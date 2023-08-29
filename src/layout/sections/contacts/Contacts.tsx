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
                                <Field placeholder={"Name"} type={"text"}/>
                            </Label>
                            <Label> Your email
                                <Field placeholder={"Email"} type={"email"}/>
                            </Label>
                        </WrapperInput>
                        <Label> Subject
                            <Field placeholder={"Subject"} type={"text"}/>
                        </Label>
                        <FieldTextArea as={"textarea"} placeholder={"Your message"}/>
                        <Button type={"submit"}>Send message</Button>
                    </StyledForm>
                    <ContactsInfo></ContactsInfo>
                </FormContainer>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`

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

const Field = styled.input`
  width: 100%;
  padding: 10px 20px;
  background-color: ${Theme.colors.projectBg};
  border: 1px solid #000;
  color: ${Theme.colors.font};
  font-weight: normal;
  font-family: "Poppins", "sans-serif";
  font-size: 15px;
  line-height: 26px;
  letter-spacing: 2px;
  box-shadow: 8px 8px 0 #000;

  &::placeholder {
    color: ${Theme.colors.fontDark}
  }

  &:hover {
    cursor: pointer;
    box-shadow: 8px 8px 0 #363636;
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
  font-size: 15px;
  line-height: 26px;
  letter-spacing: 2px;
  border: 1px solid #000;

  &::placeholder {
    color: ${Theme.colors.fontDark}
  }

  &:focus-visible{
    outline: 1px solid #000;
  }
  

`

const Label = styled.label`
  color: #cccccc;
`
const WrapperInput = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`