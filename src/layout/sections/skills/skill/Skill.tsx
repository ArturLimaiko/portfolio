import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import {S} from "../Skills_Styles";


type SkillPropsType = {
    iconId: string
    title: string
    width?: string
    height?:string
    viewBox?:string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <S.Skill>
            <Icon iconId={props.iconId} width={props.width} height={props.height} viewBox={props.viewBox}/>
            <S.SkillTitle>{props.title}</S.SkillTitle>
        </S.Skill>
    );
};

