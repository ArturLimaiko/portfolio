import React, {useEffect, useState} from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";
import {animateScroll as scroll} from "react-scroll";

export const GoTopBtn = () => {

    const [showBtn, setshowBtn] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 600) {
                setshowBtn(true)
            } else {
                setshowBtn(false)
            }
        })
    }, [])
    return (

        <>
            {showBtn && (
                <StyledGoTopBtn onClick={() => {
                    scroll.scrollToTop()
                }}>
                    <Icon iconId={"goTop"} viewBox="-0.5 0 25 25" width={"60px"} height={"60px"}/>
                </StyledGoTopBtn>
            )}
        </>

    );
};

const StyledGoTopBtn = styled.button`
  padding: 10px;
  stroke: rgba(167, 167, 167, 0.3);
  border-radius: 20px;
  position: fixed;
  right: 30px;
  bottom: 30px;
`