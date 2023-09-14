import React from 'react';
import {S} from "../HeaderMenu_Styles";

const items = [
    {
        title: "Home",
        href: "home",
    },
    {
        title: "About",
        href: "about",
    },
    {
        title: "Tech Stack",
        href: "tech stack",
    },
    {
        title: "Project",
        href: "project",
    },
    {
        title: "Contact",
        href: "contact",
    },

]

export const Menu: React.FC = () => {
    return (
        <ul>
            {items.map((item, index) => {
                return <S.MenuItem key={index}>
                    <S.NavLink to={item.href}
                               activeClass="active"
                               spy={true}
                               offset={40}
                               smooth={true}>{item.title}</S.NavLink>
                </S.MenuItem>
            })}
        </ul>
    );
};

