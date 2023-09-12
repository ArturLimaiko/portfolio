import styled from "styled-components";

type flexWrapperPropsType = {
    direction?: string
    justify?: string
    align?: string
    wrap?: string
    gap?: string
    margin?: string
}

export const FlexWrapper = styled.div<flexWrapperPropsType>`
  display: flex;
  gap: ${props => props.gap || "30px"};
  flex-direction: ${props => props.direction || "row"};
  justify-content: ${props => props.justify || "flex-start"};
  align-items: ${props => props.align || "stretch"};
  flex-wrap: ${props => props.wrap || "nowrap"};
  margin: ${props => props.margin || "0 15px"};
`