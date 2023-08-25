import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {Logo} from "../../components/logo/Logo";
import {FlexWrapper} from "../../components/FlexWrapper";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper justify={"space-around"} align={"center"}>
                <Logo/>
                <SocialList>
                    <SocialIconItem>
                        <SocialIconLink>
                            <Icon height={"50px"} width={"50px"} iconId={"instagram"}/>
                        </SocialIconLink>
                    </SocialIconItem>
                    <SocialIconItem>
                        <SocialIconLink>
                            <Icon height={"50px"} width={"50px"} iconId={"telegram"}/>
                        </SocialIconLink>
                    </SocialIconItem>
                    <SocialIconItem>
                        <SocialIconLink>
                            <Icon height={"50px"} width={"50px"} iconId={"LinkedIn"}/>
                        </SocialIconLink>
                    </SocialIconItem>
                </SocialList>
                <Copyright>©2023 Designed and built by Limaiko A.A </Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`

`

const SocialList = styled.ul`
  display: flex;
  gap: 30px;
`

const SocialIconItem = styled.li`

`

const SocialIconLink = styled.a`

`

const Copyright = styled.small`

`

