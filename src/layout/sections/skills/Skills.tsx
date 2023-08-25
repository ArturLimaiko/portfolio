import React from 'react';
import styled from 'styled-components';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {SectionText} from '../../../components/SectionText';
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My Tech Stack</SectionTitle>
            <SectionText> Technologies I’ve been working with recently</SectionText>
            <FlexWrapper wrap={"wrap"} justify={"center"}>
                <Skill iconId={"html"} title={"html5"}/>
                <Skill iconId={"css"} title={"css"}/>
                <Skill iconId={"js"} title={"js"}/>
                <Skill iconId={"react"} title={"react"}/>
                <Skill iconId={"github"} title={"github"}/>
                <Skill iconId={"git"} title={"git"}/>
                <Skill iconId={"sass"} title={"sass"}/>
                <Skill iconId={"webstorm"} title={"webstorm"}/>
                <Skill iconId={"vscode"} title={"vscode"}/>
                <Skill iconId={"figma"} title={"figma"}/>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
  background-color: #191919;
  min-height: 100vh;
`