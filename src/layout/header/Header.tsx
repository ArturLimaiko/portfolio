import React from 'react';
import {Container} from '../../components/Container';
import {Logo} from "../../components/logo/Logo";
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu";
import {FlexWrapper} from "../../components/FlexWrapper";
import {S} from "./Header_Styles"
import {TabletMenu} from "./headerMenu/tabletMenu/tabletMenu";

export const Header: React.FC = () => {

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;


    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);

        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
    return (
        <S.Header>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo/>

                    {width < breakpoint ? <TabletMenu/>
                                        : <DesktopMenu/>}
                </FlexWrapper>
            </Container>
        </S.Header>
    );
};

