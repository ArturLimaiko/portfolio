import styled from "styled-components";
import {Theme} from "../styles/Theme";
import {font} from "../styles/Common";

export const SectionText = styled.p`
  text-align: center;
  line-height: 32px;
  letter-spacing: 0;
  padding-bottom: 50px;

  ${font({family: '"Poppins", "sans-serif"', weight: 400,Fmax: 26, Fmin: 18})}
  color: ${Theme.colors.fontDark};

  @media ${Theme.media.tablet} {
    padding-bottom: 15px;
  }
`