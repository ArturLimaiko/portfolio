import styled from "styled-components";
import {Theme} from "../styles/Theme";

export const Container = styled.div`
  max-width: 1221px;
  width: 100%;
  min-height: 100%;
  margin: 0 auto;
  outline:1px solid red;

  @media ${Theme.media.tablet} {
    max-width: 768px;
  }
`