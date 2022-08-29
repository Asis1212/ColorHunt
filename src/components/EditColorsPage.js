import React, { useState } from 'react';
import styled from "styled-components";

import Input from './UI/Input';

const TermColorPage = (props) => {
    const [editMode, setEditMode] = useState(false);

    const changeToEditMode = () => {
        setEditMode(true);
    }
    const exitFromEditMode = () => {
        setEditMode(false);
    }

    const changeColor = (colorCode) => {
        props.changeColor(colorCode, props.index);
    }

    const onBlurEditMode = (event) => {
        if(editMode) {
            if(event.target.nodeName === 'DIV') {
                setEditMode(false);
            }
        }
    }

    return (
        <Container color={props.color} onClick={onBlurEditMode}>
            <DivColorCode>
                {editMode && (
                    <DivEdit>
                        <Input
                         type='color'
                         value={props.color}
                         class='color'
                         changeFunction={changeColor}
                         exit={exitFromEditMode}
                         />
                        <SpanCancel onClick={exitFromEditMode}>Cancel</SpanCancel>
                    </DivEdit>
                )}
                {!editMode && <SpanColorCode onClick={changeToEditMode}>{props.color}</SpanColorCode>}
            </DivColorCode>
        </Container>
    )
}

export default TermColorPage;

const Container = styled.div`
    flex-grow: 1;
    width: 100%;
    background-color: ${props => props.color};


    display: flex;
    justify-content: center;
    align-items: end;
`;

const DivColorCode = styled.div`
    margin-bottom: 15vh;

    @media only screen and (max-width: 715px) {
        margin-bottom: 3vh;
    }

    display: grid;
    justify-items: center;
`;

const SpanColorCode = styled.span`
    font-size: 2rem;
    font-weight: 600;
    color: #fff;
    border-radius: 10px;
    padding: .5rem .6rem;
    cursor: pointer;

    &:hover {
        background-color: #7772;
    }
`;

const DivEdit = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
`;

const SpanCancel = styled.span`
    color: #fff;
    margin-top: 0.8rem;
    font-size: 0.9rem;
    transition: all .2s;

    &:hover {
        transform: translateY(-3px);
    }

    &:active {
        transform: translateY(0);
    }
`;
