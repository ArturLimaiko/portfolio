import styled from "styled-components";
import {Theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";


//ContactsInfo

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

  h3 {
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
      height: 60px;
    }

    @media ${Theme.media.mobile} {
      width: 40px;
      height: 40px;
    }
  }
`


// Contacts

const Contacts = styled.section`
  position: relative;

  ul {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
`

const Form = styled.form`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media ${Theme.media.mobile} {
    margin: 0 15px;
  }
`

const FormContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  margin: 0 15px;
  gap: 50px;

  @media ${Theme.media.tablet} {
    grid-template-columns: 1fr;
    align-items: center;
    margin: 0 15px;
  }
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

    &:focus-visible {
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

  @media ${Theme.media.tablet} {
    flex-direction: column;
  }
`


export const S = {
    Img,
    ContactInfo,
    Description,
    ContactLink,
    Contacts,
    Form,
    FormContainer,
    Field,
    FieldTextArea,
    Label,
    WrapperInput
}