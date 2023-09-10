import React from 'react';
import {Container} from '../../components/Container';
import {Logo} from "../../components/logo/Logo";
import {DesktopMenu} from "./desktopMenu/DesktopMenu";
import {FlexWrapper} from "../../components/FlexWrapper";
import {TabletMenu} from "./tabletMenu/tabletMenu";
import {S} from "./Header_Styles"

const items = ["Home", "About", "Tech Stack", "Project", "Contact"]

export const Header: React.FC= () => {
    return (
        <S.Header>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo/>
                    <DesktopMenu menuItems={items}/>
                    <TabletMenu menuItems={items}/>
                </FlexWrapper>
            </Container>
        </S.Header>
    );
};

