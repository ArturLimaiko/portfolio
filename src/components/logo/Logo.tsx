import React from 'react';
import styled from 'styled-components';
import {Icon} from "../icon/Icon";
import {animateScroll as scroll} from "react-scroll";

export const Logo: React.FC = () => {
    return (
        <StyledIcon>
            <a onClick={()=> {scroll.scrollToTop()}} aria-label="логотип портфолио">
                <Icon iconId={'logo'} fill={"#000000"}/>
            </a>
        </StyledIcon>

    );
};

const StyledIcon = styled.a `
  a svg:hover {
    fill: #00c0fd;
    filter: drop-shadow(0 0px 12px #00c0fd);
  }
`