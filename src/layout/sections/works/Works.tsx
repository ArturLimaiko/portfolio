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
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>Projects</SectionTitle>
            <SectionText>Things I’ve built so far</SectionText>
            <FlexWrapper justify={"space-around"} gap={"50px"} wrap={"wrap"}>
                <Work title={"Project one"} text={"Project One description"}
                      about={"Tech stack : HTML , JavaScript, SASS, React"} src={oneImg}/>
                <Work title={"Project two"} text={"Project two description"}
                      about={"Tech stack : HTML , JavaScript, SASS, React"} src={twoImg}/>
                <Work title={"Project three"} text={"Project three description"}
                      about={"Tech stack : HTML , JavaScript, SASS, React"} src={threeImg}/>
                <Work title={"Project fourth"} text={"Project fourth description"}
                      about={"Tech stack : HTML , JavaScript, SASS, React"} src={fourthImg}/>
                <Work title={"Project five"} text={"Project five description"}
                      about={"Tech stack : HTML , JavaScript, SASS, React"} src={fiveImg}/>
                <Work title={"Project six"} text={"Project six description"}
                      about={"Tech stack : HTML , JavaScript, SASS, React"} src={sixImg}/>
                <Work title={"Project seven"} text={"Project seven description"}
                      about={"Tech stack : HTML , JavaScript, SASS, React"} src={oneImg}/>
                <Work title={"Project eight"} text={"Project eight description"}
                      about={"Tech stack : HTML , JavaScript, SASS, React"} src={twoImg} />
            </FlexWrapper>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
  background-color: #191919;
  min-height: 100vh;
`