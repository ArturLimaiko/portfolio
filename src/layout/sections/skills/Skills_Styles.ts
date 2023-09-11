import styled from "styled-components";
import {Theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";


const Skills = styled.section`
`

const Skill = styled.div`
  border-radius: 3px;
  padding: 10px;
  
  &:hover {
    box-shadow: 8px 8px 0 0 #000;
    transition-duration: .3s;
    transition-timing-function: cubic-bezier(.4,0,1,1);
  }
`

const SkillTitle = styled.h3`
  color: ${Theme.colors.fontDark};
  text-align: center;
  ${font({family: '"Poppins", "sans-serif"', weight: 100, Fmax: 20, Fmin: 14})}
`

export const S = {
  Skills,
  Skill,
  SkillTitle
}