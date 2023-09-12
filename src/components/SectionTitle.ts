import styled from "styled-components";
import {font} from "../styles/Common";
import {Theme} from "../styles/Theme";

export const SectionTitle = styled.h2`
  color: #cccccc;
  text-align: center;
  line-height: 26px;
  letter-spacing: 0;
  padding: 49px 0;
  ${font({family: '"Poppins", "sans-serif"', weight: 700, Fmax: 50, Fmin: 30})}

  @media ${Theme.media.tablet} {
    padding: 25px 0;
  }
  
`