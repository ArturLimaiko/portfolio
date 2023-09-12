import React from 'react';
import instagram from '../../assets/images/instagram.svg'
import telegram from '../../assets/images/telegram.svg'
import linkedin from '../../assets/images/linkedin.svg'
import {Container} from "../../components/Container";
import {S} from "./Footer_Styled";


const SocialItemData = [
    {
        src: instagram,
    },
    {
        src: telegram,
    },
    {
        src: linkedin,
    }
]

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <Container>
                <S.FooterWrapper>
                    <S.SocialWrapper>
                        <S.SocialList>
                            {SocialItemData.map((socialItem, index) => {
                                return (
                                    <S.SocialItem key={index}>
                                        <a href="#">
                                            <img src={socialItem.src} width={"40"} height={"40"}
                                                 alt="icon instagram"/>
                                        </a>
                                    </S.SocialItem>
                                )
                            })}
                        </S.SocialList>
                        <S.Copyright>©2023 Designed and built by <S.Span>Limaiko A.A </S.Span></S.Copyright>
                    </S.SocialWrapper>
                </S.FooterWrapper>
            </Container>
        </S.Footer>
    );
};
