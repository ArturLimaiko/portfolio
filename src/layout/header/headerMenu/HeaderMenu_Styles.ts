import styled, {css} from "styled-components";
import {Theme} from "../../../styles/Theme";
import {Link} from "react-scroll";

//Menu

const MenuItem = styled.li`
`

const NavLink = styled(Link)`
  color: ${Theme.colors.fontDark};
  position: relative;
  text-decoration: none;
  font-family: "DM Sans", "sans-serif";
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;

  &:hover, &.active {
    background: linear-gradient(270deg, rgba(231, 15, 170, 1) 35%, rgba(0, 192, 253, 1) 65%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    &::before {
      transform: scaleX(1);
      transition: ${Theme.animations.transition};
    }
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
    transition: transform ${Theme.animations.transition};
  }
`


// MobileMenu

const TabletMenu = styled.nav`
`

const TabletMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 2000;
  background-color: rgba(54, 54, 54, 0.5);
  display: none;

  ${props => props.isOpen && css<{ isOpen: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
  `}
  ul {
    display: flex;
    gap: 30px;
    align-items: center;
    flex-direction: column;
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

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  width: 125px;
  height: 125px;
  top: 0;
  right: 0;
  z-index: 3000;
  cursor: pointer;

  span {
    position: absolute;
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${Theme.colors.fontDark};
    left: 30px;
    bottom: 60px;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
      background-color: rgba(255, 255, 255, 0);
    `}
    &::before {
      content: "";
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${Theme.colors.fontDark};
      position: absolute;
      transform: translateY(-10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(-45deg) translateY(0);
      `}
    }

    &::after {
      content: "";
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${Theme.colors.fontDark};
      position: absolute;
      transform: translateY(10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(45deg) translateY(0);
        width: 36px;
      `}
    }
  }
`

//Desktop Menu

const DesktopMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    align-items: center;
  }
`

export const S = {
    MenuItem,
    NavLink,
    TabletMenu,
    TabletMenuPopup,
    BurgerButton,
    DesktopMenu
}
