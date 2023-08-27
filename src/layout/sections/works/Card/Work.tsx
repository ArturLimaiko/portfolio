import React from 'react';
import styled from 'styled-components';
import {Icon} from "../../../../components/icon/Icon";


type WorkPropsType = {
    title?: string
    text?: string
    about?: string
    src?: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <PreviewImage src={props.src} alt=""/>
            <WorkTitle>{props.title}</WorkTitle>
            <WorkDescription>{props.text}</WorkDescription>
            <WorkAbout>{props.about}</WorkAbout>
            <WorkLinks>

                <WorkLink href={"#"}>
                    <Icon iconId={"link-chain"}/>
                    Live Preview</WorkLink>
                <WorkLink href={"#"}>
                    <Icon iconId={"link-github"}/>
                    View Code</WorkLink>
            </WorkLinks>
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

const PreviewImage = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  border-radius: 20px 20px 0 0;
`

const WorkTitle = styled.h4`

`

const WorkDescription = styled.p`

`

const WorkAbout = styled.span`

`
const WorkLinks = styled.div`

`

const WorkLink = styled.a`
  color: #ffffff;
`