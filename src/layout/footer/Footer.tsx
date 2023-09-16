import React from 'react';
import instagram from '../../assets/images/instagram.svg'
import telegram from '../../assets/images/telegram.svg'
import linkedin from '../../assets/images/linkedin.svg'
import {Container} from "../../components/Container";
import {S} from "./Footer_Styled";
import {Fade} from "react-awesome-reveal";

const SocialItemData = [
    {
        src: instagram,
        width: "40px",
        height: "40px",
        alt: "icon instagram"
    },
    {
        src: telegram,
        width: "40px",
        height: "40px",
        alt: "icon telegram"
    },
    {
        src: linkedin,
        width: "40px",
        height: "40px",
        alt: "icon linkedin"
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
                                        <a href="#" aria-label="иконка">
                                            <img src={socialItem.src} width={socialItem.width}
                                                 height={socialItem.height}
                                                 alt={socialItem.alt}/>
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
