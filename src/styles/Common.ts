import {Theme} from "./Theme";

type FontPropsType = {
    family?: string
    weight?: number
    fontSize?: number
    letterSpacing?: number
    color?: string
    Fmin?: number
    Fmax?: number
}

export const font = ({family, weight, fontSize, letterSpacing, color, Fmin, Fmax}: FontPropsType) => `
        font-family: ${family || "Poppins"};
        font-weight: ${weight || "400"};
        color: ${color || Theme.colors.font};
        font-size: ${fontSize || 1.2};
        letter-spacing ${letterSpacing || 1};
        font-size: calc( (100vw - 360px)/(1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px );
`