import React from 'react';
import styled from 'styled-components';
import {Theme} from "../../styles/Theme";
import instagram from '../../assets/images/instagram.svg'
import telegram from '../../assets/images/telegram.svg'
import linkedin from '../../assets/images/linkedin.svg'


export const Menu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <li key={index}>
                        <a href="#">{item}</a>
                    </li>
                })}

                <StyledHeaderIcon>
                    <ul>
                        <li><a href="#"><img src={instagram} width={"40"} height={"40"} alt="icon instagram"/></a></li>
                        <li><a href="#"><img src={telegram} width={"40"} height={"40"} alt="icon telegram"/></a></li>
                        <li><a href="#"><img src={linkedin} width={"40"} height={"40"} alt="icon linkedin"/></a></li>
                    </ul>
                </StyledHeaderIcon>

            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    align-items: center;
  }

  li a {
    color: ${Theme.colors.fontDark};
    position: relative;
    text-decoration: none;
    font-family: "DM Sans", "sans-serif";
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
  }

  a:hover {
    color: #00c0fd;
  }

  a::before {
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

  a:hover::before {
    transform: scaleX(1);
  }
`

const StyledHeaderIcon = styled.nav`
  a:hover {
    filter: drop-shadow(0px 10px 42px #fff);
  }

  li a::before {
    content: none;
  }
`