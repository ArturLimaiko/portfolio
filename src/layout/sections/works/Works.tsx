import React from 'react';
import styled from "styled-components";
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

export const Works = () => {
    return (

        <StyledWorks>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <SectionText>Things I’ve built so far</SectionText>
                <WorkWrapper>
                    <Work title={"Project one"}
                          text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                          about={"Tech stack : HTML , JavaScript, SASS, React"} src={oneImg}/>
                    <Work title={"Project two"}
                          text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                          about={"Tech stack : HTML , JavaScript, SASS, React"} src={twoImg}/>
                    <Work title={"Project three"}
                          text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                          about={"Tech stack : HTML , JavaScript, SASS, React"} src={threeImg}/>
                    <Work title={"Project fourth"}
                          text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                          about={"Tech stack : HTML , JavaScript, SASS, React"} src={fourthImg}/>
                    <Work title={"Project five"}
                          text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                          about={"Tech stack : HTML , JavaScript, SASS, React"} src={fiveImg}/>
                    <Work title={"Project six"}
                          text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                          about={"Tech stack : HTML , JavaScript, SASS, React"} src={sixImg}/>
                </WorkWrapper>
            </Container>
        </StyledWorks>

    );
};

const StyledWorks = styled.section`
  background-color: #191919;
`

const WorkWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 30px;
  flex-wrap: wrap;
  margin: 0 15px;
`

