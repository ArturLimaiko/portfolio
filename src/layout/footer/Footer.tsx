import React from 'react';
import instagram from '../../assets/images/instagram.svg'
import telegram from '../../assets/images/telegram.svg'
import linkedin from '../../assets/images/linkedin.svg'
import {Container} from "../../components/Container";
import {S} from "./Footer_Styled";

export const Footer:React.FC = () => {
    return (
        <S.Footer>
            <Container>
                <S.FooterWrapper>
                    <S.SocialWrapper>
                        <S.SocialList>
                            <li><a href="#"><img src={instagram} width={"40"} height={"40"} alt="icon instagram"/></a>
                            </li>
                            <li><a href="#"><img src={telegram} width={"40"} height={"40"} alt="icon telegram"/></a>
                            </li>
                            <li><a href="#"><img src={linkedin} width={"40"} height={"40"} alt="icon linkedin"/></a>
                            </li>
                        </S.SocialList>
                        <S.Copyright>©2023 Designed and built by <S.Span>Limaiko A.A </S.Span></S.Copyright>
                    </S.SocialWrapper>
                </S.FooterWrapper>
            </Container>
        </S.Footer>
    );
};
