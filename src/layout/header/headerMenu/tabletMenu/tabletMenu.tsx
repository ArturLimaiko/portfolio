import React, {useState} from 'react';
import {Menu} from "../menu/Menu";
import {S} from "../HeaderMenu_Styles";


export const TabletMenu:React.FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {

    const [menuIsOpen, setMenuIsOpen] = useState(false)
const onBurgerBtnClick = () => {setMenuIsOpen( !menuIsOpen)}
    return (
        <S.TabletMenu>
            <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span>

                </span>
            </S.BurgerButton>
            <S.TabletMenuPopup isOpen={menuIsOpen} onClick={() => {setMenuIsOpen(false)}}>
                <Menu menuItems={props.menuItems}/>
            </S.TabletMenuPopup>

        </S.TabletMenu>
    );
};

