import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionText} from '../../../components/SectionText';
import {Skill} from "./skill/Skill";
import {Container} from '../../../components/Container';
import {SectionTitle} from '../../../components/SectionTitle';
import {S} from "./Skills_Styles";

const skillData = [
    {
        iconId: "html",
        title: "html5"
    },
    {
        iconId: "css",
        title: "css"
    },
    {
        iconId: "js",
        title: "javascript"
    },
    {
        iconId: "react",
        title: "react"
    },
    {
        iconId: "github",
        title: "github",
        viewBox: "0 0 88 88",
        width: "120",
        height: "120"
    },
    {
        iconId: "git",
        title: "git",
        viewBox: "0 0 105 105",
    },
    {
        iconId: "sass",
        title: "sass"
    },
    {
        iconId: "webstorm",
        title: "webstorm",
        viewBox: "0 0 24 24",
        width: "120",
        height: "120"
    },
    {
        iconId: "typescript",
        title: "typescript",
        viewBox: "0 0 128 128",
    },
    {
        iconId: "figma",
        title: "figma",
        viewBox: "0 0 24 24",
    }
]


export const Skills = () => {
    return (
        <S.Skills id={"tech stack"}>
            <Container>
                <SectionTitle>My Tech Stack</SectionTitle>
                <SectionText> Technologies I’ve been working with recently</SectionText>
                <FlexWrapper wrap={"wrap"} justify={"center"} gap={"30px 80px"}>
                    {skillData.map((skills,index) => {
                        return <Skill iconId={skills.iconId} key={index}
                                      title={skills.title}
                                      viewBox={skills.viewBox}
                                      width={skills.width}
                                      height={skills.height}
                        />
                    })}
                </FlexWrapper>
            </Container>
        </S.Skills>
    )
        ;
};
