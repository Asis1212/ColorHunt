import React from 'react';
import styled from "styled-components";

const Button = (props) => {

    const clickHandler = () => {
        if(props.isBox) {
            props.onClick();
        } else {
            props.change(props.id);
        }
    }

    return (
        <ButtonSerach
            key={props.id}
            onClick={clickHandler}
            bg={props.bg}
            className={(props.isMenu && 'menu-btn') || (props.isBox && 'box-btn')}>
            {props.text}
        </ButtonSerach>
    )
}

export default Button;

const ButtonSerach = styled.button`
    background-color: #f4f2f2;
    color: #fff;
    padding: .5rem 1rem;
    border: none;
    border-radius: 100px;
    font-size: 1rem;
    margin-left: -3rem;
    cursor: pointer;

    &:active {
        transform: translateY(2px);
    }

    &.menu-btn {
        font-size: 1.2rem;
        font-weight: 400;
        background-image: none;
        border-radius: 5px;
        box-shadow: none;
        background-color: ${props => props.bg ? '#f0eeee' : 'white' };
        color: black;
        padding: 1rem .5rem;
        margin: 0.5rem 3rem;
        transition: all .2s;

        @media only screen and (max-width: 1050px) {
            margin: 0.5rem 1.5rem;
        }
        @media only screen and (max-width: 715px) {
            padding: 0.7rem 0.5rem;
        }
    }

    &.menu-btn:hover {
        background-color: #f0eeee;
    }

    &.box-btn {
        font-size: 0.9rem;
        background-image: none;
        background-color: white;
        box-shadow: none;
        border: 1px solid rgba(0,0,0, .1);
        color: black;
        border-radius: 5px;
        margin-right: 6rem;
        margin-left: 0;
    }
`;