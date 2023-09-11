import React from 'react';
import photo from '../../../assets/images/photo.webp'
import {FlexWrapper} from '../../../components/FlexWrapper'
import {Container} from '../../../components/Container';
import {S} from "./Main_Styles";

export const Main: React.FC = () => {
    return (
        <S.StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"} margin={"120px 15px"}>
                    <S.WelcomeWrapper>
                        <S.Welcome>Hello👋,</S.Welcome>
                        <S.Name>My name is <br/>Artur Limaiko</S.Name>
                        <S.MainTitle>A web developer</S.MainTitle>
                    </S.WelcomeWrapper>
                    <S.Frame>
                        <S.Photo src={photo} alt="photo developer"/>
                    </S.Frame>
                </FlexWrapper>
            </Container>
        </S.StyledMain>
    );
};
