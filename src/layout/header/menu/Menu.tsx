import React from 'react';
import styled from "styled-components";
import {Theme} from "../../../styles/Theme";

export const Menu: React.FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {
    return (
        <ul>
            {props.menuItems.map((item, index) => {
                return <ListItem key={index}>
                    <LinkItem href="#">{item}</LinkItem>
                </ListItem>
            })}
        </ul>
    );
};

const ListItem = styled.li`
`

const LinkItem = styled.a`
  color: ${Theme.colors.fontDark};
  position: relative;
  text-decoration: none;
  font-family: "DM Sans", "sans-serif";
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;

  &:hover {
    color: #00c0fd;
  }

  &::before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background: linear-gradient(270deg, rgba(231, 15, 170, 1) 35%, rgba(0, 192, 253, 1) 65%);
    transform: scaleX(0);
    transition: transform 0.5s ease;
  }

  &:hover::before {
    transform: scaleX(1);
  }
}
`
