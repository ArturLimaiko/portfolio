import React from 'react';
import styled from 'styled-components';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {SectionText} from '../../../components/SectionText';
import {Skill} from "./skill/Skill";
import {Container} from '../../../components/Container';
import { SectionTitle } from '../../../components/SectionTitle';

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>My Tech Stack</SectionTitle>
                <SectionText> Technologies I’ve been working with recently</SectionText>
                <FlexWrapper wrap={"wrap"} justify={"center"} gap={"50px 101px"}>
                    <Skill iconId={"html"} title={"html5"}/>
                    <Skill iconId={"css"} title={"css"}/>
                    <Skill iconId={"js"} title={"javascript"}/>
                    <Skill iconId={"react"} title={"react"}/>
                    <Skill iconId={"github"} title={"github"} viewBox={"0 0 88 88"} width={"120"} height={"120"}/>
                    <Skill iconId={"git"} title={"git"} viewBox={"0 0 105 105"}/>
                    <Skill iconId={"sass"} title={"sass"}/>
                    <Skill iconId={"webstorm"} title={"webstorm"} viewBox={"0 0 24 24"} width={"120"} height={"120"}/>
                    <Skill iconId={"typescript"} title={"typescript"} viewBox={"0 0 128 128"}/>
                    <Skill iconId={"figma"} title={"figma"} viewBox={"0 0 24 24"}/>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    )
        ;
};

const StyledSkills = styled.section`
`