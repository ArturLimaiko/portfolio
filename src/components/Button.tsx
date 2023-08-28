import styled from "styled-components";
import {Theme} from "../styles/Theme";

export const Button = styled.button`
  cursor: pointer;
  text-shadow: 3px 3px 3px #000;
  display: inline-block;
  padding: 10px 20px;
  text-transform: uppercase;
  transition-duration: .3s;
  transition-timing-function: cubic-bezier(.4, 0, 1, 1);
  background: #363636;
  color: ${Theme.colors.fontDark};
  box-shadow: 8px 8px 0 #000;
  border-radius: 20px;
  font-family: "Poppins", "sans-serif";
  font-weight: bold;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 3px;

  &:hover {
    background: ${Theme.colors.fontDark};
    color: #000;
    text-shadow: 3px 3px 3px #363636;
    box-shadow: 8px 8px 0 #363636;
  }
`