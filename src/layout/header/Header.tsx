import React from 'react';
import styled from 'styled-components';
import {Container} from '../../components/Container';
import {Logo} from "../../components/logo/Logo";
import {Menu} from "./menu/Menu";
import {FlexWrapper} from "../../components/FlexWrapper";
import {TabletMenu} from "./tabletMenu/tabletMenu";


const items = ["Home","About","Tech Stack","Project","Contact"]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo/>
                    <Menu menuItems={items}/>
                    <TabletMenu menuItems={items}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header `
position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  min-width: 360px;
`