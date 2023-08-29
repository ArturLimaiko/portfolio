import React from 'react';
import styled from 'styled-components';
import {Icon} from "../../../../components/icon/Icon";
import {Button} from "../../../../components/Button";

type WorkPropsType = {
    title?: string
    text?: string
    about?: string
    src?: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <ImageWrapper>
                <PreviewImage src={props.src} alt=""/>
                <Button>View Project</Button>
            </ImageWrapper>
            <WorkWrapper>
                <WorkTitle>{props.title}</WorkTitle>
                <WorkDescription>{props.text}</WorkDescription>
                <WorkAbout>{props.about}</WorkAbout>
                <WorkLinks>
                    <WorkLink href={"#"}>
                        <Icon iconId={"link-chain"} viewBox={"0 0 20 20"} width={"20px"} height={"20px"}/>
                        Live Preview</WorkLink>
                    <WorkLink href={"#"}>
                        <Icon iconId={"link-github"} viewBox={"0 0 20 20"} width={"20px"} height={"20px"}/>
                        View Code</WorkLink>
                </WorkLinks>
            </WorkWrapper>
        </StyledWork>
    );
};

const StyledWork = styled.div`
  max-width: 375px;
  width: 100%;
  height: 100%;
  min-height: 567px;
  background-color: #363636;
  border-radius: 20px;
  color: #cccccc;
`

const WorkWrapper = styled.div`
  padding: 27px;
`

const ImageWrapper = styled.div`
  position: relative;

  &:hover {

    &::before {
      position: absolute;
      content: "";
      left: 0;
      right: 0;
      top: 0;
      bottom: 7px;
      background: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(4px);
    }

    ${Button} {
      opacity: 1;
      font-weight: normal;
      font-size: 14px;
      line-height: 26px;
      letter-spacing: 3px;
      transition-duration: .2s;
      transition-timing-function: cubic-bezier(.4, 0, 1, 1);
    }
  }


  ${Button} {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`

const PreviewImage = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  border-radius: 20px 20px 0 0;
`

const WorkTitle = styled.h3`
  text-align: center;
  padding: 0 0 20px 0;
`

const WorkDescription = styled.p`
  font-size: 18px;
  line-height: 26px;
  font-weight: 300;
  padding: 0 0 20px 0;
`

const WorkAbout = styled.span`
  font-size: 15px;
  line-height: 20px;
  font-weight: 300;
`
const WorkLinks = styled.div`
  padding: 20px 0 0 0;
  display: flex;
  gap: 20px;
`

const WorkLink = styled.a`
  color: #ffffff;
  text-decoration: underline;

  & svg {
    margin: 0 10px 0 0;
  }
`