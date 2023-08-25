import React from 'react';
import styled from 'styled-components';

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Tech Stack</a></li>
                <li><a href="#">Project</a></li>
                <li><a href="#">Contact</a></li>

                <ul>
                    <li><a href="#"><img src="" alt=""/></a></li>
                    <li><a href="#"><img src="" alt=""/></a></li>
                    <li><a href="#"><img src="" alt=""/></a></li>
                </ul>
            </ul>

        </StyledMenu>
    );
};

const StyledMenu = styled.nav `
    ul {
      display: flex;
    gap: 30px;
    }
`