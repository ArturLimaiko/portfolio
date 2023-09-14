import styled from "styled-components";
import {Theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";


const Skills = styled.section`
  position: relative;
`

const Skill = styled.div`
  border-radius: 3px;
  padding: 10px;
  box-shadow: 0 0 0 0 #000;
  transition: .2s cubic-bezier(.4,0,1,1);
  
  &:hover {
    box-shadow: 0 0 30px 10px #000;
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