import React from 'react';
import styled from 'styled-components';
import {Icon} from "../icon/Icon";

export const Logo: React.FC = () => {
    return (
        <StyledIcon>
            <a href="">
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