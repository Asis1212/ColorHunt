import React, { useContext } from 'react';
import styled from "styled-components";

import IconTextButton from '../UI/IconTextButton';
import { ColorsListContext } from '../../context/colors-context';

const Button = (props) => {
    const {clickedButton, orderOfColors} = useContext(ColorsListContext);

    const clickHandler = () => {
        if (props.colorBoxButton) {
            props.onClick();
        } else {
            orderOfColors(
                props.id,
                props.id === 'popular' ? 'upvotesCount' : 'date'
            );
        }
    }

    return (
        <DefaultButton
            key={props.id}
            onClick={clickHandler}
            sidebarClicked={clickedButton === props.id && true}
            className={
                (props.sidebarButton && 'sidebar-btn') ||
                (props.colorBoxButton && 'colorBox-btn')}
            >
                {props.sidebarButton ?
                    <IconTextButton
                        id={props.id}
                        text={props.text}
                        icon={props.icon}
                        isMenu={true}
                        color={'black'} 
                    /> 
                :   <IconTextButton
                        text={props.text}
                        icon={props.icon} 
                        isClicked={props.isClicked}
                        color={'red'}
                    /> 
                }
        </DefaultButton>
    )
}

export default Button;

const DefaultButton = styled.button`
    border: none;
    border-radius: 100px;
    transition: all .4s;
    cursor: pointer;

    &:active {
        transform: translateY(2px);
    }

    &.sidebar-btn {
        font-family: 'poppins', sans-serif;
        font-size: 150%;
        border-radius: 5px;
        background-color: ${props => props.sidebarClicked ? '#f0eeee' : 'white'};
        color: black;
        padding: .6rem .5rem;
        padding-right: 2.5rem;
        margin: 0 .2rem;
        margin-bottom: 6px;
        transition: all .2s;

        @media only screen and (max-width: 715px) {
            padding-right: .5rem;
            background-color: #fff;
        } 
    }

    &.sidebar-btn:hover {
        background-color: #f0eeee;
        
        @media only screen and (max-width: 715px) {
            padding-right: .5rem;
            background-color: #fff;
        } 
    }

    &.colorBox-btn {
        font-size: 120%;
        background-color: white;
        border: 1px solid rgba(0,0,0, .1);
        color: black;
        border-radius: 5px;
        padding: 2px 10px;
    }
`;