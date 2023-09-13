import styled from "styled-components";
import {Theme} from "../../../styles/Theme";
import {Button} from "../../../components/Button";
import {font} from "../../../styles/Common";


const Works = styled.section`
  background-color: #191919;
`

const WorksWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 30px;
  flex-wrap: wrap;
  margin: 0 15px;
`

const Work = styled.div`
  width: 320px;
  height: 100%;
  min-height: 567px;
  background-color: #363636;
  border-radius: 20px;
  color: #cccccc;
  flex-grow: 1;

  @media ${Theme.media.desktop} {
    max-width: 375px;
  }
`

const WorkWrapper = styled.div`
  padding: 27px;
`

const ImageWrapper = styled.div`
  position: relative;

  ${Button} {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  &::before {
    position: absolute;
    content: "";
    left: 0;
    right: 0;
    top: 0;
    bottom: 7px;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(4px);
    opacity: 0;
  }

  &:hover {
    &::before {
      opacity: 1;
    }

    ${Button} {
      opacity: 1;
      font-weight: normal;
      font-size: 14px;
      line-height: 26px;
      letter-spacing: 3px;
      transition-duration: .2s;
      transition-timing-function: cubic-bezier(.4, 0, 1, 1);
    }
  }

  @media ${Theme.media.tablet} {
    &::before {
      opacity: 1;
    }

    ${Button} {
      opacity: 1;
      font-weight: normal;
      font-size: 10px;
      line-height: 22px;
      letter-spacing: 2px;
      transition-duration: .2s;
      transition-timing-function: cubic-bezier(.4, 0, 1, 1);
    }
  }

  &:hover {
    &::before {
      opacity: 1;
    }

    ${Button} {
      opacity: 1;
      font-weight: normal;
      font-size: 10px;
      line-height: 22px;
      letter-spacing: 2px;
      transition-duration: .3s;
      transition-timing-function: cubic-bezier(.4, 0, 1, 1);
    }
  }
`

const PreviewImage = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  border-radius: 20px 20px 0 0;
`

const WorkTitle = styled.h3`
  text-align: center;
  padding: 0 0 20px 0;
  ${font({family: '"Poppins", "sans-serif"', weight: 400, Fmax: 28, Fmin: 20})}

`

const WorkDescription = styled.p`
  padding: 0 0 20px 0;
  ${font({family: '"Poppins", "sans-serif"', weight: 300, Fmax: 18, Fmin: 15})}

`

const WorkAbout = styled.span`
  ${font({family: '"Poppins", "sans-serif"', weight: 300, Fmax: 15, Fmin: 12})}
`

const WorkLinks = styled.div`
  padding: 20px 0 0 0;
  display: flex;
  gap: 20px;
`

const WorkLink = styled.a`
  color: #ffffff;
  text-decoration: underline;

  & svg {
    margin: 0 10px 0 0;
  }
`


export const S = {
    Works,
    WorksWrapper,
    Work,
    WorkWrapper,
    ImageWrapper,
    PreviewImage,
    WorkTitle,
    WorkDescription,
    WorkAbout,
    WorkLinks,
    WorkLink
}
