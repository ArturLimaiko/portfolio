import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {SectionText} from "../../../components/SectionText";
import {Work} from './Card/Work';
import oneImg from "../../../assets/images/One.jpg"
import twoImg from "../../../assets/images/Two.jpg"
import threeImg from "../../../assets/images/Three.jpg"
import fourthImg from "../../../assets/images/Fourth.jpg"
import fiveImg from "../../../assets/images/Five.jpg"
import sixImg from "../../../assets/images/Six.jpg"
import {Container} from "../../../components/Container";
import {S} from "./Works_Styles"

const worksData = [
    {
        title : "Project one",
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        about: "Tech stack : HTML , JavaScript, SASS, React",
        src: oneImg
    },    {
        title : "Project two",
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        about: "Tech stack : HTML , JavaScript, SASS, React",
        src: twoImg
    },    {
        title : "Project three",
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        about: "Tech stack : HTML , JavaScript, SASS, React",
        src: threeImg
    },    {
        title : "Project fourth",
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        about: "Tech stack : HTML , JavaScript, SASS, React",
        src: fourthImg
    },    {
        title : "Project five",
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        about: "Tech stack : HTML , JavaScript, SASS, React",
        src: fiveImg
    },    {
        title : "Project six",
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        about: "Tech stack : HTML , JavaScript, SASS, React",
        src: sixImg
    },
]

export const Works: React.FC = () => {
    return (

        <S.Works id={"project"}>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <SectionText>Things I’ve built so far</SectionText>
                <S.WorksWrapper>
                    {worksData.map((works, index) => {
                        return <Work title={works.title} key={index}
                                     text={works.text}
                                     about={works.about} src={works.src}/>
                    })}
                </S.WorksWrapper>
            </Container>
        </S.Works>

    );
};

