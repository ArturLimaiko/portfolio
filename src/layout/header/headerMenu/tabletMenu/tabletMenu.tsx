import React from 'react';
import {Menu} from "../menu/Menu";
import {S} from "../HeaderMenu_Styles";


export const TabletMenu:React.FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {
    return (
        <S.TabletMenu>
            <S.BurgerButton isOpen={false}>
                <span>

                </span>
            </S.BurgerButton>
            <S.TabletMenuPopup isOpen={false}>
                <Menu menuItems={props.menuItems}/>
            </S.TabletMenuPopup>

        </S.TabletMenu>
    );
};

