import React from 'react';
import photo from '../../../assets/images/photo.webp'
import {FlexWrapper} from '../../../components/FlexWrapper'
import {Container} from '../../../components/Container';
import {S} from "./Main_Styles";
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';

export const Main: React.FC = () => {
    return (
        <S.StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"} wrap={"wrap"} margin={"120px 15px"}>
                    <S.WelcomeWrapper>
                        <S.Welcome>Hello👋,</S.Welcome>
                        <S.Name>My name is <br/>Artur Limaiko</S.Name>
                        <S.MainTitle>
                            <p>A web developer.</p>
                            <Typewriter
                                options={{
                                    strings: ['A web developer.', 'Designer?' , 'Manager?'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 100,
                                }}
                            />
                        </S.MainTitle>
                    </S.WelcomeWrapper>
                    <Tilt>
                        <S.Frame>
                            <S.Photo src={photo} alt="photo developer"/>
                        </S.Frame>
                    </Tilt>

                </FlexWrapper>
            </Container>
        </S.StyledMain>
    );
};
