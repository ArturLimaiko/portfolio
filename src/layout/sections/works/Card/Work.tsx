import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import {Button} from "../../../../components/Button";
import {S} from "../Works_Styles";

type WorkPropsType = {
    title?: string
    text?: string
    about?: string
    src?: string
}

export const Work:React.FC<WorkPropsType> = (props: WorkPropsType) => {
    return (
        <S.Work>
            <S.ImageWrapper>
                <S.PreviewImage src={props.src} alt=""/>
                <Button>View Project</Button>
            </S.ImageWrapper>
            <S.WorkWrapper>
                <S.WorkTitle>{props.title}</S.WorkTitle>
                <S.WorkDescription>{props.text}</S.WorkDescription>
                <S.WorkAbout>{props.about}</S.WorkAbout>
                <S.WorkLinks>
                    <S.WorkLink href={"#"}>
                        <Icon iconId={"link-chain"} viewBox={"0 0 20 20"} width={"20px"} height={"20px"}/>
                        Live Preview</S.WorkLink>
                    <S.WorkLink href={"#"}>
                        <Icon iconId={"link-github"} viewBox={"0 0 20 20"} width={"20px"} height={"20px"}/>
                        View Code</S.WorkLink>
                </S.WorkLinks>
            </S.WorkWrapper>
        </S.Work>
    );
};

