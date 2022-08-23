import React from 'react';
import styled from "styled-components";
import Icon from '../../Icon';

const IconTextButton = (props) => {
    return (
        <DivTextButton isMenu={props.isMenu}>
            <Icon color={props.isClicked ? 'red' : '#444'} size={20} icon={props.icon} />
            <SpanCount isMenu={props.isMenu}>
                {props.text}
            </SpanCount>
        </DivTextButton>

    )
}

export default IconTextButton;

const DivTextButton = styled.div`
  display: flex;

  @media only screen and (max-width: 715px) {
    flex-direction: ${props => props.isMenu ? 'column' : 'none'};
    align-items: ${props => props.isMenu ? 'center' : 'none'};
  }
`;

const SpanCount = styled.span`
  margin-left: 0.5rem;

  @media only screen and (max-width: 715px) {
    margin-left: ${props => props.isMenu ? '0' : '0.5rem'};
    margin-top: ${props => props.isMenu ? '.2rem' : 'none'};
    font-size: ${props => props.isMenu ? '.8rem' : 'none'};
  }
`;
