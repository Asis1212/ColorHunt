import React from 'react';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const ColorPart = (props) => {
  let navigate = useNavigate();
  const copyCodeColor = (event) => {
    let codeColor = event.target.innerText;
    navigator.clipboard.writeText(codeColor);
    event.target.innerText = "Copied";
    setTimeout(() => {
      event.target.innerText = codeColor;
    }, 1000);
  }

  const openNewPage = (event) => {
    if(event.target.nodeName === 'DIV') {
      setTimeout(() => {
        navigate(`pageColor/${props.id}`);
      }, 300);
    }
  }

  return (
    <ContainerColor onClick={openNewPage} length={props.colors.length}>
      {props.colors.map((colorCode)=> {
        return (
            <Area key={colorCode} color={colorCode}>
                <SpanColorCode onClick={copyCodeColor}>{colorCode}</SpanColorCode>
            </Area>);
      })}
    </ContainerColor>
  )
}

export default ColorPart;

const ContainerColor = styled.div`
    grid-row: 1 / 2;
    border-radius: 8px;
    
    display: grid;
    grid-template-rows: repeat(${props => props.length}, 1fr);

`;

const Area = styled.div`
    background-color: ${props => props.color};
    cursor: pointer;

    display: flex;
    align-items: end;

    &:hover span{
        opacity: 1;
        transform: translateY(0);
    }

    &:first-child {
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }

    &:last-child {
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
    }
`;

const SpanColorCode = styled.span`
    
    color: #fff;
    font-size: 0.8rem;
    font-family: sans-serif;
    letter-spacing: .05rem;
    font-weight: 600;
    background-color: rgba(0,0,0,.15);
    opacity: 0;
    padding: 3px 6px;
    border-top-right-radius: 6px;
    transform: translateY(1rem);
    transition: all .2s;
`;

